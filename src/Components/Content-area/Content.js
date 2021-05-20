import React from "react";
import './Content.scss';

import Button from "./Button/Button";

const arrayName = [
    {name: "Start"},
    {name: "Record"},
    {name: "Info"},
    {name: "Exit"},]

function Content() {
    let buttonList = arrayName.map(btn =>
        <Button name={btn.name}/>)

    return (
        <main className="main">
            {buttonList}
        </main>
    )
}

export default Content
