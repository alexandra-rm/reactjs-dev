import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContainer } from "./App.styled";
import { ForbiddenScreen } from "./screens/ForbiddenScreen";
import { GameScreen } from "./screens/GameScreen";
import { LoginScreen } from "./screens/LoginScreen";

export const App: React.FC<{}> = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/forbidden">
            <ForbiddenScreen />
          </Route>
          <Route exact path="/">
            <GameScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
};