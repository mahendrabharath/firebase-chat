import React, { useReducer } from 'react';
import { createContext } from "react";

let initialUserProfile = {
    "name": "",
    "loggedInTime": "",
    "userStatus": "",
    "loginStatus": "",
    "userID": ""
}

// initialUserProfile = { "name": "bharath", "loggedInTime": "2021-08-16T18:30:49.934Z", "userStatus": "Online", "loginStatus": "Logged in", "userID": "user1" }

export const UserProfileContext = createContext(initialUserProfile);


export const UserProfileProvider = props => {
    const [state, dispatch] = useReducer(userProfileReducer, initialUserProfile);

    return <UserProfileContext.Provider value={{ ...state, dispatch }}>
        {props.children}
    </UserProfileContext.Provider>;
}

const userProfileReducer = (state = initialUserProfile, action) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_STATUS': {
            return { ...initialUserProfile, userStatus: "Online" };
        }
        case 'USER_LOGIN': {
            return {
                ...initialUserProfile,
                name: action.payload.name,
                loggedInTime: action.payload.loggedInTime,
                userStatus: action.payload.userStatus,
                loginStatus: action.payload.loginStatus,
                userID: action.payload.userID
            }
        }
        default: return { ...state }
    }
}