import {NavLink} from "react-router-dom";
import React from "react";

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
};

export default SignedOutLinks;