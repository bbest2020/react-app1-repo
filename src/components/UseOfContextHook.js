import React from "react";
import Login from "./Login";
import UserInfo from "./UserInfo";

export const AppContext = React.createContext(null);

export default function UseOfContextHook() {
    const [userName, setUserName] = React.useState("Rajesh");
    return (
        <div className="card mt-3">
        <div className="card-body">
        <h5 className="card-title">Use of useContext Hook</h5>
            <AppContext.Provider value={{userName, setUserName}}>
                <Login />
                <UserInfo />
            </AppContext.Provider>
        </div>
        </div>
    )
}