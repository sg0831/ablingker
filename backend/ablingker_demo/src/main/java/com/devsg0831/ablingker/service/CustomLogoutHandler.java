package com.devsg0831.ablingker.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomLogoutHandler implements LogoutHandler {
	
	private final UserRepository userRepository;
	private final UserAuthenticationService userAuthenticationService;

	@Override
	public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
		if (authentication != null && authentication.getDetails() != null) {
			User user = userAuthenticationService.getAuthenticatedUser();
			if (user != null) {
				user.setLogin(false);
				userRepository.save(user);
				response .setStatus (HttpServletResponse.SC_OK);
				System.out.println("로그아웃 핸들러 실행");
			}
		}
		
		response .setStatus (HttpServletResponse.SC_FORBIDDEN);
	}

}