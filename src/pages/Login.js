import React from "react";
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { Form, Button, Container } from "react-bootstrap";
import logo from "../assets/logo.svg";
import styles from "./login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
    <div className={styles.loginWrapper}>
      <Container className={styles.innerContainer}>
        <img src={logo} alt="Logo" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 아이디 입력 필드 */}
          <Form.Group controlId="formBasicUsername">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력해주세요."
              {...register("username", {
                required: "아이디는 필수 입력 항목입니다.",
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "아이디는 영문과 숫자만 입력 가능합니다.",
                },
              })}
            />
            {errors.username && (
              <p className={styles.errorMessage}>{errors.username.message}</p>
            )}
          </Form.Group>

          {/* 비밀번호 입력 필드 */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", { required: "비밀번호는 필수 입력 항목입니다." })}
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
            )}
          </Form.Group>

          {/* 로그인 버튼 */}
          <Button type="submit" className={`${styles.button} ${styles.loginButton} mt-4`}>
            로그인
          </Button>
        </Form>

        {/* 아이디/비밀번호 찾기 및 회원가입 */}
        <div className={styles.linkContainer}>
          <a href="/find-account" className={styles.link}>
            아이디/비밀번호 찾기
          </a>
          <Link to='/signup'>
            회원가입
          </Link>
        </div>

        {/* 간편 로그인 버튼 */}
        <div className="d-flex justify-content-center mt-4">
          <div
            className={`${styles.circleButton} ${styles.kakao}`}
            onClick={() => handleSocialLogin("kakao")}
          >
            <img src="../assets/kakao-logo.svg" alt="Kakao" width="24" />
          </div>
          <div
            className={`${styles.circleButton} ${styles.naver}`}
            onClick={() => handleSocialLogin("naver")}
          >
            <img src="../assets/naver-logo.svg" alt="Naver" width="24" />
          </div>
          <div
            className={`${styles.circleButton} ${styles.toss}`}
            onClick={() => handleSocialLogin("toss")}
          >
            <img src="../assets/toss-logo.svg" alt="Toss" width="24" />
          </div>
          <div
            className={`${styles.circleButton} ${styles.google}`}
            onClick={() => handleSocialLogin("google")}
          >
            <img src="../assets/google-logo.svg" alt="Google" width="24" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
