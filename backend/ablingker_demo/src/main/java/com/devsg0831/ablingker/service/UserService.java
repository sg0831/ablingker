package com.devsg0831.ablingker.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.LoginParams;
import com.devsg0831.ablingker.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;

	public List<User> getAllUser() {
		List<User> queryResult = userRepository.findAll();
		return queryResult;
	}


	public User login(LoginParams loginParams) {
		User loginUser = userRepository.findById(loginParams.getUserId()).orElse(null);

		if ( loginUser != null && loginUser.getPassword().equals(loginParams.getPassword()) ) {
			loginUser.setLogin(true);
			return loginUser;
		}
		return null;
	}
	
	
	public boolean logout(LoginParams loginParams) {
		User loginUser = this.login(loginParams);
		if (loginUser != null) {
			loginUser.setLogin(false);
			return true;
		}
		return false;
	}
}
