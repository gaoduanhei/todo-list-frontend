import React from "react";
import { Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./userLogin.css";
import "./button.less";
import { useLogContainer } from "./useLogContainer";
import { PostLoginContainer } from "../request/postLoginContainer";
import PostLogin from "../request/PostLogin";

export default function UserLogin() {
  let { setUserName, setPassword } = useLogContainer.useContainer();
  const { executeQuery } = PostLoginContainer.useContainer();

  return (
    <div className="login-container">
      <div className="login-box">
        <Input
          placeholder="username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></Input>
        <Input.Password
          style={{
            backgroundColor: "initial",
            border: "0px",
            borderBottom: "2px solid #fff",
          }}
          placeholder="password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></Input.Password>
        <Button
          type="primary"
          onClick={() => {
            executeQuery();
          }}
        >
          login
        </Button>
      </div>
      <PostLogin />
    </div>
  );
}
