import React from "react";
import "./styles.css";
import Slider from "./Slider";

function App(){
    return (
        <div>
            <header>
                <title>Melödify</title>
            </header>
            <body>
            <div id="centerbox">
                <Slider />
            </div>
            </body>
            <footer>
                <p>Copyright Melödify 2020</p>
            </footer>
        </div>
    );
}

export default App;