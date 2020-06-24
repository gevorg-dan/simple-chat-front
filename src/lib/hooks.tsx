import React from "react";
import { useCookies } from "react-cookie";
import State from "../state";

export function useBoolean(
  initValue: boolean
): [boolean, () => void, () => void] {
  const [state, setState] = React.useState(initValue);
  return [state, () => setState(true), () => setState(false)];
}

export function useInitial(): string {
  const [cookies] = useCookies();

  if (!cookies.login || !cookies.password) return "/sign-in";

  State.signIn(cookies.login, cookies.password);
  return "/chat";
}
