import React from "react";
import { Link } from "react-router-dom";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthWrapper,
  SignUpButton,
  FailElement,
} from "../styledComponents";

import globalEventBus from "lib/globalEventBus";
import { useEventEmitter } from "lib/events";

import State from "state";

export default function SignUp() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fail, setFail] = React.useState(false);
  useEventEmitter(globalEventBus, "SIGN_UP_FAILED", () => setFail(true));

  function signUp() {
    State.signUp(login.trim().toLocaleLowerCase(), password.trim());
    setLogin("");
    setPassword("");
  }

  return (
    <AuthWrapper>
      <AuthForm>
        <AuthLabel>Регистрация</AuthLabel>
        <FailElement>{fail && "Логин уже занят"}</FailElement>
        <AuthInput
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Введите логин"
        />
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <AuthButton disabled={!login || !password} onClick={signUp}>
          Зарегестрироваться
        </AuthButton>
        <Link to="/sign-in" style={{ textDecoration: "none" }}>
          <SignUpButton>Авторизоваться</SignUpButton>
        </Link>
      </AuthForm>
    </AuthWrapper>
  );
}
