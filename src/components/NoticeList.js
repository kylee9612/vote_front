import React, {useEffect, useState} from "react";
import axios from 'axios';
/** CSS **/
import './css/NoticeList.css';


/** Component **/
import Search from "./Util/Search";
import Notice from "./Notice";


const NoticeList = (props) => {
    const notice = NoticeDummyList

    /**search NoticeList List**/
    const [searchText, setSearchText] = useState("");
    const [searchType, setSearchType] = useState("0");
    const [page, setPage] = useState("1");

    useEffect(() => {
        axios.get('/api/notice/getNoticeList')
            .then(res => console.log(res))
            .catch()
    })

    const searchNoticeList = (e) => {
        console.log(e)
        console.log(searchText)
        console.log(searchType)
        // axios.get('/api/notice/getNoticeList',{
        //     "searchText"    :   searchText ,
        //     "searchType"    :   searchType ,
        //     "page"          :   page
        // }).then(function (response){
        //
        // }).catch(function (error){
        //
        // })
    }
    /**search NoticeList List**/


    return (
        <section className={"content"}>
            {/*header*/}
            <div className="notice_header_wrap header_wrap">
                <div className="notice_header _header">
                    <div className="notice_header_title"><h2>Notice</h2></div>
                    <div className="notice_header_sub _header_sub">
                        <p>This page exists for notice.</p>
                        <Search search={searchNoticeList}
                                setSearchText={setSearchText}
                                setSearchType={setSearchType}/>
                    </div>
                </div>
            </div>
            {/*body*/}
            <div className={"notice_body_warp"}>
                <table className="notice_table">
                    <colgroup>
                        <col style={{width: '5%'}}/>
                        <col style={{width: '80%'}}/>
                        <col style={{width: '8%'}}/>
                        <col style={{width: '7%'}}/>
                    </colgroup>
                    <thead className={"notice_table_head"}>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th style={{textAlign: 'center'}}>count</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody className={"notice_table_body table_body"}>
                        {/*<Notice notice={notice}/>*/}
                    </tbody>
                </table>
            </div>

            <div className="page">◀ 1/1 ▶</div>
        </section>
    )
}

export default NoticeList;


const NoticeDummyList = () => {
    let NoticeList = new Array();
    NoticeList[0] = {
        num: 5,
        title: "MJ's coin",
        contents: "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세" +
            "내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용" +
            "입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용" +
            "입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용" +
            "입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입" +
            "니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세" +
            "내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다" +
            "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세" +
            "내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세" +
            "내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다" +
            "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내" +
            "용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입" +
            "다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용" +
            "입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입" +
            "니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니" +
            "다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다" +
            "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다" +
            "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세" +
            "내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내" +
            "용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입" +
            "니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다" +
            "상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내" +
            "용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입" +
            "니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상" +
            "세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입니다상세내용입",
        date: '2023.03.23',
        count: 23
    }
    NoticeList[1] = {
        num: 4,
        title: "Show the Coin List for free",
        contents: "Show the Coin List for free",
        date: '2023.01.20',
        count: 31
    }
    NoticeList[2] = {
        num: 3,
        title: "kisan's coin",
        contents: "Show the Coin List for free",
        date: '2023.01.15',
        count: 35
    }
    NoticeList[3] = {
        num: 2,
        title: "how to vote",
        contents: "Show the Coin List for free",
        date: '2023.01.11',
        count: 33
    }
    NoticeList[4] = {
        num: 1,
        title: "Show the Coin List for free",
        contents: "Show the Coin List for free",
        date: '2022.11.23',
        count: 32
    }
    // console.log(NoticeList);
    return NoticeList
}






