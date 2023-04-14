
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import Carousel from "react-material-ui-carousel";
import {Paper, Button} from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './css/Vote.css';
import axios from "axios";

function GetVoteList() {

    const params = useParams();
    const [coinList, setCoinList] = useState([]);
    const [coinPic, setCoinPic] = useState([]);
    const round = params.round;

    useEffect(()=>{
        let coinLists = [];
        const data = {
            "round" : round
        }
        axios.post('/api/vote/coin/list', data)
            .then((response) => {
                response.data.data.map((e => {
                    coinLists.push(e);
                }))
                setCoinList(coinLists);
            })

    },[]);

    useEffect(()=>{

        let coinPics=[];
        coinList.map((e)=>{
            const data = {
                "coin_idx": e.coin_idx
            }
            axios.post('/api/vote/coin/pics',data)
                .then((response)=>{
                    response.data.data.map((e=>{
                        coinPics.push(e);
                    }))
                    setCoinPic(coinPics);
                })
        })

    },[]);


    return(

        <section className={"content vote"} >
            <h3>{round}차 투표</h3>

            <div>
                <div className={'slide'}>
                    {/*<Swiper*/}
                    {/*    spaceBetween={50}*/}
                    {/*    slidesPerView={3}*/}
                    {/*    onSlideChange={() => console.log('slide change')}*/}
                    {/*    onSwiper={(swiper) => console.log(swiper)}*/}
                    {/*>*/}
                    {/*    {coinPic.map((e)=>{*/}
                    {/*        console.log(e);*/}
                    {/*        const imgSrc = "data:image/*;base64," + e.picture;*/}
                    {/*        return(*/}
                    {/*            <SwiperSlide>*/}
                    {/*                <img src={imgSrc} className={'slideImg'}></img>*/}
                    {/*            </SwiperSlide>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</Swiper>*/}
                    <Carousel>
                        {coinPic.map((e)=>{
                            console.log(e);
                            const imgSrc = "data:image/*;base64," + e.picture;
                            return(
                                <Paper>
                                    <img height={"300px"} src={imgSrc} className={'slideImg'}></img>
                                </Paper>
                            )
                        })}
                    </Carousel>
                </div>
                {coinList.map((e)=>{
                    return(
                        <div>
                            <h4>{e.coin_name}({e.coin_symbol})</h4>
                            <div dangerouslySetInnerHTML={{__html: e.coin_info}} ></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default GetVoteList;