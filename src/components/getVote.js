
import React, {useState, useEffect} from "react";
import axios from "axios";

function GetVoteList() {
    const [vote, setVote] = useState([]);
    useEffect(()=> {
        let voteLists =[];
        axios.post('/api/vote/voteList')
            .then((response) => {
                // console.log(response.data);
                console.log(JSON.stringify(response));
                // console.log(response.data.data);
                response.data.data.map((e => {
                    voteLists.push(e);
                }))
                console.log(voteLists + "!!")
                setVote(voteLists.round)
            })
    },[])
    return(

        <li>
           round: {vote.round}
        </li>
    )
}

export default GetVoteList;