import React, { useState } from "react";
import { TimeSetStyle } from "../css/timeSetStyle";
import { useLocation, useNavigate } from "react-router-dom";


export default function TimeSet(){
    const [hour, SetHour] = useState("");
    const [minute, Setminute] = useState("");
    const [isNull, SetIsNull] = useState(true);
    const [today, SetToDay] = useState("");
    const nowHour = new Date().getHours();
    const nowMinute = new Date().getMinutes();
    const navigate = useNavigate();
    const location = useLocation(); 

    function valueOfHour(event:React.ChangeEvent<HTMLDivElement> ) {
        const Hour = event.target as HTMLInputElement;
        const value = Hour.value;
        if(today === ""){
            SetToDay("오늘");
        }
        if(today === "내일"){
            if (parseInt(value) > 24){
                alert("24시가 최대입니다.")
                Hour.value = "";
            } else if (isNaN(Number(value))){
                alert("숫자만 입력 할 수 있습니다.")
                Hour.value = "";
            } else {
                SetHour(value);
            }
        } else{
            if (parseInt(value) > 24){
                alert("24시가 최대입니다.")
                Hour.value = "";
                SetIsNull(true);
            } else if (today === "오늘" && nowHour > parseInt(value) && value.length > 1) {
                alert("현재 시간보다 이전입니다!")
                Hour.value = "";
                SetIsNull(true);
            } else if (isNaN(Number(value))){
                alert("숫자만 입력 할 수 있습니다.")
                Hour.value = "";
                SetIsNull(true);
            } else if(nowHour < 10) {
                SetHour(value);
            } else if (value.length > 1){
                SetHour(value);
            }
        }
    }
    function valueOfMinute(event:React.ChangeEvent<HTMLDivElement> ) {
        const minute = event.target as HTMLInputElement;
        const value = minute.value;
        if (today === "") {
            SetToDay("오늘");
        }
        if (today === '내일') {
            if (parseInt(value) > 59){
                alert("59분이 최대입니다.")
                minute.value = "";
                SetIsNull(true);
            } else if (isNaN(Number(value))){
                alert("숫자만 입력 할 수 있습니다.")
                minute.value = "";
            } else {
                Setminute(value);
                SetIsNull(false);
            }
        }
        else{
            if(hour == ""){
                alert("시간을 먼저 입력하여 주십시오")
                minute.value = "";
            }
            else{
                if (parseInt(value) > 59){
                    alert("59분이 최대입니다.")
                    minute.value = "";
                    SetIsNull(true);
                }
                else if (
                    (parseInt(hour) === nowHour+1 && parseInt(value) < (nowMinute+30)%60 && value.length > 1)
                    || (parseInt(hour) === nowHour+1 && parseInt(value) < (nowMinute+30)%60 && (nowMinute+30)%60 < 10)
                     || (parseInt(hour) === nowHour && parseInt(value) < nowMinute+30 && value.length > 1
                     || (parseInt(hour) === nowHour && parseInt(value) < nowMinute+30 && value.length > 1))
                    ){
                    alert("현재 시간으로부터 30분 이후에만 시간을 지정할 수 있습니다.")
                    minute.value = "";
                    SetIsNull(true);
                } else if (isNaN(Number(value))){
                    alert("숫자만 입력 할 수 있습니다.")
                    minute.value = "";
                    SetIsNull(true);
                } else{
                    Setminute(value);
                    SetIsNull(false);
                }
            }
        }
        if(value.length > 1){
            SetIsNull(false);
        }
    }

    function isInputNull(){
        if(!isNull){
            const a = window.confirm(`
                ${hour}시 ${minute}분 ${today} 로 예약 하시는 것이 맞으십니까?
            `);
            if(a){
                navigate("/employer", {state:{
                    hour : hour,
                    minute : minute,
                    today : today,
                    GoPosX : location.state.GoPosX,
                    GoPosY : location.state.GoPosY,
                    ArrivePosX : location.state.ArrivePosX,
                    ArrivePosY : location.state.ArrivePosY,
                    GoPosPlace : location.state.GoPosPlace,
                    ArrivePosPlace : location.state.ArrivePosPlace
                }})
            } else{
                alert("다시 입력하여 주십시오.")
            }
        }
    }

    function isToday(event: React.ChangeEvent<HTMLSelectElement>){
        const target = event.target as HTMLSelectElement;
        const option = target.options[target.selectedIndex] as HTMLOptionElement
        const value = target.value;
        if(value === 'today'){
            SetToDay("오늘");
            SetIsNull(true);
        }else{
            SetToDay("내일");
            SetIsNull(false);
        }
    }

    return(
        <TimeSetStyle>
            <div className="main-container">
                <div className="top-nav">
                    <button>&lt;</button>
                    <div>시간설정</div>
                </div>
                <div className="select-date">
                    <div>날짜선택</div>
                    <div className="isToday">
                        <input type="radio" name="is-today" value="today" checked/>오늘
                        <input type="radio" name="is-today" value="tomorrow"/>내일 (24시이후)
                    </div>
                    <div className="date">
                        00월 00일 0요일
                    </div>
                </div>
                <div className="select-time">
                    <div>시간선택</div>
                    <div className="start-time">
                        <div>서포트 시작 시간 선택</div>
                        <input className="support-start" type="time"/>
                    </div>
                    <div className="end-time">
                        <div>서포트 종료 시간 선택</div>
                        <input className="support-end" type="time"/>
                    </div>
                </div>
                <div className="popup-selectTime">

                </div>
                <button className="next">다음</button>
            </div>
        </TimeSetStyle>
    );
}