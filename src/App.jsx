import "./App.css";
import React from "react";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
    return (
        <>
            <div className="grid justify-items-center w-[100%] h-[auto]">
                <div className="align-items-center h-[auto] content-center">
                    <Title />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default App;
