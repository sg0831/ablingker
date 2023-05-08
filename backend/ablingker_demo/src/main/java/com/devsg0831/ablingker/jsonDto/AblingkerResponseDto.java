package com.devsg0831.ablingker.jsonDto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AblingkerResponseDto {

	// 데이터의 타입, 반환되는 json객체가 단일 객체인지 아니면 여러 객체가 배열로 묶여 잇는지 표시
	private boolean isList;
	
	// 실제 json 객체
	private Object data;
	
	// API통신 중 전달하고자 하는 메시지를 담을 수 있음
	private String message;
}
