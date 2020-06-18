import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";

import Authorization from "modules/Authorization";
import Chat from "modules/Chat";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Redirect exact to="/chat" from="/" />
        <Route exact path="/auth" component={Authorization} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
