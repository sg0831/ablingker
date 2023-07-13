import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnnStyle } from "../css/annStyle";
import { faAngleRight, faCaretLeft, faCaretRight, faStar, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function Ann(){
    var ReactDOM = require("react-dom/client")
    const [whatClick, setWhatClick] = useState("annTitle");

    const navigate = useNavigate();

    //렌더링 하기
    useEffect(()=>{
        if(whatClick === 'annTitle'){
            const com = document.getElementsByClassName('com')[0];
    
            setWhatClick('annTitle');
    
            com.innerHTML = '';
            
            const ann1 = document.createElement("div");
            ann1.className = "ann-1";
            
            const Ann1Div = () => {
              return (
                <div>
                  <div>공지사항</div>
                  <div>공지사항 안내</div>
                </div>
              );
            };
            
            const root = ReactDOM.createRoot(ann1);
            root.render(
              <React.Fragment>
                <Ann1Div />
                <FontAwesomeIcon icon={faAngleRight} />
              </React.Fragment>
            );
            com.appendChild(ann1);
        }
    },[whatClick])

    //무엇이 클릭되었는지 확인
    function whatClickFn(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = event.currentTarget;
        const com = document.getElementsByClassName('com')[0];

        if(target.classList.contains('ann-title')){
            setWhatClick('annTitle');
        } else if(target.classList.contains('faq-title')){
            setWhatClick('faqTitle');
        } else if(target.classList.contains('com-title')){
            setWhatClick('comTitle');
        }
    }

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
            navigate('/ann');
        } else if (target.classList.contains('bottom-tap-item5')){
            navigate('');   
        } else if (target.classList.contains('face-to-face')){
            navigate('/setlocation');
        } else if (target.classList.contains('non-face-to-face')){
            window.alert('준비중입니다.')
        }
    }
    


    return(
<AnnStyle>
    <div className="main-container">
        <div>공지사항</div>
        <div className="ann-btn">
            <button onClick={whatClickFn} className="ann-title" style={{border:whatClick==='annTitle'?"1px solid #808080":"none"}}>공지사항</button>
            <button onClick={whatClickFn} className="faq-title" style={{border:whatClick==='faqTitle'?"1px solid #808080":"none"}}>FAQ</button>
            <button onClick={whatClickFn} className="com-title" style={{border:whatClick==='comTitle'?"1px solid #808080":"none"}}>커뮤니티</button>
        </div>
        <div className="ann-content">
            <div className="ann-text">
                <FontAwesomeIcon icon={faVolumeOff} style={{fontSize:"25px", marginRight:"20px"}}/>
                <div>공지사항안내</div>
            </div>
            <div className="com">
            </div>
        </div>
        <div className="bottom-tap">
            <div onClick={pageMove} className="bottom-tap-item1">매칭하기</div>
            <div onClick={pageMove} className="bottom-tap-item2">매칭확인</div>
            <div onClick={pageMove} className="bottom-tap-item3">히스토리</div>
            <div onClick={pageMove} className="bottom-tap-item4">공지사항</div>
            <div onClick={pageMove} className="bottom-tap-item5">내 정보</div>
        </div>
    </div>
</AnnStyle>
    );
}