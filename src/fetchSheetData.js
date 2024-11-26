const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

// 서비스 계정 키 파일 경로
const SERVICE_ACCOUNT_FILE = "../service-account-key.json"; // src 기준 상위 디렉터리로 수정


// 스프레드시트 ID와 시트 이름
const SPREADSHEET_ID = "1FIqB2fw2y4bWIuNyFxNF6R6bpCVQUd4blO3jvhRJF9Q";
const SHEET_NAME = "sheet1";

// Google Sheets API 클라이언트 생성
const auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_FILE,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

async function fetchSheetData() {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: SHEET_NAME,
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            console.log("No data found.");
            return;
        }

        // 헤더와 데이터 매핑
        const [headers, ...dataRows] = rows;
        const jsonData = dataRows.map((row) => {
            return headers.reduce((obj, header, index) => {
                obj[header] = row[index] || ""; // 값이 없을 경우 빈 문자열
                return obj;
            }, {});
        });

        // JSON 파일 경로
        const outputFolder = path.join(__dirname, "data");
        const outputFile = path.join(outputFolder, "product.json");

        // 데이터 폴더 생성 확인
        if (!fs.existsSync(outputFolder)) {
            fs.mkdirSync(outputFolder);
        }

        // JSON 파일로 저장
        fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));
        console.log(`Data successfully written to ${outputFile}`);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

fetchSheetData();
