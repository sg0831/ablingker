import styled from 'styled-components'
import { RegisterStyle1 } from '../css/registerStyle1';
import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Register1(){
    //인증번호
    const [userCheckNum, setUserCheckNum] = useState("");
    const [isUserCheckClick, setIsUserCheckClick] = useState(false);

    //인증되었는지 안되었는지 & 비번 맞는지 & 인증요청 했는지 & input을 다 작성했는지
    const [isAu, setIsAu] = useState(false);
    const [isPwdMatch, setIsPwdMatch] = useState(false);
    const [isAuRequest, setIsAuRequest] = useState(false);
    const [checkUser, setCheckUser] = useState("");
    const [isUserInputFull,setIsUserInputFull] = useState(false);
    const [checkpwd, setCheckpwd] = useState("");
    //사용자의 개인정보
    const [isClient,setIsClient] = useState(true);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pwd, setPwd] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("male");

    //비밀번호 8자리 이상인지
    const [isPwdOver, setIsPwdOver] = useState(false);

    const navigate = useNavigate();

    //비밀번호 검사기
    useEffect(() => {
        if(pwd.length > 7){
          setIsPwdOver(true);
        } else {
          setIsPwdOver(false);
        }
        if (pwd === checkpwd) {
          setIsPwdMatch(true);
        } else {
          setIsPwdMatch(false);
        }
      }, [pwd, checkpwd]);

    //사용자 유형 버튼 색상 바꾸기
    function changeCliBackground(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const target = event.currentTarget;
        if(target.classList.contains("cli")){
            setIsClient(true);
        } else if (target.classList.contains('sup')){
            setIsClient(false);
        }
    }

    //성별 버튼 색상 바꾸기
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

    function checkTel(value: string): boolean {
        const regex = /^[0-9]{1,11}$/;
        if (regex.test(value) && !value.includes('-')) {
          return true;
        } else {
          return false;
        }
      }

      function isValidDate(value: string): boolean {
        const regex = /^\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/;
        return regex.test(value);
      }

    //인증요청하면 alert창 띄우기
    function auRequest(){
        if(checkTel(phone)){
            window.alert("인증요청 되었습니다!")
            setIsAuRequest(true);
            //서버로 휴대전화번호만 전송하는 코드
            fetch(`http://localhost:8080/api/login?password=1234&userId=test1`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                //전화번호 키값 : 변수
            }),
            })
            .then(res => res.json())
            .then(data => {
                const userCheckNum = data.data;
                setUserCheckNum(userCheckNum);
            })
            .catch(error => {
                window.alert("서버에 요청하는데 실패했습니다.");
                setIsAuRequest(false);
            })
            .finally(() => {
                setIsAuRequest(false);
            })
        } else{
            window.alert("오직 숫자만 입력하여 주세요.");
        }
    }

      
    function inputUserInfo(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.currentTarget;
        if (target.className.includes('userName')) {
          setName(target.value);
        } else if (target.className.includes('userTel')) {
          setPhone(target.value);
        } else if (target.className.includes('userPwd')) {
          setPwd(target.value);
        } else if (target.className.includes('userBirth')) {
          setBirthday(target.value);
        } else if (target.className.includes('checkUserPwd')) {
          setCheckpwd(target.value);
        } else if (target.className.includes('checkUser')){
          setCheckUser(target.value);
        }
        if (
          name !== "" && isAu && isPwdMatch && isValidDate(birthday)
        ) {
          setIsUserInputFull(true);
        } else {
          setIsUserInputFull(false);
        }
      }

    function checkUserBtn(){
        if(userCheckNum == checkUser && userCheckNum.length != 0){
            setIsAu(true);
        } else{
            window.alert("인증번호를 확인해주세요.")
            setIsAu(false);
        }
    }

    function nextPage(){
        if(isUserInputFull){
            fetch(`http://localhost:8080/api/login?password=1234&userId=test1`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    //서버로 보낼 개인정보
                    //개인정보 종류
                    //isClient, name, phone, pwd, birthday, gender
                }),
              })
            .catch(error => {
                window.alert("서버에 정보를 전송하는데 실패했습니다.");
            })
            .finally(() => {
            })
        } else{
            window.alert('회원가입 정보를 다시 한 번 확인해주세요.')
        }
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
                                <input onChange={inputUserInfo} className='userName' placeholder="ex) 홍길동"/>
                                <input onChange={inputUserInfo} className='userTel' type="tel" placeholder="-을 제외한 번호만"/>
                                <button onClick={auRequest} style={{opacity:isAuRequest?0.5:1}}>인증요청</button>
                                <input type="number"/>
                                <button onClick={checkUserBtn}>확인</button>
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
                                <input onChange={inputUserInfo} className='userPwd' type="password" placeholder="비밀번호 8자리 이상"/>
                                <input onChange={inputUserInfo} className='checkUserPwd'type="password" placeholder="비밀번호 확인"/>
                                <div>{isPwdOver?isPwdMatch?"":"*비밀번호가 일치하지 않습니다.":"*비밀번호는 8자리 이상이어야 합니다."}</div>
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
                                <input onChange={inputUserInfo} className='userBirth' type="datetime" placeholder="ex) 90/01/01"/>
                                <div className="buttons">
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='male'?"#D3D3D3":'white'}} className='male'>남자</button>
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='female'?"#D3D3D3":'white'}} className='female'>여자</button>
                                    <button onClick={changeGenderBackground} style={{backgroundColor:gender=='none'?"#D3D3D3":'white'}} className='none'>선택안함</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={nextPage} style={{opacity:isUserInputFull?1:0.3}} className = "register">가입하기</button>
            </div>
        </RegisterStyle1>
    );
}