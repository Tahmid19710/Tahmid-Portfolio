package com.tahmid.portfolio.repository;

import com.tahmid.portfolio.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface PersonalInfoRepository
        extends JpaRepository<PersonalInfo, Long> {


    Optional<PersonalInfo> findTopByOrderByIdDesc();


}