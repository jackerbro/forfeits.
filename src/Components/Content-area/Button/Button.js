import React from "react";
import './Button.scss';

function Button(props) {
    return (<button className="title-btn">{props.name}</button>)
}

export default Button