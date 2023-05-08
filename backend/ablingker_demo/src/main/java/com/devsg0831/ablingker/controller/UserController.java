package com.devsg0831.ablingker.controller;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.AblingkerResponseDto;
import com.devsg0831.ablingker.jsonDto.LoginParams;
import com.devsg0831.ablingker.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserController {

	private final UserService userService;

	@GetMapping("/user")
	public ResponseEntity<AblingkerResponseDto> getAllUser() {
		AblingkerResponseDto data = new AblingkerResponseDto();
		data.setData( userService.getAllUser() );
		data.setList(true);
		return new ResponseEntity<AblingkerResponseDto>(data, HttpStatus.OK);
	}


	@PostMapping("/login")
	public ResponseEntity<AblingkerResponseDto> login(LoginParams loginParams) {
		AblingkerResponseDto data = new AblingkerResponseDto();
		User loginUser = userService.login(loginParams);
		
		// 로그인 성공
		if (loginUser != null) {
			data.setData( loginUser );
			data.setList(false);
			return new ResponseEntity<AblingkerResponseDto>(data, HttpStatus.OK);
		}
		
		// 로그인 실패
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	
	@PutMapping("/logout")
	public ResponseEntity<AblingkerResponseDto> logout(LoginParams loginParams) {
		AblingkerResponseDto data = new AblingkerResponseDto();
		
		// 날아온 유저 데이터의 유효성 검사
		if (userService.logout(loginParams)) {
			data.setList(false);
			return new ResponseEntity<AblingkerResponseDto>(data, HttpStatus.OK);
		}

		// 유저 정보가 정상적으로 날아오지 않은 경우
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
