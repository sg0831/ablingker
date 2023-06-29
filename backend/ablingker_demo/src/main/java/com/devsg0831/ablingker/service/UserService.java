package com.devsg0831.ablingker.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.dto.UserType;
import com.devsg0831.ablingker.jsonDto.SignUpParams;
import com.devsg0831.ablingker.repository.UserRepository;
import com.devsg0831.ablingker.repository.UserTypeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final UserTypeRepository userTypeRepository;
	private final PasswordEncoder passwordEncoder;


	private boolean validationDuplicatedUserId(User newUser) {
		// 아이디 중복 확인
		return !(  userRepository.existsById(newUser.getUserId()) );
	}

	private UserType getValidatedUserType(String userType) {
		UserType result = userTypeRepository.findById(userType).orElse(null);
		return result;
	}

	private boolean validationUserType(User newUser) {
		return ( newUser.getUserType() != null );
	}


	public User createUser(SignUpParams signUpParams) {
		if (signUpParams != null) {
			User newUser = User.builder()
					.userId( signUpParams.getUserId() )
					.password( passwordEncoder.encode( signUpParams.getPassword() ) )
					.userName( signUpParams.getUserName() )
					.userType( this.getValidatedUserType(signUpParams.getUserType()) )
					.birthDate( signUpParams.getBirthDate() )  .gender( signUpParams.getGender() )  .createdDate( LocalDateTime.now() )
					.introduction("")
					.build();

			if ( this.validationDuplicatedUserId(newUser) && this.validationUserType(newUser) ) {
				userRepository.save(newUser);
				return newUser;
			}
		}
		return null;
	}


	public List<User> getAllUser() {
		List<User> queryResult = userRepository.findAll();
		return queryResult;
	}


	public User getOneUser(String userId) {
		User findUser = userRepository.findById(userId).orElse(null);
		return findUser;
	}


}
