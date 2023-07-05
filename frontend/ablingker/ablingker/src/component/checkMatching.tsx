import { CheckMatchingStyle } from "../css/checkMatchingStyle";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

export default function CheckMatching(){
    const [isMatching, setIsMatching] = useState();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    function matchingbtn(){
        if(!isLoading){
            const confirm = window.confirm("매칭요청 하시겠습니까?")
            if(confirm){
                setIsLoading(true);
                window.alert("성공적으로 매칭 요청하였습니다.")
                fetch(`http://localhost:8080/api/login?password=1234&userId=test1`, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
        
                }),
                })
                .then(res => res.json())
                .then(date => {
                    window.alert("매칭 요청이 완료되었습니다.")
                    navigate('');
                })
                .catch(error => {
                    window.alert("잠시 후 다시 시도해보세요.");
                })
                .finally(() => {
                    setIsLoading(false);
                })
            } else if(!confirm){
                window.alert("취소되었습니다.")
            }
        }
    }

    function cancelbtn() {
        if(!isLoading){
            const cancel = window.confirm("취소하시겠습니까?")
            if(cancel){
                window.alert("매칭요청이 취소되었습니다.")
                navigate('/client');
            } else if(!cancel){
                window.alert("매칭을 계속합니다.")
            }
        }
    } 

    return(
<CheckMatchingStyle>
    <div className="main-container">
        <div className="top-nav">
            <div>매칭설정 확인</div>
        </div>
        <div className="map"></div>
        <div className="sup-content">
            <div className="loc-move">
                <div>출발 : 대구광역시 중구 000동 000-0</div>
                <div>도착 : 대구광역시 중구 000동 000-0</div>
                <div>편도</div>
                <div>이동수단 : 도보이동</div>
            </div>
            <div className="time">
                <div>00월 00일 0요일</div>
                <div>시간 : 00시 00분 ~ 00시 00분</div>
            </div>
            <div className="sup-method">
                <div>지원내용 : 단순 이동</div>
                <div>추가 세부 요청사항 : 이동시 부축필요</div>
            </div>
            <div className="point">
                <div>예상 지불 요금 : 00,000포인트</div>
                <div>추가 차액이 발생할 수 있습니다</div>
            </div>
        </div>
        <div className="matching">매칭하시겠습니까?</div>
        <div className="btn">
            <button className="cancel" onClick={cancelbtn} style={{opacity:isLoading?0.3:1}}>취소</button>
            <button className="confirm" onClick={matchingbtn} style={{opacity:isLoading?0.3:1}}>매칭하기</button>
        </div>
    </div>
</CheckMatchingStyle>
    );
}