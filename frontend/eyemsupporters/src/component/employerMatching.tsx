import { EmployerMatchingStyle } from "../css/employerMatchingStyle";
import React, { useState, useEffect } from "react";

export default function EmployerMatching(){
    const [matching, SetMatching] = useState("서포터 매칭중");
    const [dots, setDots] = useState("");
    
    useEffect(() => {
      const timer = setTimeout(() => {
        if (dots.length === 2) {
          setDots("");
        } else {
          setDots(dots + ".");
        }
      }, 1000);
    
      return () => {
        clearTimeout(timer);
      };
    }, [dots]);
    
    const updatedMatching = `서포터 매칭중${dots}`;
    SetMatching(updatedMatching);
    
    

    return(
        <EmployerMatchingStyle>
            <div>
                <div className="supporter-message">
                    <p id = "matching">{matching}</p>
                    <button>요청 중단</button>
                </div>
                <div className="request-area">요청사항 띄우는 영역</div>
            </div>
        </EmployerMatchingStyle>
    )
}