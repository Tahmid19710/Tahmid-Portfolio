package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.PersonalInfo;
import com.tahmid.portfolio.repository.PersonalInfoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/personal")
@CrossOrigin(origins = "*")
public class PersonalInfoController {


    private final PersonalInfoRepository repository;


    public PersonalInfoController(PersonalInfoRepository repository) {
        this.repository = repository;
    }


    @GetMapping
    public PersonalInfo getPersonalInfo(){

        Optional<PersonalInfo> personalInfo = repository.findById(1L);

        return personalInfo.orElse(null);

    }



    @PostMapping
    public PersonalInfo addPersonalInfo(
            @RequestBody PersonalInfo personalInfo
    ){

        return repository.save(personalInfo);

    }


}