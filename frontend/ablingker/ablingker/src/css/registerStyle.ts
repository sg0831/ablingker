import styled from 'styled-components';

export const RegisterStyle = styled.div`
/* 정렬 */
/* 메인화면 정렬 */
.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 동의부분 정렬 */
.all-agree{
    display: flex;
    justify-content: flex-start;
}

.announcement{
    display: flex;
}

.items{
    display: flex;
    flex-direction: column;
}

.items div{
    display: flex;
    justify-content: flex-start;
}

.see-announcement{
    display: flex;
    flex-direction: column;
}

/* 위치정보 위치 정렬 */
.inform{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* 버튼 위치 정렬 */
.next{
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 스타일 */
/* 제목 */
.title{
    margin-bottom: 60px;
}

/* 전체동의 */
.all-agree{
    margin-bottom: 60px;
}
.all-agree div{
    margin-left: 10px;
}

/* 각각의 동의 부분 */
.items div > div{
    margin-left: 10px
}

.items > div{
    margin-bottom: 30px;
}

.see-announcement{
    margin-left: 30px;
}

.see-announcement > a {
    margin-bottom: 30px;
}

/* 위치정보 */
.inform{
    margin-top: 100px
}

.inform > div{
    font-size: 20px;
}

/* 버튼 */
.next > button{
    margin-top: 90px;
    width: 200px;
    height: 40px;
    border: solid 2px black;
}

`;