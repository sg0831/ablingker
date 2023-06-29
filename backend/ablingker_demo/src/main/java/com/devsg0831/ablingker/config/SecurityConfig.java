package com.devsg0831.ablingker.config;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.devsg0831.ablingker.component.JsonUsernamePasswordAuthenticationFilter;
import com.devsg0831.ablingker.component.LoginFailureHandler;
import com.devsg0831.ablingker.component.LoginSuccessHandler;
import com.devsg0831.ablingker.repository.UserRepository;
import com.devsg0831.ablingker.service.CustomLogoutHandler;
import com.devsg0831.ablingker.service.CustomUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

	private final ObjectMapper objectMapper;
	private final LoginSuccessHandler loginSuccessHandler;
	private final LoginFailureHandler loginFailureHandler;
	private final CustomLogoutHandler logoutHandler;
	private final UserRepository userRepository;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
		.httpBasic().disable()
		.csrf().disable()
		.formLogin().disable();

		http.authorizeHttpRequests()
		.antMatchers("/api/login", "/api/logout", "/api/signUp", "/v3/api-docs/**" ,"/swagger-ui/**", "/swagger-resources/**").permitAll()
		.antMatchers("/api/user/**").hasRole("USER")
		.antMatchers("/api/admin/**").hasRole("ADMIN")
		.anyRequest().authenticated()
		.and()
		.logout()
		.logoutUrl("/api/logout")
		.addLogoutHandler( logoutHandler )
		.logoutSuccessHandler( (request, response, authentication) -> response.setStatus(HttpServletResponse.SC_OK) )
		.invalidateHttpSession(true)
		.deleteCookies( "JSESSIONID" );

		http.addFilterBefore(jsonUsernamePasswordAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}

	@Bean
	public JsonUsernamePasswordAuthenticationFilter jsonUsernamePasswordAuthenticationFilter() {
		JsonUsernamePasswordAuthenticationFilter jsonUsernamePasswordAuthenticationFilter = new JsonUsernamePasswordAuthenticationFilter(objectMapper, loginSuccessHandler, loginFailureHandler);
		jsonUsernamePasswordAuthenticationFilter.setAuthenticationManager(authenticationManager());
		return jsonUsernamePasswordAuthenticationFilter;
	}

	@Bean
	public AuthenticationManager authenticationManager() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

		provider.setPasswordEncoder(passwordEncoder());
		provider.setUserDetailsService(
				new CustomUserDetailsService(userRepository) );

		return new ProviderManager(provider);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
//		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
		return new  BCryptPasswordEncoder();
	}

//	@ Bean 
//	public  WebSecurityCustomizer  configure () {
//		return  (web) -> web .ignoring () .antMatchers(
//				"/swagger-ui/index.html");
//	}
}