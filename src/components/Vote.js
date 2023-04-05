
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router";
import axios from "axios";

function GetVoteList() {
    // const [vote, setVote] = useState([]);
    // useEffect(()=> {
    //     let voteLists =[];
    //     axios.post('/api/vote/voteList')
    //         .then((response) => {
    //             // console.log(JSON.stringify(response));
    //             response.data.data.map((e => {
    //                 console.log(e);
    //                 voteLists.push(e);
    //             }))
    //             // console.log(JSON.stringify(voteLists.round))
    //             setVote(voteLists)
    //         })
    // },[])
    const Edit = () => {
        const { state } = useLocation();
        console.log(state);
    }
    return(

        <div>

        </div>
    )
}

export default GetVoteList;