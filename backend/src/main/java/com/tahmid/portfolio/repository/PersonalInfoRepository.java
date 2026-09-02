package com.tahmid.portfolio.repository;


import com.tahmid.portfolio.entity.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersonalInfoRepository extends JpaRepository<PersonalInfo, Long> {


}