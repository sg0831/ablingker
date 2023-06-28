package com.devsg0831.ablingker.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devsg0831.ablingker.dto.MatchingRecord;
import com.devsg0831.ablingker.dto.User;
import com.devsg0831.ablingker.jsonDto.MatchingRequestParams;
import com.devsg0831.ablingker.repository.MatchingRecordRepository;
import com.devsg0831.ablingker.repository.MatchingStatusRepository;
import com.devsg0831.ablingker.repository.ServiceInfoRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MatchingService {

	private final ServiceInfoRepository serviceInfoRepository;
	private final MatchingStatusRepository matchingStatusRepository;
	private final MatchingRecordRepository matchingRecordRepository;
	
	private final UserAuthenticationService userAuthenticationService;
	
	
	public List<MatchingRecord> getAllMatchingRecord() {
		return matchingRecordRepository.findAll();
	}
	
	
	public MatchingRecord createMatchingRecord(MatchingRequestParams matchingRequestParams) {
		Integer result = 0;
		User loginUser = userAuthenticationService.getAuthenticatedUser();
		if ( loginUser != null) {
			MatchingRecord newMatchingRecord = MatchingRecord.builder()
					.clientUser(loginUser)
					.isReservation( matchingRequestParams.isReservation() )
					.serviceInfo( serviceInfoRepository.findById( matchingRequestParams.getServiceName()  ).orElse(null) )
					.status( matchingStatusRepository.findById( matchingRequestParams.isReservation() ? "reservation" : "waiting" ).orElse(null) )
					.serviceStartTime( matchingRequestParams.getServiceStartTime() )
					.discription( matchingRequestParams.getDiscription() )
					.created( LocalDateTime.now() )
					.build();
			
			result = matchingRecordRepository.save(newMatchingRecord).getId();
		}
		return matchingRecordRepository.findById(result).orElse(null);
	}
	
	
	public MatchingRecord getMatchingRecordById(int id) {
		return matchingRecordRepository.findById(id).orElse(null);
	}
}
