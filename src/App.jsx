import "./App.css";
import React from "react";
import Title from "./components/Title";
import Card from "./components/Card";

function App() {
    return (
        <>
            <div className="grid justify-items-center w-[100%] h-[100vh]">
                <div>
                    <Title />
                    <Card />
                </div>
            </div>
        </>
    );
}

export default App;
