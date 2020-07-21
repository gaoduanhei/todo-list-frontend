import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import "antd/dist/antd.css";
import { Button } from "antd";
import "./todos.css";
import TodoList from "./todoList";
import CreateNewCount from "./CreateNewCount";
import { PostLoginContainer } from "../request/postLoginContainer";
import { todoContainer } from "./todoContainer";
import { AddItemContainer } from "../request/addItemContainer";
import EditPassword from "./EditPassword";
import { EditPasswordContainer } from "../request/editPasswordContainer";
import { CreateNewCountContainer } from "../request/createNewCount";

export default function Todos() {
  return (
    <Router>
      <div className="top-nav">
        <ul>
          <li>
            <Link to="/todos/list/" className="link">
              <Button type="primary">TodoList</Button>
            </Link>
            <Link to="/remove/" className="link">
              <Button type="primary">修改账户密码</Button>
            </Link>
            <Link to="/newcount/" className="link">
              <Button type="primary">创建管理账户</Button>
            </Link>
            <Button
              type="primary"
              onClick={() => {
                const port = window.location.port;
                window.location.replace(`http://localhost:${port}`);
              }}
            >
              注销
            </Button>
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <Route path="/todos/list/">
        <todoContainer.Provider>
          <AddItemContainer.Provider>
            <TodoList />
          </AddItemContainer.Provider>
        </todoContainer.Provider>
      </Route>
      <Route path="/remove/">
        <EditPasswordContainer.Provider>
          <EditPassword />
        </EditPasswordContainer.Provider>
      </Route>
      <Route path="/newcount/">
        <CreateNewCountContainer.Provider>
          <CreateNewCount />
        </CreateNewCountContainer.Provider>
      </Route>
    </Router>
  );
}
