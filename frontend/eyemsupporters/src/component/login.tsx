import React, { useState, useRef } from 'react';
import styled from 'styled-components'
import { LoginStyle } from '../css/loginStyle'
import useFetch from "../hooks/useFetch";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleLogin() {
    if (!isLoading) {
      setIsLoading(true);
      fetch(`서버에 보낼 주소`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ID: idRef.current?.value,
          PASSWORD: passwordRef.current?.value,
        }),
      })
        .then(res => res.json())
        .then(data => {
          Cookies.set('number',idRef.current!.value)
          const loginResult = data.loginResult;
          //만약 이용자가 장애인일 경우
          if (loginResult == "장애인?") {
            navigate('/employer');
          }
          //만약 이용자가 서포터인 경우
          else if (loginResult == "서포터?") {
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
        <form>
          <label htmlFor="phone-number">아이디(전화번호)</label>
          <input type="tel" id="phone-number" name="phone-number" required ref={idRef}></input>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" name="password" required ref={passwordRef}></input>
          <button type="button" onClick={handleLogin} style={{ opacity: isLoading ? 0.3 : 1 }}>{isLoading ? "로그인중..." : "로그인"}</button>
        </form>
      </div>
    </LoginStyle>
  );
}
