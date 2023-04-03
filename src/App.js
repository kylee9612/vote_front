import logo from './logo.svg';
import './App.css';

/** page **/
import Header from './components/header';
import Main from './components/Util/Main'
import NoticeList from "./components/NoticeList";
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
                    <Route path="notice" element={<NoticeList/>}/>
                </Routes>
                <Footer/>

            </BrowserRouter>

        </div>
    );
}

export default App;
