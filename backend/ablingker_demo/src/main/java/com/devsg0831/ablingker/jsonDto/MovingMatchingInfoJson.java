package com.devsg0831.ablingker.jsonDto;

import com.devsg0831.ablingker.dto.MovingMatchingRecord;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovingMatchingInfoJson extends MatchingInfoJson {

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


	public MovingMatchingInfoJson(MovingMatchingRecord movingMatchingRecord) {
		super(movingMatchingRecord.getMatchingRecord());
		
		this.startLatitude = movingMatchingRecord.getStartLatitude();
		this.startLongitude = movingMatchingRecord.getStartLongitude();
		this.startName = movingMatchingRecord.getStartName();
		this.endLatitude = movingMatchingRecord.getEndLatitude();
		this.endLongitude = movingMatchingRecord.getEndLongitude();
		this.endName = movingMatchingRecord.getEndName();
		this.isRoundtrip = movingMatchingRecord.isRoundtrip();
			}

}
