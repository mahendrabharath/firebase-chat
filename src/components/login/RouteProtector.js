import React, { useContext } from "react";
import { ThemeContext } from "../../store/themeContext";
import { UserProfileContext } from "../../store/userContext";

const RouteProtector = props => {
    const {name: userName} = useContext(UserProfileContext);
    const {color, backgroundColor} = useContext(ThemeContext);
    if (userName) return <div style={{position:'absolute', height: '100%', width: '100%', color, backgroundColor}}>{props.children}</div>;

    return <></>
}

export default RouteProtector