import React from "react";

const UserContext = React.createContext({
    email: "",
    password: "",
    authenticated: false,
    user_id: ""
});

export default UserContext;
