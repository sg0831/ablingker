import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnnStyle } from "../css/annStyle";
import { faAngleRight, faCaretLeft, faCaretRight, faStar, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface Ann1DivProps{
    title: string;
    des: string;
    move?: string;
}

interface ComPageProps{
    content: string;
}

export default function Ann(){
    const [whatClick, setWhatClick] = useState("annTitle");

    const navigate = useNavigate();

    //공지사항 컴포넌트
    const Ann1Div = (props:Ann1DivProps) => {
        const {title, des, move = "/"} = props;

        return (
          <>
              <div onClick={()=>{navigate(move)}} className="ann-1">
                  <div>
                      <div>{title}</div>
                      <div>{des}</div>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} />
              </div>
          </>
        );
      };

    //커뮤니티 컴포넌트
    const ComPage = (props:ComPageProps) => {
        const {content} = props
        return(
            <>
                <div className="com1">{content}</div>
            </>
        )
    }

    //공지사항 & 커뮤니티 데이터
    const annData = useFetch('');
    const comData = useFetch('');

    //렌더링 하기
    useEffect(()=>{
        const com = document.getElementsByClassName('com')[0];
        if(whatClick === 'annTitle'){
            com.innerHTML = '';

            const root = ReactDOM.createRoot(com);
            root.render(
                <>
                    <Ann1Div title ="공지사항" des="공지사항 안내"/>
                    <Ann1Div title ="이벤트" des="이벤트 안내"/>
                </>
            );


        } else if(whatClick === 'faqTitle'){
            com.innerHTML = '';

            const root = ReactDOM.createRoot(com);
            root.render(
                <>
                    <Ann1Div title ="FAQ" des="서포터 매칭하는 방법"/>
                    <Ann1Div title ="이벤트" des="포인트 교환 방법"/>
                </>
            );


        } else if(whatClick === 'comTitle'){
            com.innerHTML = '';
            

            const root = ReactDOM.createRoot(com);
            root.render(
                <>
                    <ComPage content="1. 커뮤니티 이용"/>
                    <ComPage content="2. 커뮤니티 이용"/>
                    <div className="com-page">
                        <div className="left">
                            <FontAwesomeIcon icon={faCaretLeft} style={{fontSize:"30px", color:"#808080"}}/>
                        </div>
                        <div className="middle">page 1</div>
                        <div className="right">
                            <FontAwesomeIcon icon={faCaretRight} style={{fontSize:"30px", color:"#808080"}}/>
                        </div>
                    </div>
                </>
            )
        }
    },[whatClick])

    //공지사항, 커뮤니티, FAQ
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

    //하단 바 이벤트
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