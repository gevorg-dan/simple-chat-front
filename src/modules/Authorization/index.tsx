import React from "react";
import { Link, useHistory } from "react-router-dom";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthWrapper,
} from "./styledComponents";

import State from "state";

export default function Authorization() {
  const history = useHistory();
  const [login, setLogin] = React.useState("");

  async function authorise() {
    State.authorize(login);
    history.replace("/chat");
  }

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
          <AuthButton disabled={login === ""} onClick={authorise}>
            Войти
          </AuthButton>
        </Link>
      </AuthForm>
    </AuthWrapper>
  );
}
