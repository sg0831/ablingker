import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components'
import { LoginStyle } from '../css/loginStyle'
import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [id, SetId] = useState("");
  const [password, SetPassword] = useState("");
  const [wrongPwd, setWordgPwd] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();

  //사용자가 쿠키를 받은적 있는지 판단함
  useEffect(()=>{
    const cookie = Cookies.get('isLogin')
    //만약 쿠키가 있으면
    if(cookie !== null){
      //만약 이용자가 클라이언트인 경우
      if (cookie == "cli") {
        navigate('/employer');
      }
      //만약 이용자가 서포터인 경우
      else if (cookie == "spt") {
        navigate('/helper');
      }
    }
  })

  //사용자의 id, pwd를 입력받고 state로 저장함
  function inputIdPwd(event: React.ChangeEvent<HTMLInputElement>){
    const target = event.target;
    const value = target.value;
    if(target.getElementsByClassName('id')){
      SetId(value);
    } else{
      SetPassword(value);
    }
  }

  //로그인 버튼을 누르면 서버에 데이터를 보내고 로그인 정보를 받아와 맞는 페이지로 보내줌
  function handleLogin() {
    //서버에 로그인 정보 받아옴
    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:8080/api/login?password=1234&userId=test1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
          password: password,
        }),
      })
      //서버에서 받은 데이터를 json으로 변환함
        .then(res => res.json())
        .then(data => {
          const loginResult = data.data.userType;
          //만약 이용자가 클라이언트인 경우
          if (loginResult == "cli") {
            navigate('/employer');
          }
          //만약 이용자가 서포터인 경우
          else if (loginResult == "spt") {
            navigate('/helper');
          }
          else {
            window.alert("아이디, 비밀번호를 확인해 주시길 바랍니다.");
            setWordgPwd(true);
          }
          if(isChecked){
            //사용자에게 isLogin을 키값으로 하는 쿠키 발급
            Cookies.set('isLogin',loginResult)
          }
        })
          .catch(error => {
            window.alert("서버에서 정보를 받아오는데 실패하였습니다.");
          })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  //비밀번호 찾기 부분 누르면 페이지 옮겨가는 함수
  function movePage(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
    event.preventDefault();
    const target = event.currentTarget;
    if(target.classList.contains('findPwd')){
      navigate('/findPwd')
    } else if(target.classList.contains('easyLogin')){
      navigate('/easyLogin')
    } else if(target.classList.contains('register')){
      navigate('/register')
    }
  }

  //체크박스 체크상태 다시 그릴때 사용되는 함수
  function checkChange(event:React.ChangeEvent<HTMLInputElement>){
    setIsChecked(!isChecked);
  }

  return (
    <LoginStyle>
        <div className="login-container">
            <div className = "logo">에이블링커</div>
            <div className = "input-login-info">
                <input type="tel" placeholder="휴대전화번호" className='id' onChange={inputIdPwd} required/>
                <input type="password" placeholder="비밀번호 입력" className='pwd' onChange={inputIdPwd} required/>
            </div>
            <div className = "wrong-password" style={{ opacity : wrongPwd ? 1 : 0}}>*비밀번호를 확인해주세요.</div>
            <div className = "login-btn">
                <button type="submit" onClick={handleLogin} style={{ opacity : isLoading ? 0.5 : 1}} >로그인</button>
                <div>
                    <input type="checkbox" id="auto-login" checked={isChecked} onChange={checkChange}/>
                    <label htmlFor="auto-login"></label>
                    <span className="on"></span>
                    <div>자동로그인</div>
                </div>
            </div>
            <div className = "register">
                <a href="" className='findPwd' onClick={movePage}>비밀번호 찾기 /</a>
                <a href="" className='easyLogin' onClick={movePage}>간편로그인 /</a>
                <a href="" className='register' onClick={movePage}>회원가입</a>
            </div>
        </div> 
    </LoginStyle>
  );
}
