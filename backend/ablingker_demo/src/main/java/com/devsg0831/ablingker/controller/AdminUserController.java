package com.devsg0831.ablingker.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/user")
@RequiredArgsConstructor
public class AdminUserController {

	private final UserService userService;


	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUser() {
		return new ResponseEntity<>(
				userService.getAllUser(), HttpStatus.OK);
	}
}
