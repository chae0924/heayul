import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import logoS from "../assets/logoS.svg";
import kakao from "../assets/svg/kakao.svg";
import toss from "../assets/svg/toss.png";
import naver from "../assets/svg/naver.svg";
import google from "../assets/svg/google.svg";
import {
  FormContainer,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  Signdiv,
} from "../components/common/util/_form";
import styles from "./login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // API 요청 전송
      const response = await axios.post("/api/auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      // 서버 응답 처리
      if (response.status === 200) {
        // JWT 토큰 저장 (리소스 최소화 위해 로컬 스토리지 사용)
        localStorage.setItem("authToken", response.data.token);

        // 로그인 성공 후 메인 페이지로 이동
        alert("로그인 성공");
        navigate("/dashboard"); // 대시보드 페이지로 이동
      }
    } catch (error) {
      // 서버 오류 처리
      if (error.response) {
        alert(error.response.data.message || "로그인 실패. 다시 시도해주세요.");
      } else {
        alert("서버에 연결할 수 없습니다.");
      }
    }
  };
    console.log(data);
    // 로그인 API 연동 예정
  };

  const handleSocialLogin = (platform) => {
    switch (platform) {
      case "kakao":
        window.open("https://kakao.com/login", "_blank");
        break;
      case "naver":
        window.open("https://naver.com/login", "_blank");
        break;
      case "toss":
        window.open("https://toss.im/login", "_blank");
        break;
      case "google":
        window.open("https://accounts.google.com/signin", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <FormContainer className={`${styles.logDiv} px-3 px-md-0`}>
      <div className="text-center mb-5 mt-5">
        <img src={logoS} alt="Logo" />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} className="border-0">
        {/* 아이디 입력 필드 */}
        <FormGroup className="mb-3">
          <Input
            id="username"
            type="text"
            placeholder="아이디를 입력해주세요."
            {...register("username", {
              required: "* 아이디를 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "* 아이디는 영문과 숫자만 가능합니다.",
              },
            })}
            className={`form-control  ${errors.username ? "is-invalid" : ""}`}
          />
          {errors.username && (
            <ErrorMessage className="text-danger mt-1">
              {errors.username.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 비밀번호 입력 필드 */}
        <FormGroup className="mb-3">
          <Input
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "* 비밀번호를 입력해주세요.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,30}$/,
                message:
                  "* 비밀번호는 12~30자, 영문/숫자/특수문자를 포함해야 합니다.",
              },
            })}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <ErrorMessage className="text-danger mt-1">
              {errors.password.message}
            </ErrorMessage>
          )}
        </FormGroup>

        {/* 아이디/비밀번호 찾기 및 회원가입 */}

        <div className={`${styles.sub} d-flex justify-content-end my-3`}>
          <ul className="d-flex">
            <li className="afterbar position-relative">
              <Link to="/*" className="me-2">
                아이디 찾기
              </Link>
            </li>
            <li className="afterbar position-relative">
              <Link to="/*" className="mx-2">
                비밀번호 변경
              </Link>
            </li>
            <li>
              <Link to="/signup" className="ms-2">
                회원가입
              </Link>
            </li>
          </ul>
        </div>

        {/* 로그인 버튼 */}
        <Button type="submit" className={`${styles.lgButton}`}>
          로그인
        </Button>
      </Form>

      {/* 간편 로그인 버튼 */}
      <div className={`${styles.ezlogin} d-flex justify-content-center mt-4}`}>
        <div
          className={`${styles.circleButton} ${styles.kakao}`}
          onClick={() => handleSocialLogin("kakao")}
        >
          <img src={kakao} alt="Kakao" width="24" />
        </div>
        <div
          className={`${styles.circleButton} ${styles.naver}`}
          onClick={() => handleSocialLogin("naver")}
        >
          <img src={naver} alt="Naver" width="24" />
        </div>
        <div
          className={`${styles.circleButton} ${styles.toss}`}
          onClick={() => handleSocialLogin("toss")}
        >
          <img src={toss} alt="Toss" width="24" />
        </div>
        <div
          className={`${styles.circleButton} ${styles.google}`}
          onClick={() => handleSocialLogin("google")}
        >
          <img src={google} alt="Google" width="24" />
        </div>
      </div>
    </FormContainer>
  );

export default Login;
