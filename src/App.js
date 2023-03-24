import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Notice from "./components/Notice";
import React from "react";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Main/>}></Route>
                    <Route path="notice" element={<Notice/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
