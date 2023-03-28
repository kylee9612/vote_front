import React, {useState} from "react";
/** CSS **/
import './css/NoticeList.css';
/** Component **/
import Modal from "./Util/Modal";

function Notice({notice}) {
    /**open Detail**/
    const [modalVisibleId, setModalVisibleId] = useState("")
    const onModalHandler = id => {
        setModalVisibleId(id)
    }
    const onCloseHandler = () => {
        setModalVisibleId("")
    }
    /**open Detail**/

    return (notice && notice.map((notice, index) => (
                <tr key={index} className={"detail_" + notice.num}>
                    {/*<input type={"hidden"} id="detail" value={JSON.stringify(notice)} />*/}
                    <td onClick={() => onModalHandler(notice.num)}>{notice.num}</td>
                    <td onClick={() => onModalHandler(notice.num)}>{notice.title}</td>
                    <td onClick={() => onModalHandler(notice.num)} style={{textAlign: 'center'}}>{notice.count}</td>
                    <td onClick={() => onModalHandler(notice.num)}>{notice.date}</td>

                    <Modal id={notice.num}
                           modalVisibleId={modalVisibleId}
                           setModalVisibleId={onCloseHandler}

                           header={notice.title}
                           contents={notice.contents}
                           date={notice.date}
                           count={notice.count}
                    />
                </tr>
    )))
}

export default Notice;

