package com.devsg0831.ablingker.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class User {

	// 유저 아이디
	@Id
	private String userId;
	
	// 비밀번호
	private String password;
	
	// 유저 실명
	private String userName;
	
	// 성별
	private String gender;
	
	// 유저 생년월일
	private LocalDate birthDate;
	
	// 유저 분류(장애/비장애 여부)
	private String userType;
	
	// 권환 레벨
	private int permissionLevel;
	
	// 로그인 여부
	private boolean isLogin;
	
	// 가입 날짜
	private LocalDateTime createdDate;
	
	// 자기소개
	private String introduction;
	
	// 보유 골드
	private int gold;
}
