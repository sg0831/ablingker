package com.devsg0831.ablingker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsg0831.ablingker.dto.User;


public interface UserRepository extends JpaRepository<User, String> {
	
}
