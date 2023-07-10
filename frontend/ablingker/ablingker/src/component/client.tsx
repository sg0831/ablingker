import { useNavigate } from 'react-router-dom';
import {ClientStyle} from '../css/clientStyle';

export default function Client(){
    const navigate = useNavigate();


    //하단 바 클릭시 특정 페이지로 이동
    function pageMove(event:React.MouseEvent<HTMLDivElement | HTMLButtonElement ,MouseEvent>){
        const target = event.currentTarget;
        if(target.classList.contains('bottom-tap-item1')){
            navigate('/client');
        } else if (target.classList.contains('bottom-tap-item2')){
            navigate('');
        } else if (target.classList.contains('bottom-tap-item3')){
            navigate('/history');
        } else if (target.classList.contains('bottom-tap-item4')){
            navigate('');
        } else if (target.classList.contains('bottom-tap-item5')){
            navigate('');   
        } else if (target.classList.contains('face-to-face')){
            navigate('/setlocation');
        } else if (target.classList.contains('non-face-to-face')){
            window.alert('준비중입니다.')
        }
    }

    return(
        <ClientStyle>
            <div className="main-container">
            <div className="logo">에이블링커</div>
            <div className="select-service">서비스 유형을 선택해주세요</div>
            <div className="service-btn">
                <button onClick={pageMove} className='face-to-face' >대면 서비스 <br/><br/>매칭하기</button>
                <button onClick={pageMove} className='non-face-to-face' >비대면 서비스 <br/><br/> 매칭하기</button>
            </div>
            </div>
            <div className="bottom-tap">
                <div onClick={pageMove} className="bottom-tap-item1">매칭하기</div>
                <div onClick={pageMove} className="bottom-tap-item2">매칭확인</div>
                <div onClick={pageMove} className="bottom-tap-item3">히스토리</div>
                <div onClick={pageMove} className="bottom-tap-item4">공지사항</div>
                <div onClick={pageMove} className="bottom-tap-item5">내 정보</div>
            </div>
        </ClientStyle>
    )
}