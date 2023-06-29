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
import com.devsg0831.ablingker.dto.MovingMatchingRecord;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.MatchingInfoJson;
import com.devsg0831.ablingker.jsonDto.MatchingResponseJson;
import com.devsg0831.ablingker.jsonDto.MovingMatchingInfoJson;
import com.devsg0831.ablingker.jsonDto.MovingMatchingRequestParams;
import com.devsg0831.ablingker.service.MatchingPaymentService;
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
	private final MatchingPaymentService matchingPaymentService;
	private final UserAuthenticationService userAuthenticationService;
	
	private final MatchingResponseJson matchingResponseJson;


	@ApiOperation(
			value = "단순이동 매칭 요청",
			notes = "새로운 단순이동 매칭 요청을 보냄")
	@PostMapping("/moving")
	public ResponseEntity<MatchingResponseJson> createMovingMatching(@RequestBody MovingMatchingRequestParams movingMatchingRequestParams) {
		// 매칭 요청한 클라이언트가 예상 금액 만큼의 포인트를 소지했는지 확인
		int esstimatedPoint = matchingPaymentService.getEsstimatedPointOfMovingMatching(movingMatchingRequestParams);
		if ( matchingPaymentService.hasPoint(esstimatedPoint) ) {
			MovingMatchingRecord newMovingMatchingRecord = matchingService.createMovingMatchingRecord(movingMatchingRequestParams, esstimatedPoint);
			if (newMovingMatchingRecord != null) {
				matchingResponseJson.setData( new MovingMatchingInfoJson(newMovingMatchingRecord) );
				return new ResponseEntity<>(
						matchingResponseJson, HttpStatus.CREATED);
			}
		} else {
			// 잔여 포인트 부족이라는 메시지를 포함하여 프론트앤드로 전달
			matchingResponseJson.setMessage("insufficient point");
		}

		return new ResponseEntity<>(matchingResponseJson, HttpStatus.BAD_REQUEST );
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
