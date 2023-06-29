package com.devsg0831.ablingker.service;

import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.MovingMatchingRecord;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.MovingMatchingRequestParams;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MatchingPaymentService {
	
	private final UserAuthenticationService userAuthenticationService;
	
	
	public boolean hasPoint(int point) {
		User loginUser = userAuthenticationService.getAuthenticatedUser();
		return ( loginUser.getPoint() >= point);
	}

	
	public int getEsstimatedPointOfMovingMatching(MovingMatchingRequestParams movingMatchingRequestParams) {
		// 추후 지도 API를 통해 출발지 위도&경도 ~ 목적지 위도&경도를 계산해 그 거리값을 구해올 예정
		// 임시로 1000으로 고정
		int price = 1000;
		return price;
	}
	
	
	public int getRealPaymentPointOfMovingMatching(MovingMatchingRecord movingMatchingRecord) {
		// 추후 실제 지불해야 할 금액을 계산하는 로직을 추가할 예정
		// 임시로 1000으로 고정
		int point = 1000;
		return point;
	}
	
	
	
}
