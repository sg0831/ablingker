package com.devsg0831.ablingker.jsonDto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.devsg0831.ablingker.dto.User;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;


@Data
public class UserInfoJson {
	// 유저 아이디
	private String userId;
	
	// UserType 외래키 맵핑을 통해 type_name값만 가져오기
	private String userType;
	
	// 유저 실명
	private String userName;
	
	// 성별
	private String gender;
	
	// 유저 생년월일
	@JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd" , timezone = "Asia/Seoul" )
	private LocalDate birthDate;
	
	// 로그인 여부
	private boolean isLogin;
	
	// 가입 날짜
	@JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss" , timezone = "Asia/Seoul" )
	private LocalDateTime createdDate;
	
	// 자기소개
	private String introduction;
	
	// 보유 골드
	private int point;
	
	
	public UserInfoJson(User user) {
		this.userId = user.getUserId();
		this.userName = user.getUserName();
		this.userType = user.getUserType().getTypeName();
		this.gender = user.getGender();
		this.birthDate = user.getBirthDate();
		this.createdDate = user.getCreatedDate();
		this.isLogin = user.isLogin();
		this.point = user.getPoint();
		this.introduction = user.getIntroduction();
	}

}
