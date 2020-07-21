import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { EditPasswordContainer } from "../request/editPasswordContainer";

function EditPassword() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const {
    password,
    setPassword,
    editPassword,
    editPasswordVariables,
  } = EditPasswordContainer.useContainer();
  useEffect(() => {
    if (newPassword !== "" && confirmPassword !== "") {
      if (newPassword === confirmPassword) {
        setPassword(newPassword);
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
      <div>
        <Input.Password
          placeholder="新密码"
          style={{ color: "#000", marginTop: "10px" }}
          onChange={(event) => {
            setNewPassword(event.target.value);
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
              editPassword(editPasswordVariables);
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
}
export default EditPassword;
