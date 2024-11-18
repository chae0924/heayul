import styled from 'styled-components';

// Goodbtn 컴포넌트 스타일 정의
export const Tabbtn = styled.button`
  border: 2px solid #fff;
  background-color: var(--color--bg-white);
  color: #222222;
  border-radius: 29px;   
  padding: 8px 18px;  
  font-size: 16px;  
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
  gap: 6px;

  &:hover {
  border: 2px solid  #24C57A;
  background: var(--primary);
  color: #fff;
  }

  &:active {
  border: 2px solid  var(--primary);
  background: #fff;
  color: var(--primary);
  }
`;