import React from 'react';
import "./css/Modal.css"


const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {
        id, modalVisibleId, setModalVisibleId,
        header, contents, date, count
    } = props;


    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <>
            <dav className={modalVisibleId === id ? "Layer openLayer" : "Layer"} onClick={setModalVisibleId}></dav>
            <div className={modalVisibleId === id ? "modal openModal" : "modal"} >
                <section>

                    <header>
                        <div>{header}</div>
                        <div style={{ "font-weight" : "400","font-size": "80%"}}>{date}</div>
                        {/*<button className="close" onClick={setModalVisibleId}>*/}
                        {/*    &times;*/}
                        {/*</button>*/}
                    </header>
                    <main>{contents}</main>

                    <footer className={'modal_footer'}>
                        <button className="close" onClick={setModalVisibleId}>
                            close
                        </button>
                    </footer>
                </section>
            </div>
        </>
    );
};

export default Modal;