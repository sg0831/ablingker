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
  const navigate = useNavigate();

  //사용자가 한번 로그인 한적 있는지 판단하는 코드
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

  //사용자의 id, pwd를 입력받고 state로 변경해서 저장하는 함수
  function inputIdPwd(event: React.ChangeEvent<HTMLInputElement>){
    const target = event.target;
    const value = target.value
    if(target.getElementsByClassName('id')){
      SetId(value);
    } else{
      SetPassword(value);
    }
  }

  //사용자가 로그인 버튼을 눌렀을 시
  function handleLogin() {
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
        .then(res => res.json())
        .then(data => {
          const loginResult = data.data.userType;
          //사용자에게 isLogin을 키값으로 하는 쿠키 발급
          Cookies.set('isLogin',loginResult)
          console.log(data.data.userType)
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
          }
        })
        .finally(() => {
          setIsLoading(false);
        })
    }
  }

  return (
    <LoginStyle>
        <div className="login-container">
            <div className = "logo">에이블링커</div>
            <div className = "input-login-info">
                <input type="tel" placeholder="휴대전화번호" className='id' onChange={inputIdPwd} required/>
                <input type="password" placeholder="비밀번호 입력" className='pwd' onChange={inputIdPwd} required/>
            </div>
            <div className = "wrong-password">*비밀번호를 확인해주세요.</div>
            <div className = "login-btn">
                <button type="submit" onClick={handleLogin}>로그인</button>
                <div>
                    <input type="checkbox" id="auto-login"/>
                    <label htmlFor="auto-login"></label>
                    <span className="on"></span>
                    <div>자동로그인</div>
                </div>
            </div>
            <div className = "register">
                <a href="#">비밀번호 찾기 /</a>
                <a href="#">간편로그인 /</a>
                <a href="#">회원가입</a>
            </div>
        </div> 
    </LoginStyle>
  );
}
