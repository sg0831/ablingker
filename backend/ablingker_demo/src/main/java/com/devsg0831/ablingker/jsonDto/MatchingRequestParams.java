package com.devsg0831.ablingker.jsonDto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;


@Data
public class MatchingRequestParams {
	@ApiModelProperty(example = "도보이동", value = "서비스 이름", required = true)
	private String serviceName;
	
	@ApiModelProperty(example = "false", value = "시간지정(예약) 여부", required = true)
	private boolean isReservation;
	
	@ApiModelProperty(example = "식당 이동지원", value = "상세 요청사항", required = false)
	private String discription;
	
}
