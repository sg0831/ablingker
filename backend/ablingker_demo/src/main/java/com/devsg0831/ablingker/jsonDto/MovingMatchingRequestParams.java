package com.devsg0831.ablingker.jsonDto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovingMatchingRequestParams extends MatchingRequestParams {

	@ApiModelProperty(example = "1.11", value = "출발지 위도", required = true)
	private float startLatitude;
	
	@ApiModelProperty(example = "1.12", value = "출발지 경도", required = true)
	private float startLongitude;

	@ApiModelProperty(example = "1.11", value = "목적지 위도", required = true)
	private float endLatitude;
	
	@ApiModelProperty(example = "1.12", value = "목적지 경도", required = true)
	private float endLongitude;

	@ApiModelProperty(example = "대구대 정문", value = "출발지 이름", required = false)
	private String startName;

	@ApiModelProperty(example = "웅지관", value = "목적지 이름", required = false)
	private String endName;
	
	@ApiModelProperty(example = "false", value = "왕복 여부", required = true)
	private boolean isRoundtrip;
	
}
