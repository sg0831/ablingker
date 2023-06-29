package com.devsg0831.ablingker.dto;


import java.util.ArrayList;
import java.util.Collection;
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
		Collection<GrantedAuthority> authorities = new  ArrayList<>();
		
		String userType = user.getUserType().getTypeName();
		if (userType.equals( "spt" ) || userType.equals( "cli" )) {
			authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
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
