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

    const completeEmail = `${data.emailUsername}@${selectedDomain}`;
     // 불필요한 데이터 제거 후 필요한 데이터만 payload에 포함
    const { confirmPassword, emailUsername, ...filteredData } = data;
    const payload = {
      ...filteredData,
      email: completeEmail,
    };

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* 아이디 */}
        <FormGroup>
          <Label htmlFor="username">
            아이디<span>*</span>
          </Label>
          <div>
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
              className={errors.username ? "is-invalid" : ""}
            />
            <Button type="button">중복확인</Button>
          </div>
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </FormGroup>

        {/* 비밀번호 */}
        <FormGroup>
          <Label htmlFor="password">
            비밀번호<span>*</span>
          </Label>
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
              className={errors.password ? "is-invalid" : ""}
            />
          </div>
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        {/* 비밀번호 확인 */}
        <FormGroup>
          <Label htmlFor="confirmPassword">
            비밀번호 확인<span>*</span>
          </Label>
          <div>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              {...register("confirmPassword", {
                required: "* 비밀번호 확인은 필수 항목입니다.",
                validate: (value) =>
                  value === watch("password") ||
                  "* 비밀번호가 일치하지 않습니다.",
              })}
              className={errors.confirmPassword ? "is-invalid" : ""}
            />
          </div>
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
          )}
        </FormGroup>
        {/* 이름 */}
        <FormGroup>
          <Label htmlFor="name">
            이름<span>*</span>
          </Label>
          <div>
            <Input
              id="name"
              type="text"
              placeholder="이름을 입력해주세요."
              {...register("name", { required: "* 필수 항목입니다." })}
              className={errors.name ? "is-invalid" : ""}
            />
          </div>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>

        {/* 이메일 */}
        <FormGroup>
          <Label htmlFor="email">
            이메일<span>*</span>
          </Label>
          <div>
            <Input
              id="email"
              type="text"
              placeholder="이메일 아이디"
              {...register("emailUsername", { required: "* 필수 항목입니다." })}
              className={errors.emailUsername ? "is-invalid" : ""}
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
            <ErrorMessage>{errors.emailUsername.message}</ErrorMessage>
          )}
        </FormGroup>

        {/* 연락처 */}
        <FormGroup>
          <Label htmlFor="phone">
            연락처<span>*</span>
          </Label>
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
              className={errors.phone ? "is-invalid" : ""}
            />
            <Button type="button" onClick={handleSendCode}>
              인증번호받기
            </Button>
          </div>
          <div>
            <Input
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
            />
            <div>{isTimerActive && <span>{formatTime(timer)}</span>}</div>
          </div>
        </FormGroup>

        {/* 주소 */}
        <FormGroup>
          <Label htmlFor="address">
            주소<span>*</span>
          </Label>
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
              className={errors.detailedAddress ? "is-invalid" : ""}
            />
          </div>
        </FormGroup>

        {/* 성별 */}
        <FormGroup>
          <Label htmlFor="gender">
            성별<span>*</span>
          </Label>
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
            <ErrorMessage>{errors.gender.message}</ErrorMessage>
          )}
        </FormGroup>

        {/* 생년월일 */}
        <FormGroup>
          <Label htmlFor="birthdate">생년월일</Label>
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
              className={errors.birthdate ? "is-invalid" : ""}
            />
          </div>
          {errors.birthdate && (
            <ErrorMessage>{errors.birthdate.message}</ErrorMessage>
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
