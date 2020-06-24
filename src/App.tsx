import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { CookiesProvider } from "react-cookie";

import SignInComponent from "modules/Authorization/SignIn";
import SignUpComponent from "modules/Authorization/SignUp";
import ChatComponent from "modules/Chat";

import { useEventEmitter } from "./lib/events";
import globalEventBus from "./lib/globalEventBus";
import { useInitial } from "./lib/hooks";

import State from "./state";

const history = createBrowserHistory();

function App() {
  const rootRouteName = useInitial();

  useEventEmitter(globalEventBus, "SIGN_IN_SUCCESS", () =>
    history.replace("/chat")
  );

  React.useEffect(() => {
    State.connectToChat();
    history.push(rootRouteName);
  }, []);
  console.log("app");
  return (
    <CookiesProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/sign-in" component={SignInComponent} />
          <Route exact path="/sign-up" component={SignUpComponent} />
          <Route exact path="/chat" component={ChatComponent} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
