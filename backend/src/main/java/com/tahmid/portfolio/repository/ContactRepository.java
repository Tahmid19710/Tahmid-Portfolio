package com.tahmid.portfolio.repository;


import com.tahmid.portfolio.entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContactRepository extends JpaRepository<ContactMessage, Long> {


}