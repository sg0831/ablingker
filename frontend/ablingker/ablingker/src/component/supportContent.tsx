export default function SupportContent(){
    return (    
    <div className="main-container">
        <div className="top-nav">
            <button>&lt;</button>
            <div>지원내용 설정</div>
        </div>
        <div className="supportContent">
            <div>지원내용</div>
            <div className="input">
                <div>
                    <input type="radio" name="support" value="move" checked/>이동
                </div>
                <div>
                    <input type="radio" name="support" value="assisted-living"/>가사보조
                </div>
                <div>
                    <input type="radio" name="support" value="etc"/>기타
                </div>
            </div>
        </div>
        <div className="extra-request">
            <div>추가요청사항</div>
            <textarea placeholder="추가 요청 사항 기재" rows={3} cols={50}></textarea>
        </div>
        <button className="next">매칭하기</button>
    </div>
);
}