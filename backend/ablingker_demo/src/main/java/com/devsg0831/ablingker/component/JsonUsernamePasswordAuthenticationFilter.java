package com.devsg0831.ablingker.component;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.StreamUtils;

import com.devsg0831.ablingker.jsonDto.LoginParams;
import com.fasterxml.jackson.databind.ObjectMapper;


public class JsonUsernamePasswordAuthenticationFilter  extends AbstractAuthenticationProcessingFilter  {
	
	// /login/oauth2/ + ????? 로 오는 요청을 처리할 것이다
	private static final String DEFAULT_LOGIN_REQUEST_URL = "/api/login";
	
	//HTTP 메서드의 방식은 POST 이다.
	private static final String HTTP_METHOD = "POST";
	
	//json 타입의 데이터로만 로그인을 진행한다.
	private static final String CONTENT_TYPE = "application/json";
	
	//=>   /api/login 의 요청에, POST로 온 요청에 매칭된다.
	private static final AntPathRequestMatcher DEFAULT_LOGIN_PATH_REQUEST_MATCHER = new AntPathRequestMatcher(DEFAULT_LOGIN_REQUEST_URL, HTTP_METHOD);

	// json 파싱
	private final ObjectMapper objectMapper;

	public JsonUsernamePasswordAuthenticationFilter(ObjectMapper objectMapper,
			AuthenticationSuccessHandler authenticationSuccessHandler, // 로그인 성공 시 처리할 핸들러
			AuthenticationFailureHandler authenticationFailureHandler // 로그인 실패 시 처리할 핸들러
			) {
		// 위에서 설정한  /oauth2/login/* 의 요청에, GET으로 온 요청을 처리하기 위해 설정한다.
		super(DEFAULT_LOGIN_PATH_REQUEST_MATCHER);

		this.objectMapper = objectMapper;
		setAuthenticationSuccessHandler(authenticationSuccessHandler);
		setAuthenticationFailureHandler(authenticationFailureHandler);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
		
		LoginParams loginParams;
		String username = null;
		String password = null;

		if (request.getContentType() == null || !request.getContentType().equals(CONTENT_TYPE)) {
			throw new AuthenticationServiceException("Authentication Content-Type not supported: " + request.getContentType());
		}
		

		String inputStreamToString = StreamUtils.copyToString(request.getInputStream(), StandardCharsets.UTF_8);
		if ( ! inputStreamToString .equals("") ) {
			System.out.println("inputStream of login: " + inputStreamToString);
			loginParams = objectMapper.readValue(inputStreamToString, LoginParams.class);
			username = loginParams.getUserId();
			password = loginParams.getPassword();
		}
		
		if (username == null || password == null) {
			throw new AuthenticationServiceException("DATA IS MISS");
		}

		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
		// Allow subclasses to set the "details" property
		setDetails(request, authRequest);
		return this.getAuthenticationManager().authenticate(authRequest);
	}

	protected void setDetails(HttpServletRequest request, UsernamePasswordAuthenticationToken authRequest) {
		authRequest.setDetails(this.authenticationDetailsSource.buildDetails(request));
	}
}
