package com.devsg0831.ablingker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.SignUpParams;
import com.devsg0831.ablingker.jsonDto.UserInfoJson;
import com.devsg0831.ablingker.service.UserAuthenticationService;
import com.devsg0831.ablingker.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor 
public class UserController {

	private final UserService userService;
	private final UserAuthenticationService userAuthenticationService;
	
	
	@PostMapping("/signUp")
	public ResponseEntity<String> createUser( @RequestBody SignUpParams signUpParams) {
		User newUser = userService.createUser(signUpParams);
		if (newUser != null) {
			return new ResponseEntity<>( newUser.getUserId(), HttpStatus.CREATED );
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	
	@GetMapping("/user/my")
	public ResponseEntity<UserInfoJson> getMyInfo() {
		User loginUser = userAuthenticationService.getAuthenticatedUser();
		
		if (loginUser != null) {
			return new ResponseEntity<>(
					new UserInfoJson(loginUser), HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
}
