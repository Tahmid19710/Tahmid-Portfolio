package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.Skill;
import com.tahmid.portfolio.repository.SkillRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;


@RestController
@RequestMapping("/api/skills")
@CrossOrigin
public class SkillController {


    private final SkillRepository repository;


    public SkillController(SkillRepository repository){

        this.repository = repository;

    }



    @GetMapping
    public List<Skill> getSkills(){

        return repository.findAll();

    }



    @PostMapping
    public List<Skill> addSkills(
            @RequestBody List<Skill> skills
    ){

        return repository.saveAll(skills);

    }
    @DeleteMapping
    public ResponseEntity<String> deleteAllSkills(){

        repository.deleteAll();

        return ResponseEntity.ok("All skills deleted");

    }


}