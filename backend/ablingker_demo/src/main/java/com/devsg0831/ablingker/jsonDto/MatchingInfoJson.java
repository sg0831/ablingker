package com.devsg0831.ablingker.jsonDto;

import java.time.LocalDateTime;

import com.devsg0831.ablingker.dto.MatchingRecord;
import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;


@Data
public class MatchingInfoJson {

	// 매칭 아이디
	private int id;

	// 서비스 이름
	private String serviceName;
	
	// 시간지정(예약) 여부
	private boolean isReservation;

	// 클라이언트 아이디
	private String clientUserId;

	// 서포터 아이디
	private String supporterUserId;

	// 현재매칭 상태
	private String statusName;

	// 매칭 정보 생성일을 json datetime 형태로 직렬화
	@ JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss" , timezone = "Asia/Seoul" )
	private LocalDateTime created;

	// 서비스 시작 시간
	@ JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss" , timezone = "Asia/Seoul" )
	private LocalDateTime serviceStartTime;
	
	// 서비스 종료 시간
	@ JsonFormat (shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss" , timezone = "Asia/Seoul" )
	private LocalDateTime serviceEndTime;

	// 예상 지불 금액
	private int esstimatedPoint;
	
	// 상세 요청사항
	private String discription;
	

	public MatchingInfoJson(MatchingRecord matchingRecord) {
		this.id = matchingRecord.getId();
		this.isReservation = matchingRecord.isReservation();
		this.serviceName = matchingRecord.getServiceInfo().getName();
		this.serviceStartTime = matchingRecord.getServiceStartTime();
		this.serviceEndTime = matchingRecord.getServiceEndTime();
		this.statusName = matchingRecord.getStatus().getStatusName();
		this.clientUserId = matchingRecord.getClientUser().getUserId();
		this.created = matchingRecord.getCreated();
		this.discription = matchingRecord.getDiscription();
		this.esstimatedPoint = matchingRecord.getEsstimatedPoint();
	}
}
