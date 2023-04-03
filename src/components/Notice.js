import React, {useEffect, useState} from "react";
/** CSS **/
import './css/NoticeList.css';
/** Component **/
import Modal from "./Util/Modal";
import axios from "axios";

function Notice({notice, searchText, searchType}) {
    let noticeList = "";
    let returnMap = "";
    /**open Detail**/
    const [modalVisibleId, setModalVisibleId] = useState("")
    const onModalHandler = id => {
        setModalVisibleId(id)
    }
    const onCloseHandler = () => {
        setModalVisibleId("")
    }

    /**open Detail**/
    return (
        <tr key={notice.nt_no} className={"detail_" + notice.nt_no}>
            <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_no}</td>
            <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_title}</td>
            <td onClick={() => onModalHandler(notice.nt_no)}
                style={{textAlign: 'center'}}>{notice.nt_count}</td>
            <td onClick={() => onModalHandler(notice.nt_no)}>{notice.reg_date}</td>

            <Modal id={notice.nt_no}
                   modalVisibleId={modalVisibleId}
                   setModalVisibleId={onCloseHandler}
                   header={notice.nt_title}
                   contents={notice.nt_contents}
                   date={notice.reg_date}
                   count={notice.nt_count}
            />
        </tr>
    )
}

export default Notice;

