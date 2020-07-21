import { createClient, useMutation } from "urql";
import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { todoContainer } from "../pages/todoContainer";
import { useLogContainer } from "../pages/useLogContainer";

const CreateNewCount = `
mutation l ($username:ID,$password:String){
    createAccount(username:$username,password:$password){
      username
      password
    }
  }
`;

function useCreateNewCount() {
  const [createNewCountResult, createNewCount] = useMutation(CreateNewCount);
  const [newCountPassword, setNewCountPassword] = useState<string>("");
  const [newCountUserName, setNewCountName] = useState<string>("");

  const createNewCountVariables = {
    username: newCountUserName,
    password: newCountPassword,
  };
  const [postStatus, setPost] = useState<string>("");
  useEffect(() => {
    createNewCountResult.data &&
      console.log(createNewCountResult.data.createList);
    createNewCountResult.data && setPost("success");
    createNewCountResult.data && alert("成功");

    createNewCountResult.error && setPost("failed");
  }, [createNewCountResult.data]);
  return {
    createNewCountVariables,
    createNewCount,
    newCountUserName,
    setNewCountName,
    newCountPassword,
    setNewCountPassword,
  };
}
export const CreateNewCountContainer = createContainer(useCreateNewCount);
