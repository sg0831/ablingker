package com.devsg0831.ablingker.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.CustomUserDetails;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
	
	private final UserRepository userRepository;

	@Override 
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository .findById( username ) .orElseThrow(
				() -> new UsernameNotFoundException("계정 인증 실패, 일치하는 계정을 찾을 수 없음") );
		return  new  CustomUserDetails( user );
	} 
}
