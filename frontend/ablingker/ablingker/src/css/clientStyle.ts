import styled from 'styled-components';

export const ClientStyle = styled.div`
    /* 전체화면 차지 */
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    /* 콘텐츠들 정렬 */
    .main-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%; /* 추가 */
    }

    /* 로고 스타일 */
    .logo {
        margin-top: 5%;
        margin-bottom: 5%;
        font-size: 25px;
        font-weight: 550;
    }

    /* 서비스 유형 설명 스타일 */
    .select-service {
        margin-top: 5%;
        margin-bottom: 5%;
        font-size: 25px;
        font-weight: 550;
    }

    /* 서비스 버튼 스타일 */
    .service-btn {
        display: flex;
        flex-direction: column;
    }

    .service-btn button {
        margin-top: 20%;
        height: 200px;
        width: 250px;
        font-size: 30px;
        font-weight: 550;
        border-radius: 10%;
        border: 1px solid #b7b7b7;
        background-color: #d9d9d9;
    }

    .service-btn :nth-child(2) {
        color: #adadad;
    }

    /* 아래 탭 스타일 */
    .bottom-tap {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: space-between;
        align-items: center;
    }

    .bottom-tap div {
        flex: 1;
        display: flex;
        height: 100%;
        border: 1px #808080 solid;
        background-color: #f0f0f0;
        justify-content: center;
        align-items: center;
    }
`;
