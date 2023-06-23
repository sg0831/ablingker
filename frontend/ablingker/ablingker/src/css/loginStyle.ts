import styled from 'styled-components';

export const LoginStyle = styled.div`

/* CSS 코드 */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin: 0;
    padding: 0;
}

/* login container css */
.login-container {
    text-align: center;
    width: 300px;
    padding: 20px;
}


/* 메인 로고 css */
.logo{
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 600;
}

/* 로그인 input css */
.input-login-info > input{
    width: 230px;
    height: 25px;
    border: 2px black solid;
    margin-bottom: 20px;
}

.input-login-info > input::placeholder{
    text-align: center;
}

/* 비밀번호 확인해주세요 */
.wrong-password{
    color: red;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 30px;
}

/* 로그인 버튼 & 자동 로그인*/
.login-btn button{
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 40px;
    border: 2px solid black;
    background-color: white;
}

.login-btn > div{
    display: flex;
    justify-content: center;
    margin-top: 25px;
    margin-bottom: 50px;
}

/* 비밀번호 찾기 / 간편로그인 / 회원가입 */
.register a{
    text-decoration: none;
    color: #808080 ;
}

`;