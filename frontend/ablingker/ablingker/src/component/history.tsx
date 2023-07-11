import { HistoryStyle } from "../css/historyStyle";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from '../hooks/useFetch';
import React, { useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";

export default function History() {
    const [sort, setSort] = useState("recent-asc");
    const [review, setReview] = useState("");
    const data = useFetch('서포터이름, 프로필, 번호, 별점 받아오는');
    const navigate = useNavigate();

    //이제 sort 값 따라 정렬하는 코드를 만들어~ 보자!
    useEffect(()=>{
        const supCon = document.getElementsByClassName('sup-content')[0];
        fetch("API주소")
        .then (res => res.json())
        .then(data => {
            if(data != null){
                var userdata = []
                if(sort === 'recent-asc'){
                    userdata = mergeSort(data,true,true);
                } else if (sort === 'recent-des'){
                    userdata = mergeSort(data,false,true);
                } else if (sort === 'rating-asc'){
                    userdata = mergeSort(data,true,false);
                } else if (sort === 'rating-des'){
                    userdata = mergeSort(data,false,false);
                }
                userdata.map((data) => {
                    const supHis = document.createElement("div");
                    supHis.className = "sup-history";
                    
                    const handleClick = () => {
                        const popup = document.createElement("div");
                        popup.className = "popup";
                
                        const top = document.createElement("div");
                        top.className = "top";
                        popup.appendChild(top);
                
                        const pic = document.createElement("div");
                        pic.className = "pic";
                        top.appendChild(pic);
                
                        const sup = document.createElement("div");
                        sup.className = "sup";
                        top.appendChild(sup);
                
                        const name = document.createElement("div");
                        name.className = "name";
                        name.textContent = data.name; // 서포터 이름
                        sup.appendChild(name);
                
                        const content = document.createElement("div");
                        content.className = "content";
                        content.textContent = "서포트 내용"; // 서포트 내용
                        sup.appendChild(content);
                
                        const date = document.createElement("div");
                        date.className = "date";
                        date.textContent = "00-00-00"; // 날짜
                        top.appendChild(date);
                
                        const rating = document.createElement("div");
                        rating.className = "rating";
                        popup.appendChild(rating);
                
                        for (let i = 0; i < data.rating; i++) {
                            const star = document.createElement("i");
                            star.className = "fa-solid fa-star";
                            rating.appendChild(star);
                        }
                
                        const inputContent = document.createElement("div");
                        inputContent.className = "input-content";
                        popup.appendChild(inputContent);
                
                        const textarea = document.createElement("textarea");
                        textarea.placeholder = "리뷰를 작성해보세요!";
                        textarea.cols = 30;
                        textarea.rows = 5;
                        inputContent.appendChild(textarea);
                
                        const button = document.createElement("button");
                        button.textContent = "확인";
                        popup.appendChild(button);
                
                        // 확인 버튼 클릭 이벤트 처리
                        button.addEventListener("click", () => {
                            setReview(textarea.value);
                            supCon.removeChild(popup);
                        });
                        supCon.appendChild(popup);
                
                    };
                
                    supHis.addEventListener("click", handleClick);
                
                    supHis.innerHTML = `
                        <div class="top-content">
                            <div class="profile"></div>
                            <div class="sup-info">
                                <div>${data.name}</div> <!-- 서포터 이름 -->
                                <div>${data.num}</div> <!-- 서포터 번호 -->
                            </div>
                        </div>
                        <div class="sup-rating">
                            <FontAwesomeIcon icon={faStar} style={{color:'#ffe195', marginTop: '3px', fontSize: '17px'}} className="fa-solid fa-star" />
                            <FontAwesomeIcon icon={faStar} style={{color:'#ffe195', marginTop: '3px', fontSize: '17px'}} className="fa-solid fa-star" />
                            <FontAwesomeIcon icon={faStar} style={{color:'#ffe195', marginTop: '3px', fontSize: '17px'}} className="fa-solid fa-star" />
                            <FontAwesomeIcon icon={faStar} style={{color:'#ffe195', marginTop: '3px', fontSize: '17px'}} className="fa-solid fa-star" />
                            <FontAwesomeIcon icon={faStar} style={{color:'#ffe195', marginTop: '3px', fontSize: '17px'}} className="fa-solid fa-star" />
                        </div>
                    `;
                
                    supCon.appendChild(supHis);
                });
            } else{
                supCon.innerHTML = "<div>아직 매칭을 하신적이 없습니다.</div>";
            }
        })
        .catch(err=>{
            supCon.innerHTML = "<div>서버와의 통신에 실패했습니다.</div>";
        });
    },[sort]);

    function mergeSort(data: any[], isAsc: boolean, isRecent: boolean): any[] {
        if (data.length <= 1) {
          return data;
        }
      
        const middle = Math.floor(data.length / 2);
        const left = data.slice(0, middle);
        const right = data.slice(middle);
      
        const merge = (leftArr: any[], rightArr: any[]): any[] => {
          const merged: any[] = [];
          let leftIndex = 0;
          let rightIndex = 0;
      
          while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            const leftDateParts = leftArr[leftIndex].date.split('-');
            const rightDateParts = rightArr[rightIndex].date.split('-');
            const leftYear = parseInt(leftDateParts[0]);
            const leftMonth = parseInt(leftDateParts[1]);
            const leftDay = parseInt(leftDateParts[2]);
            const rightYear = parseInt(rightDateParts[0]);
            const rightMonth = parseInt(rightDateParts[1]);
            const rightDay = parseInt(rightDateParts[2]);
      
            let comparison = 0;
            if (isRecent) {
              if (leftYear !== rightYear) {
                comparison = isAsc ? leftYear - rightYear : rightYear - leftYear;
              } else if (leftMonth !== rightMonth) {
                comparison = isAsc ? leftMonth - rightMonth : rightMonth - leftMonth;
              } else {
                comparison = isAsc ? leftDay - rightDay : rightDay - leftDay;
              }
            } else {
              comparison = isAsc ? leftArr[leftIndex].rating - rightArr[rightIndex].rating : rightArr[rightIndex].rating - leftArr[leftIndex].rating;
            }
      
            if (comparison < 0) {
              merged.push(leftArr[leftIndex]);
              leftIndex++;
            } else {
              merged.push(rightArr[rightIndex]);
              rightIndex++;
            }
          }
      
          return merged.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
        };
      
        return merge(mergeSort(left, isAsc, isRecent), mergeSort(right, isAsc, isRecent));
      }
      
    function sortFn(event:React.ChangeEvent<HTMLSelectElement>){
        const value = event.target.value;
        if(value === 'recent-asc'){
            setSort("recent-asc")
        } else if(value === 'recent-des'){
            setSort("recent-des")
        } else if(value === 'rating-asc'){
            setSort("rating-asc")
        } else if(value === 'rating-des'){
            setSort("rating-des")
        }
    }

    //하단 바 클릭시 특정 페이지로 이동
    function pageMove(event:React.MouseEvent<HTMLDivElement | HTMLButtonElement ,MouseEvent>){
        const target = event.currentTarget;
        if(target.classList.contains('bottom-tap-item1')){
            navigate('/client');
        } else if (target.classList.contains('bottom-tap-item2')){
            navigate('');
        } else if (target.classList.contains('bottom-tap-item3')){
            navigate('/history');
        } else if (target.classList.contains('bottom-tap-item4')){
            navigate('');
        } else if (target.classList.contains('bottom-tap-item5')){
            navigate('');   
        } else if (target.classList.contains('face-to-face')){
            navigate('/setlocation');
        } else if (target.classList.contains('non-face-to-face')){
            window.alert('준비중입니다.')
        }
    }

    return (
<HistoryStyle>
    <div className="main-container">
        <div>히스토리</div>
        <select className="sort" onChange={sortFn}>
            <option value="recent-asc">최근 순서 (오름차순)</option>
            <option value="recent-des">최근 순서 (내림차순)</option>
            <option value="rating-asc">별점순 (오름차순)</option>
            <option value="rating-des">별점순 (내림차순)</option>
        </select>
        <div className="sup-content">
        </div>
        <div className="bottom-tap">
            <div onClick={pageMove} className="bottom-tap-item1">매칭하기</div>
            <div onClick={pageMove} className="bottom-tap-item2">매칭확인</div>
            <div onClick={pageMove} className="bottom-tap-item3">히스토리</div>
            <div onClick={pageMove} className="bottom-tap-item4">공지사항</div>
            <div onClick={pageMove} className="bottom-tap-item5">내 정보</div>
        </div>
    </div>
</HistoryStyle>
    );
}