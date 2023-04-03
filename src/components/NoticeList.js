import React, {useEffect, useState } from "react";
import axios from 'axios';
/** CSS **/
import './css/NoticeList.css';
/** Component **/
import Search from "./Util/Search";
import Page from "./Util/Page";
import Notice from "./Notice";

const NoticeList = (props) => {
    // const notice = NoticeDummyList

    /**search NoticeList List**/
    const [searchText, setSearchText] = useState("");
    const [searchType, setSearchType] = useState(0);
    const [notice, setNotice] = useState([]);
    /**pageNation**/
    const [curPage, setCurPage] =useState(1);
    const [lastPage, setLastPage] = useState(1);

    /**pageNation**/

    let index = 0;

    useEffect(() => {
        let noticeList = [];
        const params = {
            "searchText": searchText,
            "searchType": searchType,
            "curPage"   : curPage
        }
        axios.get('/api/notice/getNoticeList',{params}
        ).then((response) => {

            setLastPage(response.data.data.lastPage);

            response.data.data.noticeList.map((element => {
                noticeList.push(element);
            }))

            setNotice(noticeList)
        }).catch((error) => {
            alert('error' + error)
        })
    },[searchText, searchType , curPage]);

    function searchNoticeList(){

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
                    {
                        notice.map((element) => (
                            <Notice
                                key={element.nt_no}
                                notice={element}
                                searchText={searchText}
                                searchType={searchType}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <Page
                curPage={curPage}
                setCurPage = {setCurPage}
                lastPage={lastPage}
            />
        </section>
    )
}

export default NoticeList;


