import './Notice.css'

function RandomAmount() {
    let return_num = "";
    const ranNum = Math.floor(Math.random() * 10000);

    if (ranNum.toString().length > 3) {
        let length = ranNum.toString().length;
        return_num =
            ranNum.toString().substring(0, ranNum.toString().length - 3) + ',' +
            ranNum.toString().substring(ranNum.toString().length - 3
            );
    } else
        return_num = ranNum;
    return return_num;
}

function NoticeList() {
    let NoticeList = new Array();
    NoticeList[4] = <tr>
        <td>1</td>
        <td>Show the Coin List for free</td>
        <td>2022.11.23</td>
    </tr>;
    NoticeList[3] = <tr>
        <td>2</td>
        <td>how to vote</td>
        <td>2023.01.11</td>
    </tr>;
    NoticeList[2] = <tr>
        <td>3</td>
        <td>kisan's coin</td>
        <td>2023.01.15</td>
    </tr>;
    NoticeList[1] = <tr>
        <td>4</td>
        <td>Show the Coin List for free</td>
        <td>2023.01.20</td>
    </tr>;
    NoticeList[0] = <tr>
        <td>5</td>
        <td>그만해이자시가</td>
        <td>2023.03.23</td>
    </tr>;


    return NoticeList

}

function Notice() {
    const ExpenseDate = new Date(Date.now()) + "";
    const ExpenseTitle = '안녕하세요 mj재단입니다.'
    const ExpenseAmount = RandomAmount()

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
                    <NoticeList></NoticeList>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Notice;
