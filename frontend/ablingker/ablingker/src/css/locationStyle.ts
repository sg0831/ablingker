import styled from 'styled-components';

export const LocationStyle = styled.div`

/* 전체화면 차지 */
html, body, #root {
  margin: 0;
  padding: 0;
  height: 100%;
}

.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* top-nav 스타일 */
.top-nav{
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
    padding-top: 2%;
    padding-bottom: 2%;
}

.top-nav div{
    font-size: 25px;
}

.top-nav button{
    position: absolute;
    background-color: #d9d9d9;
    border: none;
    font-size: 30px;
    left: 0;
    margin-left: 5px;
}

/* 위치 설정 정렬 */
.set-location{
    display: flex;
    flex-direction: column;
}

/* 출발지 도착지 스타일 */
.set-location{

    display: flex;
    margin-top: 30%;
    margin-bottom: 20%;
    align-items: center;
    justify-content: center;
}

.start-location, .end-location{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
}

.start-location div, .end-location div{
    font-size: 15px;
}

.start-location button, .end-location button{
    width: 250px;
    height: 40px;
    background-color: #d9d9d9;
    border: 1px solid #8f8f8f;
    color: #afafaf;
}

.is-round-trip input{
    width: 20px;
    height: 20px;
}

.is-round-trip{
    display: flex;
}

.is-round-trip div{
    display: flex;
    align-items: center;
    justify-content: center;
}

.round-trip{
    margin-left: 40px;
}

/* 이동수단 스타일 */
.solid{
    width: 100%;
    border-top:1px solid #b3b3b3;
}

.vehicle{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.vehicle > :nth-child(1){
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 20px;
}

.vehicle-child input{
    width: 20px;
    height: 20px;
}

.vehicle-child{
    display: flex;
    align-items: center;
    justify-self: center;
    height: 100px;
}

.walk, .bus, .taxi{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
}

/* 하단 버튼 */
.next{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    border: none;
    font-size: 20px;
    background-color: #d9d9d9;
}

`;