import './css/VoteList.css'
import GetVoteList from "./getVote";
function VoteList(props){



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
                        <input className="voteList_header_searchBar_btn _searchBar_btn" type={"button"} value="▼"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="voteList_body_wrap _body_wrap">
            <ul className="voteList_ul">
                <GetVoteList/>
                {/*<li className="voteList_li" >asd</li>*/}
                {/*<li className="voteList_li" >asd</li>*/}
                {/*<li className="voteList_li" >asdfd</li>*/}
                {/*<li className="voteList_li" >fds</li>*/}
                {/*<li className="voteList_li" >zxcv</li>*/}
                {/*<li className="voteList_li" >sag</li>*/}
                {/*<li className="voteList_li" >sdf</li>*/}
            </ul>
        </div>
    </section>
   )
}

export default VoteList;