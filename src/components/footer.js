import './css/footer.css'
import { NavLink,useLocation} from "react-router-dom";

function Footer() {
    const current = useLocation();
    if (current.pathname === '/') return null;
    return(
        <footer>
            <h1 className={"footer-logo"}>VOTE</h1>
            <div className={"footer-box"}>
                <nav>
                    <ul className={"info"}>
                        <li>VOTE | 사업자 등록번호: 12-345-67890</li>
                        <li>주소: 서울시 송파구 문정로 111sdfsdfsdfsd</li>
                        <li>Contact : abc@vote.com</li>
                        <li>고객센터 : 02-123-4567</li>
                    </ul>

                    <ul className={"footer-menu"}>
                        <NavLink to={"/"}><li>회사소개</li></NavLink>
                        <NavLink to={"/votelist"}><li>투표하기</li></NavLink>
                        <NavLink to={"/notice"}><li>공지사항</li></NavLink>
                    </ul>
                </nav>
                <p className="copyright_wrap">
                    copyright by ⓒ 2023 VOTE Inc. All rights reserved
                </p>

            </div>

        </footer>
    )

}

export default Footer