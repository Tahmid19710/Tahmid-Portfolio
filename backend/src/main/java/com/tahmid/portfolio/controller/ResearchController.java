package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.Research;
import com.tahmid.portfolio.repository.ResearchRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/research")
@CrossOrigin
public class ResearchController {


    private final ResearchRepository repository;



    public ResearchController(ResearchRepository repository){

        this.repository = repository;

    }



    @GetMapping
    public List<Research> getResearch(){

        return repository.findAll();

    }




    @PostMapping
    public List<Research> addResearch(
            @RequestBody List<Research> researchList
    ){

        return repository.saveAll(researchList);

    }




    @DeleteMapping
    public ResponseEntity<String> deleteResearch(){

        repository.deleteAll();

        return ResponseEntity.ok("All research deleted");

    }


}