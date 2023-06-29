package com.devsg0831.ablingker.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class MatchingStatus {

	// 상태 이름
	@Id
	private String statusName;
}
