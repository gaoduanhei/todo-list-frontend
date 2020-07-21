import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import UserLogin from "./userLogin";
import Todos from "./todos";
import { PostLoginContainer } from "../request/postLoginContainer";

export default function Home() {
  const { res } = PostLoginContainer.useContainer();
  if (res.data && res.data.login === "login successed!") {
    return (
      <Router>
        <Redirect to="/todos/"></Redirect>
        <Route path="/todos/">
          <Todos />
        </Route>
      </Router>
    );
  } else {
    return (
      <Router>
        <Route exact path="/">
          <UserLogin />
        </Route>
      </Router>
    );
  }
}
