import React, { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { MessageField } from "./component/MessageField";

const App = (props) => {
    const [arr, setArr] = useState([new Date().toLocaleTimeString()]);

    const buttonClick = () => {
        setArr([...arr, new Date().toLocaleTimeString()]);
    }

    return (
        <>
            <div>
                <h2>Lesson2</h2>
                <MessageField />
            </div>
        </>
    );
}

ReactDOM.render(<App mytext="- Update: " />, document.getElementById("app"));