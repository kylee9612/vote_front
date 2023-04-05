import './css/VoteList.css'
import vote_img from '.././images/vote.jpg'
import moment from 'moment';
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function VoteList(props){
    const nowTime=new Date();
    const [vote, setVote] = useState([]);

    const navigate = useNavigate();

    const sortByDateDesc=()=>{
        let sortVote = [...vote]
        // let dDay=nowTime-new Date(sortVote.end_date);
        sortVote.sort((b,a)=>(new Date(a.start_date) - new Date(b.start_date)));
        setVote(sortVote);
        console.log(vote);
    }

    const sortByStartDate=()=>{
        let sortVote = [...vote]
        sortVote.sort((a,b)=>new Date(a.end_date) - new Date(b.end_date));
        setVote(sortVote);
        console.log(vote);
    }

    useEffect(()=> {
        let voteLists =[];
        axios.post('/api/vote/voteList')
            .then((response) => {
                response.data.data.map((e => {
                    voteLists.push(e);
                }))
                setVote(voteLists)
            })
    },[])

   return(
    <section className={"content"} >
        <div className="voteList_header_wrap header_wrap" >
            <div className="voteList_header _header">
                <div className="voteList_header_title"><h2>Vote List</h2></div>
                <div className="voteList_header_sub _header_sub">
                    <p>This page exists for Vote List.</p>
                    <div className="voteList_header_searchBar _searchBar">
                        <select className="voteList_header_searchBar_select _searchBar_select">
                            <option value="0">Title</option>
                            <option value="1">Content</option>
                            <option value="2">Title+Content</option>
                        </select>
                        <input className="voteList_header_searchBar_input _searchBar_input" type={"text"} placeholder={"Search"}/>
                        {/*<input className="voteList_header_searchBar_btn _searchBar_btn" type={"button"} value="▼"/>*/}
                        <button className="voteList_header_searchBar_btn _searchBar_btn"><span className="material-symbols-outlined">search</span></button>
                    </div>
                </div>
                <div className={'view-option'}>
                    <div className={'filter'}>
                        <ul className={'filter-ul'}>
                            <li>진행중</li>
                            <li>투표예정</li>
                            <li>투표마감</li>
                        </ul>
                    </div>
                    <div className={'sorted'}>
                        <ul className={'sorted-ul'}>
                            {/*<span className="material-symbols-outlined">swap_vert</span>*/}
                            <li onClick={sortByStartDate}>날짜 ↓</li>
                            <span className={'bar'}></span>
                            <li onClick={sortByDateDesc}>날짜 ↑</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="voteList_body_wrap _body_wrap">
            <ul className="voteList_ul">
                {vote.map((e)=>{
                    const start = new Date(e.start_date)
                    const end = new Date(e.end_date);

                    const toVote= ()=>{
                        navigate('/vote', {state: e.round});
                    }
                    if(end<nowTime){
                       return(
                           <li>
                               <div className={'vote-layer'}></div>
                                   <img src={vote_img} className={'vote-img'}/>
                               <div className={'vote-txt-box vote-txt-box-op'}>

                                   <div className={'round round-op'}>
                                        <h3>{e.round}차</h3>
                                   </div>
                                   <p>투표종료</p>
                                   {/*<div>*/}
                                   {/*    <span>{moment(e.start_date).format('MM/DD')} ~ {moment(e.end_date).format('MM/DD')}</span>*/}
                                   {/*</div>*/}
                               </div>
                           </li>
                       )
                    }else if(start>nowTime){
                       return(
                           <li>
                               <div className={'vote-layer'}></div>
                               <img src={vote_img} className={'vote-img'}/>
                               <div className={'vote-txt-box vote-txt-box-op'}>
                                   <div className={'round round-op'}>
                                       <h3>{e.round}차</h3>
                                   </div>
                                   <p>투표예정</p>
                               </div>
                               <span className={'date'}>{moment(e.start_date).format('MM/DD')} ~ {moment(e.end_date).format('MM/DD')}</span>
                           </li>
                       )
                    }
                    else{
                        return(
                            <li onClick={()=>toVote()} className={'ing'}>
                                <div className={'vote-layer vote-layer-white'}></div>
                                <img src={vote_img} className={'vote-img'}/>
                                <div className={'vote-txt-box'}>
                                    <div className={'round round-black'}>
                                        <h3>{e.round}차</h3>
                                    </div>
                                    <p className={'txt-black'}>진행중</p>
                                </div>
                                <span className={'date txt-black'}>{moment(e.start_date).format('MM/DD')} ~ {moment(e.end_date).format('MM/DD')}</span>
                            </li>
                        )
                    }

                })}
            </ul>
        </div>
    </section>
   )
}

export default VoteList;