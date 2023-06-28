import {ClientStyle} from '../css/clientStyle';

export default function Client(){
    return(
        <ClientStyle>
            <div className="main-container">
            <div className="logo">에이블링커</div>
            <div className="select-service">서비스 유형을 선택해주세요</div>
            <div className="service-btn">
                <button>대면 서비스 <br/><br/>매칭하기</button>
                <button>비대면 서비스 <br/><br/> 매칭하기</button>
            </div>
            </div>
            <div className="bottom-tap">
                <div className="bottom-tap-item">매칭하기</div>
                <div className="bottom-tap-item">매칭확인</div>
                <div className="bottom-tap-item">히스토리</div>
                <div className="bottom-tap-item">공지사항</div>
                <div className="bottom-tap-item">내 정보</div>
            </div>
        </ClientStyle>
    )
}