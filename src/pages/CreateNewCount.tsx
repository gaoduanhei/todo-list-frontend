import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { CreateNewCountContainer } from "../request/createNewCount";

function CreateNewCount() {
  const [newPassword, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const {
    setNewCountPassword,
    setNewCountName,
    createNewCountVariables,
    createNewCount,
  } = CreateNewCountContainer.useContainer();
  useEffect(() => {
    if (newPassword !== "" && confirmPassword !== "") {
      if (newPassword === confirmPassword) {
        // console.log("same");
        setNewCountPassword(newPassword);
      } 
    }
  }, [newPassword && confirmPassword]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "15%",
      }}
    >
      <div style={{ width: "400px" }}>
        <Input
          placeholder="用户名"
          style={{ color: "#000" }}
          onChange={(event) => {
            setNewCountName(event.target.value);
          }}
        ></Input>
        <Input.Password
          placeholder="密码"
          style={{ color: "#000", marginTop: "10px" }}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></Input.Password>
        <Input.Password
          placeholder="密码确认"
          style={{ marginTop: "10px", color: "#000" }}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        ></Input.Password>
        <Button
          type="primary"
          style={{ marginTop: "12px" }}
          onClick={() => {
            newPassword &&
              confirmPassword &&
              confirmPassword !== newPassword &&
              alert("密码不一致请核对");
            newPassword &&
              confirmPassword &&
              confirmPassword === newPassword &&
              createNewCount(createNewCountVariables);
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
}
export default CreateNewCount;
