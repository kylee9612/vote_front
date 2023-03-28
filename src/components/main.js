import React, { useState, useEffect } from 'react';
import main_img from '../images/main.jpg'
import './css/main.css'
import {Outlet} from "react-router-dom";


function Main(){
    const Typing=()=>{
        const[mainTxt, setMainTxt] = useState('');
        const[count,setCount] = useState(0);
        const completionWord = "YOU WANT!";

        useEffect(()=>{
            const typingInterval = setInterval(()=>{
                setMainTxt((prevTitleValue)=>{
                    let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
                    setCount(count + 1);

                    if(count>=completionWord.length){
                        setCount(0);
                        setMainTxt('');
                    }

                    return result;
                });
            },550);

            return()=>{
                clearInterval(typingInterval);
            }
        })
        return <span className={"txt3"}>{mainTxt}</span>;
    };

    return(
        <div className={"main_wrap"}>
            <section className="main_visual">
                <div className="visual_wrap">
                    <div className={"txt-box"}>
                        <h3>
                            <span className={"txt1"}>VOTE FOR</span>
                            <span className={"txt2"}>WHAT</span>
                            <Typing/>
                        </h3>
                    </div>
                    <div className={"layer"}></div>
                    <div className="cover_img">
                        <img src={main_img}></img>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default Main;