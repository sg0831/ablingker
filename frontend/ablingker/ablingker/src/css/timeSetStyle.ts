import styled from 'styled-components';

export const TimeSetStyle = styled.div`
/* main-container */
.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* top-nav 스타일*/
.top-nav{
    display: flex;
    background-color: #d9d9d9;
    position: absolute;
    top:0;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 45px;
}

.top-nav button{
    position: absolute;
    background-color: #d9d9d9;
    border: none;
    font-size: 30px;
    left: 0;
    margin-left: 5px;
}

.top-nav div{
    font-size: 25px;
}

/* 날짜선택 스타일 */
.select-date{
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.isToday input{
    width: 20px;
    height: 20px;
}

.isToday > :nth-child(1){
    margin-right: 20px
}

.isToday > :nth-child(2){
    margin-left: 20px
}

.isToday > div{
    display:flex;
    justify-content: center;
    align-items: center;
}

.isToday{
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-date div{
    margin-bottom: 10%;
}

.select-date > :nth-child(1){
    font-size: 20px;
    font-weight: 550;
}

.date{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    border: 1px solid #a8a8a8;
    border-radius: 5px 5px;
    width: 300px;
    height: 30px;
}

/* 시간선택 스타일 */
.select-time{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.select-time > div{
    margin-bottom: 10%;
}

.select-time > :nth-child(1){
    font-size: 20px;
    font-weight: 550;
}

.start-time{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.start-time > :nth-child(1){
    font-size: 15px;
    margin-bottom: 2%;
}

.support-start{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    border: 1px solid #a8a8a8;
    border-radius: 5px 5px;
    width: 300px;
    height: 30px;
    text-align: center;
}

.end-time{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.end-time > :nth-child(1){
    font-size: 15px;
    margin-bottom: 2%;
}

.support-end{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    border: 1px solid #a8a8a8;
    border-radius: 5px 5px;
    width: 300px;
    height: 30px;
    text-align: center;
}

/* 버튼 스타일 */
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