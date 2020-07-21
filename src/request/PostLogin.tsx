import React from "react";
import { PostLoginContainer } from "./postLoginContainer";

const PostLogin = () => {
  const { res } = PostLoginContainer.useContainer();
  let statu: boolean = false;

  if (res.fetching) return <p>Loading...</p>;
  if (res.error) return <p>Errored!</p>;

  return (
    <ul>
      <li style={{ listStyle: "none" }}>{res.data && res.data.login}</li>
    </ul>
  );
};

export default PostLogin;
