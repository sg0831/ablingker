package com.devsg0831.ablingker.jsonDto;

import java.time.LocalDate;
import lombok.Data;


@Data
public class SignUpParams {

	private String userId;
	private String password;
	private String userType;
	private String userName;
	private String gender;
	private LocalDate birthDate;
	
}
