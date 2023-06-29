import { LocationStyle } from "../css/locationStyle";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function Location(){
    //라디오 버튼 체크 변수
    const [isOneWay, setIsOneWay] = useState(true);
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [isWalk, setIsWalk] = useState(true);
    const [isBus, setIsBus] = useState(false);
    const [isTaxi, setIsTaxi] = useState(false);

    const navigate = useNavigate();
    
    function isOneWayfn(event:React.MouseEvent<HTMLInputElement, MouseEvent>){
        const value = event.currentTarget.value;

        if(value === 'one-way'){
            setIsOneWay(true);
            setIsRoundTrip(false);
        } else{
            setIsOneWay(false);
            setIsRoundTrip(true);
        }
    }
    
    function whatVehicle(event:React.MouseEvent<HTMLInputElement, MouseEvent>){
        const value = event.currentTarget.value;

        if(value === "walk"){
            setIsWalk(true);
            setIsBus(false);
            setIsTaxi(false);
        } else if (value === "bus"){
            setIsWalk(false);
            setIsBus(true);
            setIsTaxi(false);
        } else{
            setIsWalk(false);
            setIsBus(false);
            setIsTaxi(true);
        }
    }

    function movePage(event:React.MouseEvent<HTMLButtonElement,MouseEvent>){
        const target = event.currentTarget;
        const className = target.className;

        if(className.includes('back')){
            navigate('/client');
        }else if(className.includes('start')){
            navigate('');
        }else if(className.includes('end')){
            navigate('');
        }else if(className.includes('next')){
            navigate('');
        }
    }   

    return (
    <LocationStyle>
        <div className="main-container">
            <div className="top-nav">
                <button className="back" onClick={movePage}>&lt;</button>
                <div>위치 설정</div>
            </div>
            <div className = "set-location">
                <div className ="start-location">
                    <div>출발지</div>
                    <button className="start" onClick={movePage}>클릭하여 설정해주세요</button>
                </div>
                <div className ="end-location">
                    <div>도착지</div>
                    <button className="end" onClick={movePage}>클릭하여 설정해주세요</button>
                </div>
                <div className="is-round-trip">
                    <div className="one-way">
                        <input onClick={isOneWayfn} type="radio" name="trip" value="one-way" checked={isOneWay}/>
                        <div>편도</div>
                    </div>
                    <div className="round-trip">
                        <input onClick={isOneWayfn} type="radio" name="trip" value="round-trip" checked={isRoundTrip}/>
                        <div>왕복</div>
                    </div>
                </div>
            </div>
            <div className="solid"></div>
            <div className="vehicle">
                <div>이동수단</div>
                <div className="vehicle-child">
                    <div className="walk">
                        <input onClick={whatVehicle} type="radio" name="vehicle" value="walk" checked={isWalk}/>
                        <div>도보</div>
                    </div>
                    <div className="bus">
                        <input onClick={whatVehicle} type="radio" name="vehicle" value="bus" checked={isBus}/>
                        <div>대중교통</div>
                    </div>
                    <div className="taxi">
                        <input onClick={whatVehicle} type="radio" name="vehicle" value="taxi" checked={isTaxi}/>
                        <div>택시</div>
                    </div>
                </div>
            </div>
            <button className="next" onClick={movePage}>다음</button>
        </div>
    </LocationStyle>
    );
}