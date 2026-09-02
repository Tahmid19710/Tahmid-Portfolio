package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.PersonalInfo;
import com.tahmid.portfolio.repository.PersonalInfoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/personal")
@CrossOrigin
public class PersonalInfoController {


    private final PersonalInfoRepository repository;


    public PersonalInfoController(PersonalInfoRepository repository) {
        this.repository = repository;
    }


    @GetMapping
    public PersonalInfo getPersonalInfo(){

        return repository.findById(1L).get();

    }


    @PostMapping
    public PersonalInfo addPersonalInfo(
            @RequestBody PersonalInfo personalInfo
    ){

        return repository.save(personalInfo);

    }


}