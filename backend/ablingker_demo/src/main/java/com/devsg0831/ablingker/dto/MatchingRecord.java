package com.devsg0831.ablingker.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class MatchingRecord {

	// 매칭 아이디
	@Id
	@GeneratedValue
	private int id;

	// 서비스 이름
	@ManyToOne
	private ServiceInfo serviceName;

	// 클라이언트 아이디
	@ManyToOne
	private User clientUser;

	// 서포터 아이디
	@ManyToOne
	private User supporterUser;

	// 현재매칭 상태
	@ManyToOne
	private MatchingStatus statusName;

	// 매칭 정보 생성일
	private LocalDateTime created;

	// 매칭 소요시간
	private LocalTime 	waiting_time;

	// 서비스 소요시간
	private LocalTime service_time;

	// 클라이언트로부터 받은 골드 금액
	private int clientGold;

	// 서포터에게 전달된 골드 금액
	private int supporterGold;
}
