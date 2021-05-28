import React from "react";
import './Content.scss';
import {Link} from "react-router-dom";

function Content() {

    return (
        <main className="main">
                <nav className="list">
                    <Link className="btn" to="/Start">Start</Link>
                    <Link className="btn" to="/Tasks">Add tasks</Link>
                    <Link className="btn" to="/Info">Info</Link>
                    <Link className="btn" to="/Exit">Exit</Link>
                </nav>
        </main>
    )
}

export default Content
