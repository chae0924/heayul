import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Term from "../common/Term";
import {
  FormContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  AtSymbol,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  Button,
  ErrorMessage,
  Signdiv,
} from "../common/util/_form";

const FormSet = () => {
  const [isTermsValid, setIsTermsValid] = useState(false); // 약관 검증 상태
  const [optionalTerms, setOptionalTerms] = useState({}); // 선택 약관 데이터
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  // 도메인 선택 로직
  const handleSelect = (domain) => {
    setSelectedDomain(domain);
    setShowDropdown(false);
  };

  // 연락처 관련 상태 및 타이머 관리
  const [timer, setTimer] = useState(180);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const timerRef = useRef(null);

  // 타이머 시작 및 초기화
  const handleSendCode = () => {
    setTimer(180);
    setIsTimerActive(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const onSubmit = (data) => {
    if (!selectedDomain) {
      alert("이메일 도메인을 선택해주세요.");
      return;
    }
    // {(데이터 필터링)}
    const completeEmail = `${data.emailUsername}@${selectedDomain}`;
    // 불필요한 데이터 제거 후 필요한 데이터만 payload에 포함
    const { confirmPassword, emailUsername, ...filteredData } = data;
    const payload = {
      ...filteredData,
      email: completeEmail,
    };

    // {(데이터 전송 확인 로그)}
    console.log("회원가입 데이터:", payload);
    // 서버로 전송하는 로직 추가 가능
    
  };

  return (
    <FormContainer>
      <Title>회원가입</Title>
      <Signdiv>
        <p>
          <span>*</span> 필수입력사항
        </p>
      </Signdiv>
      <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        {/* 아이디 */}
        <FormGroup className="d-flex flex-column flex-md-row ">
          <div className="col-md-3 ">
            <Label htmlFor="username">
              아이디<span>*</span>
            </Label>
          </div>
          <div className="col-md-9">
            <div className="row g-0 align-items-center">
              <div className="col-9 px-0">
                <Input
                  id="username"
                  type="text"
                  placeholder="아이디를 입력해주세요."
                  {...register("username", {
                    required: "* 필수 항목입니다.",
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: "* 아이디는 영문과 숫자만 가능합니다.",
                    },
                  })}
                  className={`form-control flex-grow-1 ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="col-3 px-0 ">
                <Button type="button" className="btn btn-primary w-100">중복확인</Button>
              </div>
            </div>
            {errors.username && (
              <ErrorMessage className="text-danger">
                {errors.username.message}
              </ErrorMessage>
            )}
          </div>
        </FormGroup>

        {/* 비밀번호 */}
        <FormGroup>
          <div>
            <Label htmlFor="password">
              비밀번호<span>*</span>
            </Label>
          </div>
          <div>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", {
                required: "* 필수 항목입니다.",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,30}$/,
                  message:
                    "* 비밀번호는 12~30자, 영문/숫자/특수문자를 포함해야 합니다.",
                },
              })}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
          </div>
          {errors.password ? (
            <ErrorMessage className="text-danger">
              {errors.password.message}
            </ErrorMessage>
          ) : watch("password") &&
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,30}$/.test(
              watch("password")
            ) ? (
            <ErrorMessage className="text-success">
              * 사용 가능한 비밀번호입니다.
            </ErrorMessage>
          ) : null}
        </FormGroup>

        {/* 비밀번호 확인 */}
        <FormGroup>
          <div>
            <Label htmlFor="confirmPassword">
              비밀번호 확인<span>*</span>
            </Label>
          </div>
          <div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              {...register("confirmPassword", {
                required: "* 비밀번호가 일치하지 않습니다.",
                validate: (value) =>
                  value === watch("password") ||
                  "* 비밀번호가 일치하지 않습니다.",
              })}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
          </div>
          {errors.confirmPassword ? (
            <ErrorMessage className="text-danger">
              {errors.confirmPassword.message}
            </ErrorMessage>
          ) : (
            watch("confirmPassword") &&
            watch("confirmPassword") === watch("password") && (
              <ErrorMessage className="text-success">
                * 비밀번호가 일치합니다.
              </ErrorMessage>
            )
          )}
        </FormGroup>
        {/* 이름 */}
        <FormGroup>
          <div>
            <Label htmlFor="name">
              이름<span>*</span>
            </Label>
          </div>
          <div>
            <Input
              id="name"
              type="text"
              placeholder="이름을 입력해주세요."
              {...register("name", { required: "* 필수 항목입니다." })}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
          </div>
          {errors.name && (
            <ErrorMessage className="text-danger">
              {errors.name.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 이메일 */}
        <FormGroup className="email-group">
          <div>
            <Label htmlFor="email">
              이메일<span>*</span>
            </Label>
          </div>
          <div className="email-field">
            <Input
              id="email"
              type="text"
              placeholder="heyul"
              {...register("emailUsername", {
                required: "* 필수 항목입니다.",
              })}
              className={` form-control ${
                errors.emailUsername ? "is-invalid" : ""
              }`}
            />
            <AtSymbol>@</AtSymbol>
            <DropdownButton
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedDomain || "선택하기"}
            </DropdownButton>
            {showDropdown && (
              <DropdownMenu>
                {["gmail.com", "naver.com", "daum.net", "hanmail.net"].map(
                  (domain) => (
                    <DropdownItem
                      key={domain}
                      onClick={() => handleSelect(domain)}
                    >
                      {domain}
                    </DropdownItem>
                  )
                )}
              </DropdownMenu>
            )}
          </div>
          {errors.emailUsername && (
            <ErrorMessage className="text-danger">
              {errors.emailUsername.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 연락처 */}
        <FormGroup>
          <div>
            <Label htmlFor="phone">
              연락처<span>*</span>
            </Label>
          </div>
          <div>
            <Input
              id="phone"
              type="tel"
              placeholder="숫자만 입력해주세요."
              {...register("phone", {
                required: "* 연락처는 필수 항목입니다.",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "* 유효한 연락처를 입력해주세요.",
                },
              })}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            <Button type="button" onClick={handleSendCode}>
              인증번호 받기
            </Button>
          </div>
          <div>
            <Input
              id="vscode"
              type="text"
              placeholder="인증번호"
              value={verificationCode}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 6) {
                  setVerificationCode(value);
                }
              }}
              maxLength={6}
              className={`form-control ${errors.vscode ? "is-invalid" : ""}`}
            />
            <Button type="button" onClick={handleSendCode}>
              인증번호 확인
            </Button>
            <div>{isTimerActive && <span>{formatTime(timer)}</span>}</div>
          </div>
        </FormGroup>

        {/* 주소 */}
        <FormGroup>
          <div>
            <Label htmlFor="address">
              주소<span>*</span>
            </Label>
          </div>
          <Button
            type="button"
            onClick={() => {
              alert("주소 찾기 팝업이 열립니다.");
            }}
          >
            주소 검색
          </Button>
          <div>
            <Input
              id="detailedAddress"
              type="text"
              placeholder="상세 주소"
              {...register("detailedAddress", {
                maxLength: {
                  value: 100,
                  message: "* 상세 주소는 100자 이내로 입력해주세요.",
                },
              })}
              className={`form-control ${
                errors.detailedAddress ? "is-invalid" : ""
              }`}
            />
          </div>
        </FormGroup>

        {/* 성별 */}
        <FormGroup>
          <div>
            <Label htmlFor="gender">
              성별<span>*</span>
            </Label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender", { required: "* 성별을 선택해주세요." })}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender", { required: "* 성별을 선택해주세요." })}
              />
              여자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="none"
                {...register("gender", { required: "* 성별을 선택해주세요." })}
              />
              선택안함
            </label>
          </div>
          {errors.gender && (
            <ErrorMessage className="text-danger">
              {errors.gender.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 생년월일 */}
        <FormGroup>
          <div>
            <Label htmlFor="birthdate">생년월일</Label>
          </div>
          <div>
            <Input
              id="birthdate"
              type="text"
              placeholder="생년월일 8자리를 입력해주세요."
              {...register("birthdate", {
                maxLength: {
                  value: 8,
                  message: "* 생년월일은 8자리 숫자로 입력해주세요.",
                },
                pattern: {
                  value: /^\d{8}$/,
                  message: "* 생년월일은 숫자만 입력 가능합니다.",
                },
              })}
              className={`form-control ${errors.birthdate ? "is-invalid" : ""}`}
            />
          </div>
          {errors.birthdate && (
            <ErrorMessage className="text-danger">
              {errors.birthdate.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 이용약관 */}
        <Term
          onValidation={(valid) => setIsTermsValid(valid)} // 약관 유효성만 처리
          onOptionalTerms={(terms) => setOptionalTerms(terms)} // 선택 약관 데이터 설정
        />

        {/* 가입 버튼 */}
        <Button type="submit">가입하기</Button>
      </Form>
    </FormContainer>
  );
};

export default FormSet;
