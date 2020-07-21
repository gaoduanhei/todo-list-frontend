import { createContainer } from "unstated-next";
import { useLogContainer } from "../pages/useLogContainer";
import { useQuery } from "urql";

function useAccount() {
  const { password, userName } = useLogContainer.useContainer();

  const [res, executeQuery] = useQuery({
    query: `query ($username:ID,$password:String){
        login(username:$username,password:$password)
      }`,
    variables: { username: userName, password: password },
    requestPolicy: "network-only",
    pause: true,
  });

  return {
    res,
    executeQuery,
  };
}

export const PostLoginContainer = createContainer(useAccount);
