import React from "react";
import { Link } from "react-router-dom";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthWrapper,
  FailElement,
  SignUpButton,
} from "../styledComponents";

import { useEventEmitter } from "lib/events";
import globalEventBus from "lib/globalEventBus";

import State from "state";

export default function SignIn() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fail, setFail] = React.useState(false);

  useEventEmitter(globalEventBus, "SIGN_IN_FAILED", () => setFail(true));

  async function signIn() {
    State.signIn(login.trim().toLocaleLowerCase(), password.trim());
    setLogin("");
    setPassword("");
  }

  return (
    <AuthWrapper>
      <AuthForm>
        <AuthLabel>Авторизация</AuthLabel>
        <FailElement>{fail && "Неправильный логин или пароль"}</FailElement>
        <AuthInput
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Логин"
        />
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <AuthButton disabled={!login || !password} onClick={signIn}>
          Войти
        </AuthButton>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <SignUpButton>Зарегестрироваться</SignUpButton>
        </Link>
      </AuthForm>
    </AuthWrapper>
  );
}
