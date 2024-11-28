import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  Checkbox,
  Signdiv,
} from "../components/common/util/_form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isTermsValid, setIsTermsValid] = useState(false); // 약관 검증 상태

  const onSubmit = (data) => {
    if (!isTermsValid) {
      alert("필수 약관에 동의해주세요.");
      return;
    }
    console.log("회원가입 데이터:", data);
  };


  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleSelect = (domain) => {
    setSelectedDomain(domain);
    setShowDropdown(false);
  };

  return (
    <FormContainer>
      <Title>회원가입</Title>
      <Signdiv className="d-flex">
        <p className="ms-auto me-2">
          <span className="">*</span>필수입력사항
        </p>
      </Signdiv>
      <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        {/* 아이디 */}
        <FormGroup className="mb-3">
          <Label htmlFor="username">
            아이디<span>*</span>
          </Label>
          <div className="d-flex flex-wrap col row">
            <div className="d-flex col">
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
              <Button type="button" className="ms-2 w-50">
                중복확인
              </Button>
            </div>
            {errors.username && (
              <ErrorMessage className="text-danger mt-2">
                {errors.username.message}
              </ErrorMessage>
            )}
          </div>
        </FormGroup>

        {/* 비밀번호 */}
        <FormGroup className="mb-3">
  <Label htmlFor="password">
    비밀번호<span>*</span>
  </Label>
  <div className="d-flex flex-wrap col row">
    <div className="d-flex col">
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
      <ErrorMessage className="text-danger mt-2">
        {errors.password.message}
      </ErrorMessage>
    ) : watch("password") && /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{12,30}$/.test(watch("password")) ? (
      <ErrorMessage className="text-success mt-2">
        * 사용 가능한 비밀번호입니다.
      </ErrorMessage>
    ) : null}
  </div>
</FormGroup>

        {/* 비밀번호 확인 */}
        <FormGroup className="mb-3">
          <Label htmlFor="confirmPassword">
            비밀번호 확인<span>*</span>
          </Label>
          <div className="d-flex flex-wrap col row">
            <div className="d-flex col">
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
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
            </div>
            {errors.confirmPassword ? (
              <ErrorMessage className="text-danger mt-2">
                {errors.confirmPassword.message}
              </ErrorMessage>
            ) : (
              watch("confirmPassword") &&
              watch("confirmPassword") === watch("password") && (
                <ErrorMessage className="text-success mt-2">
                  * 비밀번호가 일치합니다.
                </ErrorMessage>
              )
            )}
          </div>
        </FormGroup>

        {/* 이름 */}
        <FormGroup className="mb-3">
          <Label htmlFor="name">
            이름<span>*</span>
          </Label>
          <div className="d-flex flex-wrap col row">
            <div className="col">
              <Input
                id="name"
                type="text"
                placeholder="이름을 입력해주세요."
                {...register("name", { required: "* 필수 항목입니다." })}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
            </div>
            {errors.name && (
              <ErrorMessage className="text-danger mt-2">
                {errors.name.message}
              </ErrorMessage>
            )}
          </div>
        </FormGroup>

        {/* 이메일 */}
        <FormGroup className="email-group mb-3">
          <Label htmlFor="email">
            이메일<span>*</span>
          </Label>
          <div className="col">
            <div className="email-field d-flex col">
              <Input
                id="email"
                type="text"
                placeholder="heyul"
                {...register("emailUsername", {
                  required: "* 필수 항목입니다.",
                })}
                className={`email-input ${
                  errors.emailUsername ? "is-invalid" : ""
                }`}
              />
              <AtSymbol>@</AtSymbol>
              <div className="dropdown-wrapper">
                <DropdownButton className="w-100 justify-content-between"
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {selectedDomain || "선택하기"}
                </DropdownButton>
                {showDropdown && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleSelect("gmail.com")}>
                      gmail.com
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("naver.com")}>
                      naver.com
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("daum.net")}>
                      daum.net
                    </DropdownItem>
                    <DropdownItem onClick={() => handleSelect("kakao.com")}>
                      hanmail.net
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </div>
            </div>
            {errors.emailUsername && (
              <ErrorMessage className="text-danger mt-2">
                {errors.emailUsername.message}
              </ErrorMessage>
            )}
          </div>
        </FormGroup>

        {/* 연락처 */}
        <FormGroup className="mb-3">
          <Label htmlFor="phone">
            연락처<span>*</span>
          </Label>
          <div className="d-flex flex-wrap col row">
            <div className="d-flex col">
              <Input
                id="phone"
                type="tel"
                placeholder="연락처를 입력해주세요."
                {...register("phone", {
                  required: "* 연락처는 필수 항목입니다.",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "* 유효한 연락처를 입력해주세요.",
                  },
                })}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              />
              <Button type="button" className="ms-2 w-50">
                인증번호받기
              </Button>
            </div>
            {errors.phone && (
              <ErrorMessage className="text-danger mt-2">
                {errors.phone.message}
              </ErrorMessage>
            )}
          </div>
        </FormGroup>
        {/* 가입 버튼 */}
        <Button type="submit" className="btn btn-success w-100">
          가입하기
        </Button>
      </Form>
    </FormContainer>
  );
};

export default SignUp;
