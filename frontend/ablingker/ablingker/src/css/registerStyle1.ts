import styled from 'styled-components';

export const RegisterStyle1 = styled.div`

/* 정렬 */
/* 메인 콘텐트 정렬 */
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 600px
}

/* 유저타입 선택 정렬 */
.choose-user-type{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* 유저 본인인증 정렬 */
.user-info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.user-authentication{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.userInfo-div{
    display: flex;
}

/* 비밀번호설정 정렬 */
.user-password{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.pwd-div{
    display: flex;
}

/* 프로필설정 정렬 */
.user-profile {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;
}

.user-profile > div:first-child{
    display: flex;
    justify-content: center;
}

.profile-div{
    display: flex;
}

/* 인풋태그 placeholder 정렬 */
.user-info input::placeholder{
    text-align: center;
}


/* 스타일 */
/* 회원가입 타이틀 */
.title{
    font-size: 20px;
    font-weight: 550;
    margin-bottom: 20px;
}

/* 사용자 유형 선택 */
.choose-user-type{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 90%;
    height: 90px;
}

.choose-user-type > div{
    margin-bottom: 10px;
    font-size: 15px;
}

.choose-user-type button{
    width: 100px;
    height: 30px;
    border: solid black 1px;
    background-color: white;
}

/* 본인인증 크기 맞추기 */
.user-info > div{
    width: 100%;
    
}

.userInfo-div > :nth-child(1), .pwd-div > :nth-child(1), .profile-div > :nth-child(1){
    width: 30%;
    margin-right: 20px;
    font-size: 15px;
}

.userInfo-div > :nth-child(2), .pwd-div > :nth-child(2), .profile-div > :nth-child(2){
    width: 50%;
}

.user-info input{
    width: 100%;
    height: 30px;
    border: 1px black solid;
    margin-bottom: 5px;
}

/* 본인인증 */
.user-authentication > :nth-child(1){
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 550;
}

.userInfo-div > :nth-child(2){
    position: relative;
}

.userInfo-div button{
    position: absolute;
}

.userInfo-div > :nth-child(2) :nth-child(3){
    right: -6px;
    bottom: 60px;
    width: 50px;
    height: 34px;
    font-size: 11px;
    border: 1px solid black;
    font-weight: 550;
}

.userInfo-div > :nth-child(2) :nth-child(5){
    right: -6px;
    bottom: 21px;
    width: 50px;
    height: 34px;
    border: 1px solid black;
    font-weight: 550;
}

.userInfo-div .left{
    margin-top: 5px;
}

.userInfo-div .left > div{
    margin-bottom: 20px;
}

.userInfo-div > :nth-child(2) div{
    font-size: 12px;
    font-weight: 550;
}

/* 비밀번호 설정 */
.user-password > :nth-child(1){
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 550;
}

.user-password > :nth-child(2) > :nth-child(2) > :nth-child(3){
    font-size: 12px;
    font-weight: 550;
}

.pwd-div .left{
    margin-top: 5px;
}

.pwd-div .left > div{
    margin-bottom: 20px;
}

/* 프로필 설정 */
.user-profile > :nth-child(1){
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 550;
}

.user-profile button{
    width: 100%;
    height: 30px;
    background-color: white;
    border: 1px solid black;
}

.profile-div .buttons{
    display: flex;
    width: 110%;
    gap: 1px;
}

.profile-div .left{
    margin-top: 5px;
}

.profile-div .left > div{
    margin-bottom: 20px;
}

/* 가입하기 버튼 */
.register{
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: 20px;
    font-weight: 550;
    border: 0;
    height: 60px;
}

`;