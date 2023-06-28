package com.devsg0831.ablingker.jsonDto;

import java.time.LocalDateTime;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


@Data
public class MatchingRequestParams {
	@ApiModelProperty(example = "도보이동", value = "서비스 이름", required = true)
	private String serviceName;
	
	@ApiModelProperty(value = "시간지정(예약) 여부", required = true, example = "false")
	private boolean isReservation;
	
	@ApiModelProperty(value = "서비스 시작 시간(시간지정 하지 않는 경우 기본값 null)", required = false)
	private LocalDateTime serviceStartTime;
	
	@ApiModelProperty(value = "상세 요청사항", required = false)
	private String discription;
	
}
