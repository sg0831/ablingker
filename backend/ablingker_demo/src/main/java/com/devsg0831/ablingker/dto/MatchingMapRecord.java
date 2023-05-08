package com.devsg0831.ablingker.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class MatchingMapRecord {

	// 매칭 맵 아이디
	@Id
	@GeneratedValue
	private int id;

	// 매칭 기록 아이디
	@ManyToOne
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
	
	// 거리(미터)
	private int distance;
}
