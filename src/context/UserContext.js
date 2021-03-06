import React, { useState } from "react";
import Cookies from "universal-cookie";

export const UserContext = React.createContext({
    token: undefined,
    login: () => {},
    logout: () => {}
});
const cookies = new Cookies();

export const UserProvider = props => {
    const [token, setToken] = useState(cookies.get("token"));
    const user = {
        token,
        login: (newToken) => {
            cookies.set("token", newToken, { path: "/" });
            setToken(newToken);
        },
        logout: () => {
            cookies.remove("token", { path: "/" });
            setToken(undefined);
        }
    };
    return <UserContext.Provider value={user} {...props} />;
};