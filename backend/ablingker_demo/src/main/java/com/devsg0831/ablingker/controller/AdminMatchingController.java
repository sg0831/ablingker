package com.devsg0831.ablingker.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsg0831.ablingker.dto.MatchingRecord;
import com.devsg0831.ablingker.jsonDto.MatchingInfoJson;
import com.devsg0831.ablingker.service.MatchingService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin/matching")
@RequiredArgsConstructor
public class AdminMatchingController {

	private final MatchingService matchingService;



	@ApiOperation(
			value = "모든 매칭 기록 조회(관리자용)",
			notes = "일반 사용자는 사용할 수 없고, 관리자 페MatSer이지에서만 사용 가능함")
	@GetMapping("/")
	public ResponseEntity<List<MatchingInfoJson>> getAllMatchingRecord() {
		List<MatchingInfoJson> matchingInfoList = new ArrayList<>();
		for (MatchingRecord matchingItem : matchingService.getAllMatchingRecord()) {
			matchingInfoList. add( new MatchingInfoJson(matchingItem) );
		}
		return new ResponseEntity<>( matchingInfoList, HttpStatus.OK );
	}
	
}
