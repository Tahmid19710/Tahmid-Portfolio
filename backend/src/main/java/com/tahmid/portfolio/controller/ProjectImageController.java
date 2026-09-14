package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.repository.ProjectImageRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/project-images")
@CrossOrigin
public class ProjectImageController {


    private final ProjectImageRepository repository;


    public ProjectImageController(ProjectImageRepository repository){

        this.repository = repository;

    }



    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImage(
            @PathVariable Long id
    ){

        repository.deleteById(id);

        return ResponseEntity.ok("Image deleted successfully");

    }

}