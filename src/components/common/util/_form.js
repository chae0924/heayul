import styled from "styled-components";

// FormContainer
export const FormContainer = styled.div`
  max-width: 636px;
  margin: 0 auto;
  padding: 24px 0 32px 0;
  color: var(--default);
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid #222;
  `;

// Signdiv
export const Signdiv = styled.div``;

// Title
export const Title = styled.h1``;

// Form
export const Form = styled.form``;

// FormGroup
export const FormGroup = styled.div``;

// Label
export const Label = styled.label``;

// Input
export const Input = styled.input``;

// Checkbox
export const Checkbox = styled.input``;

// Button
export const Button = styled.button``;

// ErrorMessage
export const ErrorMessage = styled.span``;

// AtSymbol
export const AtSymbol = styled.span`
  font-size: 16px;
  color: #666;
  margin: 0 8px;

  @media (max-width: 480px) {
    margin: 0 4px;
  }
`;

// DropdownButton
export const DropdownButton = styled.button`
  font-size: 14px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:after {
    content: "▼";
    font-size: 12px;
    margin-left: 8px;
    color: #666;
  }

  &:hover {
    border-color: green;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;

    &:after {
      margin-left: 4px;
    }
  }
`;

// DropdownMenu
export const DropdownMenu = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 100%;
`;

// DropdownItem
export const DropdownItem = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
