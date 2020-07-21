import { useMutation } from "urql";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { useLogContainer } from "../pages/useLogContainer";

const EditPassword = `
mutation j ($username:ID,$password:String){
    updateAccount(username:$username,password:$password){
      username
      password
    }
  }
`;

function useEditPassword() {
  const { userName } = useLogContainer.useContainer();
  const [editPasswordResule, editPassword] = useMutation(EditPassword);
  const [password, setPassword] = useState<string>("");

  const editPasswordVariables = { username: userName, password: password };
  const [postStatus, setPost] = useState<string>("");
  useEffect(() => {
    editPasswordResule.data && console.log(editPasswordResule.data.createList);
    editPasswordResule.data && setPost("success");
    editPasswordResule.data && alert("成功");

    editPasswordResule.error && setPost("failed");
  }, [editPasswordResule.data]);
  return {
    editPassword,
    editPasswordResule,
    editPasswordVariables,
    setPassword,
    password,
  };
}
export const EditPasswordContainer = createContainer(useEditPassword);
