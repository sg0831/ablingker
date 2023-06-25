import styled from 'styled-components'
import { RegisterStyle1 } from '../css/registerStyle1';
import React, { useState, useRef, useEffect } from 'react';


export default function Register1(){
    const [isClient, setIsClient] = useState(true);
    const [isAu, setIsAu] = useState(false);
    const [isPwdMatch, setIsPwdMatch] = useState(false);
    const [isAuRequest, setIsAuRequest] = useState(false);
    const [gender, setGender] = useState("male");

    //버튼 색상 바꾸기
    function changeCliBackground(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = event.currentTarget;
        if(target.classList.contains("cli")){
            setIsClient(true);
        } else if (target.classList.contains('sup')){
            setIsClient(false);
        }
    }

    //버튼 색상 바꾸기
    function changeGenderBackground(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = event.currentTarget;
        if(target.classList.contains('male')){
            setGender('male')
        } else if(target.classList.contains('female')){
            setGender('female')
        } else if(target.classList.contains('none')){
            setGender('none')
        }
    }

    //인증요청하면 alert창 띄우기
    function auRequest(){
        window.alert("인증요청 되었습니다!")
        setIsAuRequest(true);

        //서버로 휴대전화번호만 전송하는 코드
    }

    return(
        <RegisterStyle1>
            <div className="main-container">
                <div className="title">회원가입</div>
                <div className="choose-user-type">
                    <div>사용자 유형 선택</div>
                    <div>
                        <button className = 'cli' onClick={changeCliBackground} style={{backgroundColor:isClient?"#D3D3D3":'white'}}>클라이언트</button>
                        <button className = 'sup' onClick={changeCliBackground} style={{backgroundColor:isClient?'white':"#D3D3D3"}}>서포터</button>
                    </div>
                </div>
                <div className="user-info">
                    <div className = "user-authentication">
                        <div>본인인증</div>
                        <div className = "userInfo-div">
                            <div className = "left">
                                <div>이름</div>
                                <div>휴대전화번호</div>
                                <div>인증번호</div>
                            </div>
                            <div>
                                <input placeholder="ex) 홍길동"/>
                                <input type="tel" placeholder="010-xxxx-xxxx"/>
                                <button onClick={auRequest} style={{opacity:isAuRequest?0.5:1}}>인증요청</button>
                                <input type="number"/>
                                <button>확인</button>
                                <div style={{opacity:isAu?1:0}} >*본인 인증 완료 되었습니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className = "user-password">
                        <div>비밀번호설정</div>
                        <div className="pwd-div">
                            <div className = "left">
                                <div>비밀번호</div>
                                <div>비밀번호확인</div>
                            </div>
                            <div>
                                <input type="text" placeholder="비밀번호 8자리"/>
                                <input type="text" placeholder="비밀번호 확인"/>
                                <div style={{opacity:isPwdMatch?1:0}}>*비밀번호가 일치하지 않습니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className = "user-profile">
                        <div>
                            <div>프로필설정</div>
                        </div>
                        <div className = "profile-div">
                            <div className = "left">
                                <div>생년월일</div>
                                <div>성별</div>
                            </div>
                            <div>
                                <input type="datetime" placeholder="ex) 90/01/01"/>
                                <div className="buttons">
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='male'?"#D3D3D3":'white'}} className='male'>남자</button>
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='female'?"#D3D3D3":'white'}} className='female'>여자</button>
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='none'?"#D3D3D3":'white'}} className='none'>선택안함</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className = "register">가입하기</button>
            </div>
        </RegisterStyle1>
    );
}