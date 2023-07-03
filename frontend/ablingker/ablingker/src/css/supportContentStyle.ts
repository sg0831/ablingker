import styled from 'styled-components';

export const SupportContentStyle = styled.div`

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

/* supportContent 스타일 */
.supportContent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 50px;
}

.supportContent > :nth-child(1){
    font-size: 20px;
    margin-bottom: 5%;
}

.supportContent > :nth-child(2){
    display: flex;
}

.supportContent input{
    width: 20px;
    height: 20px;
}

.input > div{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
}

/* extra-request 스타일 */
.extra-request{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.extra-request div{
    font-size: 20px;
    margin-bottom: 20px;
}

.extra-request textarea{
    width: 100%;
    height: 400px;
    background-color: #ededed;
    border-radius: 5px 5px;
}

.extra-request textarea::placeholder{
    text-align: center;
    padding-top: 20px;
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