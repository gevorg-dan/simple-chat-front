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
  margin-bottom: 50px;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  background-color: #e7e7e7;
  border-radius: 2px;
  color: #a1a1a3;
  margin-bottom: 20px;
  font-size: 1.2rem;

  ::placeholder {
    color: #a1a1a3;
  }
`;

export const AuthButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  width: 100%;
  height: 60px;
  border-radius: 2px;
  background-color: #8282f6;
  border: none;
  outline: none;
  :disabled {
    background-color: rgba(130, 130, 246, 0.54);
  }
`;
