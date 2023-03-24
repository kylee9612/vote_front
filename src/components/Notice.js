import './Notice.css'

function Notice(props) {
    const notice = NoticeDummyList();

    return (
        <section>
            {/*header*/}
            <div className="notice_header_wrap">
                <div className="notice_header">
                    <div className="notice_header_title"><h2>Notice</h2></div>
                    <div className="notice_header_sub">
                        <p>This page exists for notice.</p>
                        <div className="notice_header_searchBar">
                            <select className="notice_header_searchBar_select">
                                <option value="0">Title</option>
                                <option value="1">Content</option>
                                <option value="2">Title+Content</option>
                            </select>
                            <input className="notice_header_searchBar_input" type={"text"} placeholder={"Search"}/>
                            <input className="notice_header_searchBar_btn" type={"button"} value="▼"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*body*/}
            <div className={"notice_body_warp"}>
                <table className="notice_table">
                    <colgroup>
                        <col style={{width: '5%'}}/>
                        <col style={{width: '88%'}}/>
                        <col style={{width: '7%'}}/>
                    </colgroup>
                    <thead className={"notice_table_head"}>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody className={"notice_table_body"}>
                    {NoticeList(notice)}
                    </tbody>
                </table>
            </div>
            <div className="page">◀ 1/1 ▶</div>
        </section>
    )
}

export default Notice;




function NoticeList(notice) {
    return (notice.map ( ( notice, index) =>(
                <tr key={index}>
                    <td >{notice.num}</td>
                    <td >{notice.title}</td>
                    <td >{notice.date}</td>
                </tr>
                ) ) )
}



function NoticeDummyList() {
    let NoticeList = new Array();
    NoticeList[0] = {
        num: 5,
        title: "그만해이자시가",
        date: '2023.03.23'
    }
    NoticeList[1] = {
        num: 4,
        title: "Show the Coin List for free",
        date: '2023.01.20'
    }
    NoticeList[2] = {
        num: 3,
        title: "kisan's coin",
        date: '2023.01.15'
    }
    NoticeList[3] = {
        num: 2,
        title: "how to vote",
        date: '2023.01.11'
    }
    NoticeList[4] = {
        num: 1,
        title: "Show the Coin List for free",
        date: '2022.11.23'
    }
    return NoticeList
}



