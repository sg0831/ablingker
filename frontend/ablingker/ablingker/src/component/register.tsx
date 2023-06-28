import { RegisterStyle } from "../css/registerStyle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [termsOfServiceCheck, setTermsOfServiceCheck] = useState(false);
  const [privacyPolicyCheck, setPrivacyPolicyCheck] = useState(false);
  const [locationTermsCheck, setLocationTermsCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [isAllCheck, setIsAllCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAllCheck(
      termsOfServiceCheck &&
      privacyPolicyCheck &&
      locationTermsCheck &&
      termsCheck
    );
  }, [termsOfServiceCheck, privacyPolicyCheck, locationTermsCheck, termsCheck]);

  function allCheck() {
    const newState = !isAllCheck;
    setIsAllCheck(newState);
    setTermsOfServiceCheck(newState);
    setPrivacyPolicyCheck(newState);
    setLocationTermsCheck(newState);
    setTermsCheck(newState);
  }

  function otherCheck(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    const isChecked = target.checked;
    if (target.classList.contains("termsOfService-check")) {
      setTermsOfServiceCheck(isChecked);
    } else if (target.classList.contains("privacyPolicy-check")) {
      setPrivacyPolicyCheck(isChecked);
    } else if (target.classList.contains("locationTerms-check")) {
      setLocationTermsCheck(isChecked);
    } else if (target.classList.contains("Terms-check")) {
      setTermsCheck(isChecked);
    }
  }

  function moveToPage(event: React.MouseEvent<HTMLAnchorElement|HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    const target = event.currentTarget;
    // 이용약관 관련 이동 페이지 추후 채워넣을 예정
    if (target.classList.contains("termsOfService")) {
      setTermsOfServiceCheck(true);
      navigate("");
      setTermsOfServiceCheck(true);
    } else if (target.classList.contains("privacyPolicy")) {
      setPrivacyPolicyCheck(true);
      navigate("");
      setPrivacyPolicyCheck(true);
    } else if (target.classList.contains("locationTerms")) {
      setLocationTermsCheck(true);
      navigate("");
      setLocationTermsCheck(true);
    } else if (target.classList.contains("Terms")) {
      setTermsCheck(true);
      navigate("");
    } else if (target.classList.contains("nextBtn")){
      if(isAllCheck){
        navigate("/register1");
      } else {
        window.alert("전부 동의하셔야 회원가입을 할 수 있습니다.")
      }
    }
  }

  return (
    <RegisterStyle>
      <div className="main-container">
        <div className="title">회원가입</div>
        <div className="register-content">
          <div className="all-agree">
            <input
              onClick={allCheck}
              className="allAgree"
              type="checkbox"
              checked={isAllCheck}
            />
            <div className="text">전체동의하기</div>
          </div>
          <div className="announcement">
            <div className="items">
              <div className="ann1">
                <input
                  onChange={otherCheck}
                  className="termsOfService-check"
                  type="checkbox"
                  checked={termsOfServiceCheck}
                />
                <div>[필수] 이용약관</div>
              </div>
              <div className="ann2">
                <input
                  onChange={otherCheck}
                  className="privacyPolicy-check"
                  type="checkbox"
                  checked={privacyPolicyCheck}
                />
                <div>[필수] 개인정보 수집 및 이용</div>
              </div>
              <div className="ann3">
                <input
                  onChange={otherCheck}
                  className="locationTerms-check"
                  type="checkbox"
                  checked={locationTermsCheck}
                />
                <div>[필수] 위치기반 이용약관</div>
              </div>
              <div className="ann4">
                <input
                  onChange={otherCheck}
                  className="Terms-check"
                  type="checkbox"
                  checked={termsCheck}
                />
                <div>[필수] ---- 이용약관</div>
              </div>
            </div>
            <div className="see-announcement">
              <a
                className="termsOfService"
                href=""
                onClick={moveToPage}
              >
                보기 {'>'}
              </a>
              <a
                className="privacyPolicy"
                href=""
                onClick={moveToPage}
              >
                보기 {'>'}
              </a>
              <a
                className="locationTerms"
                href=""
                onClick={moveToPage}
              >
                보기 {'>'}
              </a>
              <a
                className="Terms"
                href=""
                onClick={moveToPage}
              >
                보기 {'>'}
              </a>
            </div>
          </div>
          <div className="inform">
            <div>서비스 특성 상</div>
            <div>[위치기반 서비스]</div>
            <div>체크 필수</div>
          </div>
          <div className="next">
            <button className="nextBtn" onClick={moveToPage} style={{ opacity: isAllCheck ? 1 : 0.3 }}>다음</button>
          </div>
        </div>
      </div>
    </RegisterStyle>
  );
}
