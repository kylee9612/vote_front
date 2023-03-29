import React, {useEffect, useState} from "react";
/** CSS **/
import './css/NoticeList.css';
/** Component **/
import Modal from "./Util/Modal";
import axios from "axios";

function Notice({searchText, searchType, page}) {
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

    useEffect(() => {
        axios.get('/api/notice/getNoticeList', {
            params: {
                "searchText": searchText,
                "searchType": searchType,
                "page": page
            }
        }).then((response) => {

            console.log(
                "asd ::" +
                Array.from(response.data).map((notice,index)=>{
                    console.log("notice :: " +notice)
                    console.log("notice.nt_contents :: " + notice.nt_contents)
                }))
            noticeList = response.data;

            returnMap = noticeList.map((notice, index) => (
                    <tr key={index} className={"detail_" + notice.nt_no}>
                        <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_no}</td>
                        <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_title}</td>
                        <td onClick={() => onModalHandler(notice.nt_no)} style={{textAlign: 'center'}}>{notice.nt_count}</td>
                        <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_contents}</td>

                        <Modal id={notice.nt_no}
                               modalVisibleId={modalVisibleId}
                               setModalVisibleId={onCloseHandler}

                               header={notice.nt_title}
                               contents={notice.nt_contents}
                               date={notice.reg_date}
                               count={notice.nt_count}
                        />
                    </tr>
                ))
            console.log("returnMap  " + returnMap);
        }).catch((error) => {
            alert('error' + error)
            noticeList = null;
            // return (alert('error' + error))
            // return (<p>no exists Notice</p>)
        })
    });
    // 1. FAILED
    // return (
    //         noticeList === null ?
    //         <p>no exists Notice</p>
    //         : returnMap
    // )
    // 2. FAILED
    // return (Array.from(noticeList).map((notice, index) => (
    //     <tr key={index} className={"detail_" + notice.nt_no}>
    //         <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_no}</td>
    //         <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_title}</td>
    //         <td onClick={() => onModalHandler(notice.nt_no)} style={{textAlign: 'center'}}>{notice.nt_count}</td>
    //         <td onClick={() => onModalHandler(notice.nt_no)}>{notice.nt_contents}</td>
    //
    //         <Modal id={notice.nt_no}
    //                modalVisibleId={modalVisibleId}
    //                setModalVisibleId={onCloseHandler}
    //
    //                header={notice.nt_title}
    //                contents={notice.nt_contents}
    //                date={notice.reg_date}
    //                count={notice.nt_count}
    //         />
    //     </tr>
    // )))
    // 3. FAILED
    //     return (
    //         for(let i = 0 ; i < noticeList.length ; i ++){
    //                 <tr className={"detail_" + noticeList(i).nt_no}>
    //                      <td onClick={() => onModalHandler(noticeList(i).nt_no)}>{noticeList(i).nt_no}</td>
    //                      <td onClick={() => onModalHandler(noticeList(i).nt_no)}>{noticeList(i).nt_title}</td>
    //                      <td onClick={() => onModalHandler(noticeList(i).nt_no)} style={{textAlign: 'center'}}>{noticeList(i).nt_count}</td>
    //                      <td onClick={() => onModalHandler(noticeList(i).nt_no)}>{noticeList(i).nt_contents}</td>
    //
    //                      <Modal id={noticeList(i).nt_no}
    //                             modalVisibleId={modalVisibleId}
    //                             setModalVisibleId={onCloseHandler}
    //
    //                            header={noticeList(i).nt_title}
    //                            contents={noticeList(i).nt_contents}
    //                            date={noticeList(i).reg_date}
    //                             count={noticeList(i).nt_count}
    //                     />
    //                  </tr>
    //     }
    //     )


}

export default Notice;

