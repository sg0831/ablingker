package com.devsg0831.ablingker.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

// 서비스 종류를 저장하는 테이블
@Entity
@Data
public class ServiceInfo {

	// 서비스 이름
	@Id
	private String name;

	// 서비스의 대면/비대면 여부
	private boolean isOnline;

	// 기본 이용 값(기본 이용 단위와 세트)
	private int basicValue;

	// 기본 이용 단위(기본 거리, 기본 이용 시간 등)
	private String unitOfMeasure;

	// 기본 요금 금액
	private int basicPrice;

	// 상승값(상승 단위와 세트)
	private int advanceValue;

	// 상승 요금
	private int advancePrice;

	// 서비스 소개글
	private String discription;

}
