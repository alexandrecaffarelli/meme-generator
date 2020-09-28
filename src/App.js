import React from "react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"
import {hot} from "react-hot-loader";

function App() {
    return(
        <div>
            <Header />
            <MemeGenerator />
        </div>
    )
}

export default hot(module)(App)