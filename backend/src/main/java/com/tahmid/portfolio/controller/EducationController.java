package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.Education;
import com.tahmid.portfolio.repository.EducationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/education")
@CrossOrigin
public class EducationController {


    private final EducationRepository repository;


    public EducationController(EducationRepository repository){

        this.repository = repository;

    }



    @GetMapping
    public List<Education> getEducation(){

        return repository.findAll();

    }



    @PostMapping
    public List<Education> addEducation(
            @RequestBody List<Education> education
    ){

        return repository.saveAll(education);

    }



    @DeleteMapping
    public ResponseEntity<String> deleteEducation(){

        repository.deleteAll();

        return ResponseEntity.ok("All education deleted");

    }


}