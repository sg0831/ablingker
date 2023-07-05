
import styled from 'styled-components';

export const CheckMatchingStyle = styled.div`

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
    top: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 20px;
}

/* map 스타일 */
.map{
    height: 250px;
    width: 100%;
    margin-top: 15%;
    border: 1px solid black;
}

/* sup-content 스타일 */
.sup-content{
    position: absolute;
    bottom: 19%;
    left: 4%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 3%;
}

.loc-move div{
    font-size: 14px;
    margin-bottom: 5px;
}

.time{
    margin-top: 7%;
}

.time > :nth-child(1){
    font-size: 14px;
}

.time > :nth-child(2){
    font-size: 18px;
}

.sup-method{
    margin-top: 7%;
}

.sup-method > :nth-child(1){
    font-size: 14px;
}

.sup-method > :nth-child(2){
    font-size: 15px;
    font-weight: 550;
}

.point{
    margin-top: 10%;
}

.point > :nth-child(1){
    font-size: 18px;
    font-weight: 550;
}

.point > :nth-child(2){
    font-size: 14px;
}

.main-container > :nth-child(4){
    position: absolute;
    bottom: 10%;
    font-size: 15px;
}

/* 버튼 스타일 */
.btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: #d9d9d9;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn > button{
    height: 60px;
    width: 50%;
    border: 1px solid white;
    font-size: 20px;
    background-color: #d9d9d9;
}

`;
