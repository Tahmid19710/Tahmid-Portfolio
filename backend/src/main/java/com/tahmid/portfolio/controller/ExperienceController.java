package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.Experience;
import com.tahmid.portfolio.repository.ExperienceRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/experience")
@CrossOrigin
public class ExperienceController {


    private final ExperienceRepository repository;



    public ExperienceController(ExperienceRepository repository){

        this.repository = repository;

    }



    @GetMapping
    public List<Experience> getExperience(){

        return repository.findAll();

    }



    @PostMapping
    public List<Experience> addExperience(
            @RequestBody List<Experience> experiences
    ){

        return repository.saveAll(experiences);

    }



    @DeleteMapping
    public ResponseEntity<String> deleteExperience(){

        repository.deleteAll();

        return ResponseEntity.ok("All experience deleted");

    }


}