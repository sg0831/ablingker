package com.devsg0831.ablingker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsg0831.ablingker.dto.MatchingRecord;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.MatchingInfoJson;
import com.devsg0831.ablingker.jsonDto.MatchingRequestParams;
import com.devsg0831.ablingker.service.MatchingService;
import com.devsg0831.ablingker.service.UserAuthenticationService;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/matching")
@RequiredArgsConstructor
public class MatchingController {

	private final MatchingService matchingService;
	private final UserAuthenticationService userAuthenticationService;
	
	
	@PostMapping("/")
	public ResponseEntity<MatchingInfoJson> createMatching(@RequestBody MatchingRequestParams matchingRequestParams) {
		MatchingRecord newMatchingRecord = matchingService.createMatchingRecord(matchingRequestParams);
		if (newMatchingRecord != null) {
			return new ResponseEntity<>( new MatchingInfoJson(newMatchingRecord), HttpStatus.CREATED);
		}
		return new ResponseEntity<>( HttpStatus.BAD_REQUEST );
	}
	
	
	@ApiOperation(
			value = "특정 매칭 기록 정보 조회",
			notes = "매칭 요청한 클라이언트 또는 매칭된 서포터 본인만 조회할 수 있음")
	@ApiImplicitParam(name = "id", value = "matchingRecordId", required = true, dataType = "int", paramType = "path", defaultValue = "1")
	@GetMapping("/{id}")
	public ResponseEntity<MatchingInfoJson> getMatchingById(@PathVariable("id") int id) {
		User loginUser = userAuthenticationService.getAuthenticatedUser();
		MatchingRecord findMatchingRecord = matchingService.getMatchingRecordById(id);
		if (loginUser != null && findMatchingRecord != null) {
			String loginUserId = loginUser.getUserId();
			User matchingClientUser = findMatchingRecord.getClientUser();
			User matchingSupporterUser = findMatchingRecord.getSupporterUser();
			
			// 현재 로그인 된 유저가 요청한 매칭 정보의 클라이언트 또는 서포터와 동일한지 확인
			if (matchingClientUser != null  &&  loginUserId .equals( matchingClientUser.getUserId() ) 
					||  matchingSupporterUser != null  &&  loginUserId .equals(matchingSupporterUser.getUserId()) ) {
				return new ResponseEntity<>(new MatchingInfoJson(findMatchingRecord), HttpStatus.OK);
			}
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

}
