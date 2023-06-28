package com.devsg0831.ablingker.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.CustomUserDetails;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserAuthenticationService {
	
	private final UserRepository userRepository;
	
	public User getAuthenticatedUser() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Object principal = authentication.getPrincipal();
		CustomUserDetails userDetails = (CustomUserDetails)principal;
		String userId = userDetails.getUsername();
		
		return userRepository.findById(userId).orElse(null);
	}
}
