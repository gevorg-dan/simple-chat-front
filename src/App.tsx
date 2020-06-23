import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { CookiesProvider, useCookies } from "react-cookie";

import Authorization from "modules/Authorization";
import Chat from "modules/Chat";

import State from "./state";

const history = createBrowserHistory();

function useInitial(): string {
  const [cookies] = useCookies(["user"]);

  if (!cookies.user) return "/login";

  State.authorize(cookies.user.name);
  return "/chat";
}

function App() {
  const rootRouteName = useInitial();

  React.useEffect(() => {
    State.connectToChat();
    history.push(rootRouteName);
  }, []);

  return (
    <CookiesProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Authorization} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    </CookiesProvider>
  );
}

export default App;
