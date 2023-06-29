package com.devsg0831.ablingker.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MovingMatchingRecord {

	// 매칭 기록 아이디
	@Id
	@Column(name = "matching_record")
	private int id;
	
	@OneToOne
	@MapsId  // @Id로 설정한 컬럼 값으로 참조하는 객체를 자동 맵핑해줌
	@JoinColumn(name = "matching_record")
	private MatchingRecord matchingRecord;

	// 출발지 위도
	private float startLatitude;
	
	// 출발지 경도
	private float startLongitude;

	// 목적지 위도
	private float endLatitude;
	
	// 목적지 경도
	private float endLongitude;

	// 출발지 이름
	private String startName;

	// 목적지 이름
	private String endName;
	
	// 왕복 여부
	private boolean isRoundtrip;
}
