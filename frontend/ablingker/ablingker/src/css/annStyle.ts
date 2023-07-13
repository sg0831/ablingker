
import styled from 'styled-components';

export const AnnStyle = styled.div`

/* 콘텐츠들 정렬 */
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main-container > :nth-child(1){
    font-size: 20px;
}

/* ann-btn 스타일 */
.ann-btn{
    width: 104%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15%;
    border-bottom: 1px #808080 solid;
}

.ann-btn button{
    width: 33%;
    height: 40px;
    border: none;
    background-color: #d9d9d9;
}

/* ann-content 스타일 */
.ann-content{
    width: 100%;
    display: flex;
    flex-direction: column;
}

.ann-text{
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
}

.ann-text > i {
    font-size: 25px;
    margin-right: 20px;
}

.ann-1{
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #d9d9d9;
    margin-bottom: 10px;
}

.ann-1 > :nth-child(1){
    margin-left: 20px
}

.ann-1 > :nth-child(1) > :nth-child(1){
    font-weight: 550;
}

.ann-1 > :nth-child(1) > :nth-child(2){
    font-size: 13px;
}

.ann-1 > :nth-child(2){
    position: absolute;
    right: 5%;
    font-size: 20px;
    color: #828282;
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

/* FAQ를 눌렀을때 */


/* 커뮤니티를 눌렀을때 */
.com{
    width: 100%;
    height: 400px;
}

.com1{
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    margin-bottom: 10px;
    height: 30px;
    font-size: 13px;
    padding-left: 10px;
}

.com-page{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    border: 1px solid #efefef;
    width: 50%;
    height: 40px;
    bottom: 13%;
    left: 25%;
    border-radius: 30px 30px;
}

.com-page > *{
    margin-left: 25px;
}

.com-page > *:last-child {
    margin-right: 0;
  }

.com-page i{
    font-size: 30px;
    color: #808080;
}

`;
