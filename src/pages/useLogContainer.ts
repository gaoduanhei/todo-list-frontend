import { useState } from "react";

import { createContainer } from 'unstated-next';


function useLogin() {
    const [userName, setUserName] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    return { userName, setUserName, password, setPassword }
}
export let useLogContainer = createContainer(useLogin);