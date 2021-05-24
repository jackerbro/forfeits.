import './App.css';

import Header from "./Components/Header/header.js"
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content-area/Content";
import Start from "./Components/Start/Start"
import Tasks from "./Components/Tasks/Tasks";
import Info from "./Components/Info/Info";
import Exit from "./Components/Exit/Exit";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
    return (<div>
        <Router>
            <Header/>
            <Route path="/" component={Content}
                   exact={true}></Route>
            <Footer/>
            <Route path="/Start" component={Start}></Route>
            <Route path="/Tasks" component={Tasks}></Route>
            <Route path="/Info" component={Info}></Route>
            <Route path="/Exit" component={Exit}></Route>

        </Router>
    </div>);
}

export default App;
