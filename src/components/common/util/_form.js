import styled from "styled-components";

// FormContainer
export const FormContainer = styled.div`
  max-width: 636px;
  margin: 0 auto;
  padding: 20px;
  color: var(--default);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
export const Signdiv = styled.div`
  font-size: 16px;
  text-align: center;
    span{
    color: #24C57A;
    margin-right: 4px;
    margin-bottom:0;
  }
`;

// Title
export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

// Form
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
`;

// FormGroup
export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  &.email-group {
    align-items: center;
    flex-wrap: nowrap;

    .email-field {
      display: flex;
      align-items: center;
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 20px 24px;

      .email-input {
        display: block;
        flex: 1;
        border: none;
        font-size: 16px;
        padding: 0;

        &:focus {
          outline: none;
        }
      }

      .dropdown-wrapper {
        margin-left: auto;
        position: relative;
        width: 50%;

        button {
          background-color: transparent;
          border: none;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          width:100%
          justify-content: space-between;
        }

        ul {
          position: absolute;
          top: 100%;
          left: 0;
          list-style: none;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 0;
          margin: 4px 0 0;
          width: 100%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 10;

          li {
            padding: 8px 12px;
            cursor: pointer;

            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
    }
  }
`;

// Label
export const Label = styled.label`
  flex: 0 0 150px;
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;
  display: flex;
  align-items: center;
  height: 100%;

  span {
    color: #24C57A;
    margin-left: 4px;
  }

  @media (max-width: 768px) {
    flex: 0 0 100px;
    margin-right: 8px;
    
  }

  @media (max-width: 480px) {
    flex: 1;
    text-align: left;
    margin-bottom: 8px;
    height: auto;
    align-items: flex-start;
  }
`;

// Input
export const Input = styled.input`

  padding: 20px 24px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: ${(props) => props.width || "100%"}; 

  &:focus {
    border-color: green;
    outline: none;
  }

  &.error {
    border-color: red;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }
`;

// Checkbox
export const Checkbox = styled.input`
  margin-right: 8px;
`;

// Button
export const Button = styled.button`
  padding: 20px;
  font-size: 16px;
  background-color: #24C57A;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #20B16E;
  }
`;

// ErrorMessage
export const ErrorMessage = styled.span`
  font-size: 14px;
  color: #F04438;
  margin-top: 0.5rem;
  margin-left: 1rem;
`;

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
