import styled from 'styled-components';

export const HistoryStyle = styled.div`

/* 콘텐츠들 정렬 */
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main-container > :nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 40px;
    position: absolute;
    top: 0;
    background-color: #d9d9d9;
    width: 100%;
}

/* sort 스타일 */
.sort{
    width: 80%;
    height: 30px;
    margin-top: 40px;
    color: #7c7c7c;
    border: none;
    box-shadow: 4px 6px 11px -3px rgba(228,228,228,0.91);
    -webkit-box-shadow: 4px 6px 11px -3px rgba(228,228,228,0.91);
    -moz-box-shadow: 4px 6px 11px -3px rgba(228,228,228,0.91);
}

/* sup-content 스타일 */
.sup-content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    height: 550px;
    overflow-y: auto;
}

.sup-content::-webkit-scrollbar{
    display: none; 
}

.top-content{
    display: flex;
}

.sup-history {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 48%;
    height: 90px;
    background-color: #d9d9d9;
  }
  

.profile{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid black;
}

.sup-info{
    margin-left: 20px;
}

.sup-info > :nth-child(1){
    font-size: 13px;
}

.sup-rating{
    margin-top: 4px;
    font-size: 17px;
}

.sup-rating i{
    color: #ffe195;
}

/* 아래 탭 스타일 */
.bottom-tap {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
}

.bottom-tap div {
    width: 25%;
    display: flex;
    height: 100%;
    border: 1px #808080 solid;
    background-color: #f0f0f0;
    justify-content: center;
    align-items: center;
}

`;