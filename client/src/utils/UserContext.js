import React from "react";

const UserContext = React.createContext({
    email: "",
    password: "",
    authenticated: false
});

export default UserContext;
