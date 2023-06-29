package com.devsg0831.ablingker.dto;


import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@Getter
@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final User user;

	@Override 
	public  Collection < ?  extends  GrantedAuthority >  getAuthorities() {
		// if문 사용을 줄이기 위해 해시맵 사용
		Map<String, String> userTypeMap = new HashMap<>();
		userTypeMap.put("spt", "ROLE_SUPPORTER");
		userTypeMap.put("cli", "ROLE_CLIENT");
		
		Collection<GrantedAuthority> authorities = new  ArrayList<>();
		
		String userType = user.getUserType().getTypeName();
		
		// 서포터와 클라이언트는 공통적으로 'ROLE_USER' 권한 획득, 추가로 유저 타입별 상세 권한도 획득
		if (userType.equals( "spt" ) || userType.equals( "cli" )) {
			authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
			authorities.add(new SimpleGrantedAuthority( userTypeMap.get(userType) ));
		} else if (userType.equals( "adm" )) {
			authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
			authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
		}
		return authorities;
	}

	@Override 
	public String getPassword() {
		return user.getPassword();
	}

	@Override 
	public String getUsername() {
		return user.getUserId();
	}

	@Override 
	public  boolean  isAccountNonExpired ( )  { 
		return  true ; 
	} 

	@Override 
	public  boolean  isAccountNonLocked ( )  { 
		return  true ; 
	} 

	@Override 
	public  boolean  isCredentialsNonExpired ( )  { 
		return  true ; 
	} 

	@Override 
	public  boolean  isEnabled ( )  { 
		return  true ; 
	} 
}
