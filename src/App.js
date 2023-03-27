import logo from './logo.svg';
import './App.css';

/** page **/
import Header from './components/header';
import Main from './components/main'
import Notice from "./components/Notice";
import VoteList from "./components/VoteList";
import Footer from "./components/footer"
/** page **/

import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

const App = (props) => {
    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Main/>}></Route>
                    <Route path="votelist" element={<VoteList/>}/>
                    <Route path="notice" element={<Notice/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </div>
    );
}

export default App;
