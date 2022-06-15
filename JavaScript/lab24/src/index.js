import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from "./components/App1/App1.js";
import App2 from "./components/App2/App2.js";
import App3 from "./components/App3/App3.js";
import App4 from "./components/App4/App4.js";
import App5 from "./components/App5/App5";
import App6 from "./components/App6/App6";
import App7 from "./components/App7/App7";

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                1
                <App1/>
                <hr/>

                2
                <App2/>
                <hr/>

                3
                <App3/>
                <hr/>

                4
                <App4/>
                <hr/>

                5
                <App5/>
                <hr/>

                6
                <App6/>
                <hr/>

                7
                <App7/>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
