import { SupportContentStyle } from "../css/supportContentStyle";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SupportContent(){
    const [supportContent, setSupportContent] = useState("move");
    const [extContent, setExtContent] = useState("");

    const navigate = useNavigate();

    function supContent(event:React.MouseEvent<HTMLInputElement,MouseEvent>){
        const target = event.currentTarget;

        if(target.value === "move"){
            setSupportContent("move")
        } else if(target.value === "assisted-living"){
            setSupportContent("assisted-living")
        }else if(target.value === "etc"){
            setSupportContent("etc")
        }
    }

    function extcontent(event:React.ChangeEvent<HTMLTextAreaElement>){
        const target = event.currentTarget;
        setExtContent(target.value);
        console.log(extContent)
    }

    function next() {
        const confirm = window.confirm(`아래의 내용이 맞습니까?
        지원내용 : ${supportContent === "move" ? '이동': supportContent === "assisted-living" ? "가사보조" : supportContent === "etc" ? "기타" : ""}
        추가요청사항 : "${extContent}"`)
        if(confirm){
            navigate('');
        } else{
            window.alert("취소되었습니다.")
        }
    }

    return (    
        <SupportContentStyle>
            <div className="main-container">
                <div className="top-nav">
                    <button>&lt;</button>
                    <div>지원내용 설정</div>
                </div>
                <div className="supportContent">
                    <div>지원내용</div>
                    <div className="input">
                        <div>
                            <input onClick={supContent} type="radio" name="support" value="move" checked = {supportContent === "move" ? true : false}/>이동
                        </div>
                        <div>
                            <input onClick={supContent} type="radio" name="support" value="assisted-living" checked = {supportContent === "assisted-living" ? true : false}/>가사보조
                        </div>
                        <div>
                            <input onClick={supContent} type="radio" name="support" value="etc" checked = {supportContent === "etc" ? true : false}/>기타
                        </div>
                    </div>
                </div>
                <div className="extra-request">
                    <div>추가요청사항</div>
                    <textarea onChange={extcontent} placeholder="추가 요청 사항 기재" rows={3} cols={50}></textarea>
                </div>
                <button onClick={next} className="next">매칭하기</button>
            </div>
    </SupportContentStyle>
);
}