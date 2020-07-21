import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import { Provider, createClient } from "urql";
import { PostLoginContainer } from "./request/postLoginContainer";
import { useLogContainer } from "./pages/useLogContainer";

const client = createClient({
  url: "http://localhost:3001/graphql",
  fetchOptions: {
    mode: "cors",
  },
});

ReactDOM.render(
  <Provider value={client}>
    <useLogContainer.Provider>
      <PostLoginContainer.Provider>
        <Home />
      </PostLoginContainer.Provider>
    </useLogContainer.Provider>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();

