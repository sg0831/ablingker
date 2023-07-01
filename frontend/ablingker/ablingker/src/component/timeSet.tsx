import React, { useEffect, useState } from "react";
import { TimeSetStyle } from "../css/timeSetStyle";
import { useLocation, useNavigate } from "react-router-dom";


export default function TimeSet(){
    //라디오 버튼 변수
    const [today, SetToDay] = useState("today");

    //월,일,요일 변수
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth()+1);
    const [date, setDate] = useState(new Date().getDate());
    const week = ['일','월','화','수','목','금','토'];
    const [dayOfWeek, setDayOfWeek] = useState(week[new Date().getDay()]);

    const navigate = useNavigate();

    function navigateFn(startTime:String, endTime:String){
        const isRight = window.confirm(`입력하신 시간이 아래가 맞습니까?
        서포트 시작 시간:${startTime}
        서포트 종료 시간:${endTime}`)
        if(isRight){
            navigate("",{state:{
    
            }});
        } else {
            window.alert("취소되었습니다.")
        }

    }

    function endTimeIsBiggerThanStartTime(startTime:string, endTime:string){
        //시 분으로 나누기
        const [startHour, startMinute] = startTime.split(":");
        const [endHour, endMinute] = endTime.split(":");

        if(startHour === endHour){
            if(parseInt(startMinute) < parseInt(endMinute)){
                navigateFn(startTime,endTime)
            } else{
                window.alert("서포트 종료 시간은 서포트 시작시간보다 이후여야 합니다.")
            }
        } else if(parseInt(startHour) < parseInt(endHour)){
            navigateFn(startTime,endTime)
        } else if(parseInt(startHour) > parseInt(endHour)){
            window.alert("서포트 종료 시간은 서포트 시작시간보다 이후여야 합니다.")
        }
    }

    //다음 눌렀을때 변수
    function nextBtn(){
        //시간 가져오기
        const startEl = document.querySelector('.support-start') as HTMLInputElement;
        const endEl = document.querySelector('.support-end') as HTMLInputElement;
        const startTime = startEl.value;
        const endTime = endEl.value;

        //시 분으로 나누기
        const [startHour, startMinute] = startTime.split(":");
        const [endHour, endMinute] = endTime.split(":");

        if(startTime != "" && endTime != ""){
            if(today === "today"){
                //30분보다 이후인지
                if(parseInt(startHour) === new Date().getHours()){
                    if(parseInt(startMinute) > new Date().getMinutes()+30){
                        endTimeIsBiggerThanStartTime(startTime,endTime);
                    } else{
                        window.alert("서포트 시작 시간은 현재 시간보다 30분 많아야 합니다.")
                    }
                } else if (parseInt(startHour) > parseInt(endHour)){
                    if(parseInt(startMinute) > (new Date().getMinutes()+30)%60){
                        endTimeIsBiggerThanStartTime(startTime,endTime);
                    } else {
                        window.alert("서포트 시작 시간은 현재 시간보다 30분 많아야 합니다.")
                    }
                } else if (parseInt(startHour) < parseInt(endHour)){
                    window.alert("서포트 시작 시간은 현재 시간보다 30분 많아야 합니다.")
                }
            } else{
                //서포트 시작시간 < 서포트 종료 시간 인지 검사
                endTimeIsBiggerThanStartTime(startTime,endTime);
            }
        } else{
            window.alert("서포트 시작, 종료시간을 입력하여 주세요.")
        }
    }

    //해당 월의 최대 일수를 출력
    function getMonthDay(year:number,month:number):number{
        if(month == 4 || month == 6 || month == 9 || month == 11){
            return 30
        } else if (month == 2){
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
                return 29
            } else {
                return 28
            }
        } else {
            return 31
        }
    }

    // 날짜를 설정
    function setDatefn(inputYear: number, inputMonth: number, isToday:boolean) {
        //오늘 일때
        if(isToday){
            setMonth(new Date().getMonth()+1);
            setDate(new Date().getDate());
            setDayOfWeek(week[new Date().getDay()]);
        }
        //내일 일때
        else{
            //내일이 다음달인 경우
            if(getMonthDay(inputYear,inputMonth) < date+1){
                setMonth(((new Date().getMonth()+1)%12)+1);
                setDate(1);
                setDayOfWeek(week[((new Date().getDay())%6)+1]);
            }
            //아닌 경우
            else{
                //날짜가 오늘이랑 같으면
                if(date === new Date().getDate()){
                    setDate(date+1);
                }
            }
        }
    }
  

    function isToday(event: React.MouseEvent<HTMLInputElement, MouseEvent>){
        const value = event.currentTarget.value;
        if(value === 'today'){
            SetToDay("today");
            setDatefn(year,month,true);
        }else{
            SetToDay("tomorrow");
            setDatefn(year,month,false);
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
                        <div>
                            <input onClick={isToday} type="radio" name="is-today" value="today" checked={today == "today"? true : false}/>오늘
                        </div>
                        <div>
                            <input onClick={isToday} type="radio" name="is-today" value="tomorrow" checked={today == "tomorrow"? true : false}/>내일
                        </div>
                    </div>
                    <div className="date">
                        {month}월 {date}일 {dayOfWeek}요일
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
                    <div>*선택된 시간은 현재 시간보다 30분뒤여야 합니다.</div>
                </div>
                <button onClick={nextBtn} className="next">다음</button>
            </div>
        </TimeSetStyle>
    );
}