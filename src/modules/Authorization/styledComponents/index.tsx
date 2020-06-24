import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  border-radius: 10px;
`;

export const AuthLabel = styled.label`
  font-size: 2.3rem;
  color: #3b374f;
  margin-bottom: 30px;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  background-color: #e7e7e7;
  border-radius: 2px;
  color: #a1a1a3;
  margin-bottom: 10px;
  font-size: 1.2rem;

  ::placeholder {
    color: #a1a1a3;
  }
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: white;
  width: 100%;
  height: 60px;
  border-radius: 2px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;

  background: linear-gradient(325.78deg, #2a8bf2 14.76%, #7cb8f7 87.3%);
  box-shadow: 4px 6px 10px rgba(42, 139, 242, 0.15),
    2px 2px 25px rgba(42, 139, 242, 0.05), 4px 4px 25px rgba(42, 139, 242, 0.15);
  :hover {
    background: linear-gradient(
      325.78deg,
      rgba(42, 139, 242, 0.9) 14.76%,
      rgba(124, 184, 247, 0.9) 87.3%
    );
  }
  :disabled {
    cursor: default;
    background: linear-gradient(
      325.78deg,
      rgba(42, 139, 242, 0.5) 14.76%,
      rgba(124, 184, 247, 0.5) 87.3%
    );
  }
`;

export const SignUpButton = styled.button`
  will-change: color;
  font-size: 1rem;
  color: #5d5d5d;
  border: none;
  outline: none;
  background: none;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s;

  :hover {
    color: #969696;
  }
`;

export const FailElement = styled.p`
  display: block;
  color: #cd1d1d;
  font-size: 1rem;
  margin-bottom: 10px;
  height: 16px;
  font-weight: bold;
`;
