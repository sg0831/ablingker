package com.devsg0831.ablingker.dto;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
@Builder
public class MatchingRecord {

	// 매칭 아이디
	@Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// 서비스 이름
	@ManyToOne
	@JoinColumn(name = "service_info")
	private ServiceInfo serviceInfo;
	
	// 시간지정(예약) 여부
	private boolean isReservation;

	// 클라이언트 아이디
	@ManyToOne
	@JoinColumn(name = "client_user" )
	private User clientUser;

	// 서포터 아이디
	@ManyToOne
	@JoinColumn(name = "supporter_user" )
	private User supporterUser;

	// 현재매칭 상태
	@ManyToOne
	@JoinColumn(name = "status" )
	private MatchingStatus status;

	// 매칭 정보 생성일
	private LocalDateTime created;

	// 서비스 시작 시간
	private LocalDateTime serviceStartTime;
	
	// 서비스 종료 시간
	private LocalDateTime serviceEndTime;

	// 예상 금액
	private int esstimatedPoint;

	// 실제 결제된 금액 
	private int paymentPoint;
	
	// 상세 요청사항
	private String discription;
	
	
	public MatchingRecord() {
		this.created = LocalDateTime.now();
	}
}
