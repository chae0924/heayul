import React, { useState } from 'react';
import styled from 'styled-components';

export const Checktbtn = styled.button`
  border: 2px solid var(--primary);
  background: #FFF;
  color: #222222;  
  border-radius: 55px;   
  padding: 19px 81px;  
  font-size: 20px;  
  cursor: pointer;  
  transition: background-color 0.3s; 

  &:active {
    background-color: var(--primary);
    color: #FFF; /* 액티브 시 텍스트 색상 변경 */
  }
`;

export default function CheckButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Checktbtn onClick={handleClick}>
      {isClicked ? "확인하기" : "중복확인"}
    </Checktbtn>
  );
}