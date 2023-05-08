package com.devsg0831.ablingker;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.devsg0831.ablingker.controller.UserController;
import com.devsg0831.ablingker.jsonDto.LoginParams;
import com.devsg0831.ablingker.repository.UserRepository;
import com.devsg0831.ablingker.service.UserService;

@SpringBootTest
class AblingkerDemoApplicationTests {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserController userController;

	@Test
	void contextLoads() {
	}
	
	@Test
	void testGetAllUser() {
		System.out.println("get all user list from db: \n " + userRepository.findAll());
		System.out.println("get all user list from service: \n " + userService.getAllUser());
		System.out.println("get all user list from controller: \n " + userController.getAllUser());
	}
	
	@Test
	void testLoginAndLogout() {
		String userId = "test1";
		String password = "123455";
		LoginParams loginParams = new LoginParams();
		loginParams.setPassword(password);
		loginParams.setUserId(userId);
		System.out.println("login from service: " + userService.login(loginParams));
		System.out.println("logout from service: " + userService.logout(loginParams));
		System.out.println("logout from controller: " + userController.logout(loginParams));
	}

}
