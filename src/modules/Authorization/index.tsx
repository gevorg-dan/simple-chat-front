import React from "react";
import { Link } from "react-router-dom";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthWrapper,
} from "./styledComponents";

export default function Authorization() {
  const [login, setLogin] = React.useState("");

  return (
    <AuthWrapper>
      <AuthForm>
        <AuthLabel>Авторизация</AuthLabel>
        <AuthInput
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Введите ваше имя"
        />
        <Link to="/chat" style={{ width: "100%", textDecoration: "none" }}>
          <AuthButton disabled={login === ""}>Войти</AuthButton>
        </Link>
      </AuthForm>
    </AuthWrapper>
  );
}
