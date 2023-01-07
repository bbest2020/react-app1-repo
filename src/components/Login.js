import React from "react";

import { AppContext } from "./UseOfContextHook";

export default function Login() {

    const {userName, setUserName} = React.useContext(AppContext);
    return (
        <>
        <input type="text" name="user" value={userName} onChange={(event) => setUserName(event.target.value)}></input>
        </>
    );
}