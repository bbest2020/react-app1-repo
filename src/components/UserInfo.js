import React from "react";
import { AppContext } from "./UseOfContextHook";

export default function UserInfo() {
    const {userName} = React.useContext(AppContext);
    return (
        <p>Dear {userName}, Welcome to abc.com</p>
    );
}