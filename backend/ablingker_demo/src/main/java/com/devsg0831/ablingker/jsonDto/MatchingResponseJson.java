package com.devsg0831.ablingker.jsonDto;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class MatchingResponseJson {

	private Object data;
	private String message;
}
