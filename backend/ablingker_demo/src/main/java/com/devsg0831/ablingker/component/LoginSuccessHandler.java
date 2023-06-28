package com.devsg0831.ablingker.component;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.repository.UserRepository;
import com.devsg0831.ablingker.service.UserAuthenticationService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class LoginSuccessHandler implements AuthenticationSuccessHandler {
	
	private final UserRepository userRepository;
	private final UserAuthenticationService userAuthenticationService;
	
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		User user = userAuthenticationService.getAuthenticatedUser();
		if (user != null) {
			user.setLogin(true);
			userRepository.save(user);
		}
		System.out.println("login success!  userId: " + user.getUserId());
		
		response.setStatus(200);
	}
}
