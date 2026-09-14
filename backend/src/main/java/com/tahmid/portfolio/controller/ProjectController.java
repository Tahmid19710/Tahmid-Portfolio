package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.Project;
import com.tahmid.portfolio.entity.ProjectImage;
import com.tahmid.portfolio.repository.ProjectImageRepository;
import com.tahmid.portfolio.repository.ProjectRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/projects")
@CrossOrigin
public class ProjectController {


    private final ProjectRepository repository;

    private final ProjectImageRepository imageRepository;



    public ProjectController(
            ProjectRepository repository,
            ProjectImageRepository imageRepository
    ){

        this.repository = repository;
        this.imageRepository = imageRepository;

    }



    @GetMapping
    public List<Project> getProjects(){

        return repository.findAllByOrderByIdAsc();

    }



    @PostMapping
    public List<Project> addProjects(
            @RequestBody List<Project> projects
    ){

        return repository.saveAll(projects);

    }



    @DeleteMapping
    public ResponseEntity<String> deleteAllProjects(){

        repository.deleteAll();

        return ResponseEntity.ok("All projects deleted");

    }



    // Add single image
    @PostMapping("/{projectId}/images")
    public ProjectImage addImage(
            @PathVariable Long projectId,
            @RequestBody ProjectImage image
    ){

        Project project = repository
                .findById(projectId)
                .orElseThrow();


        image.setProject(project);


        return imageRepository.save(image);

    }




    // Add multiple images
    @PostMapping("/{projectId}/images/bulk")
    public List<ProjectImage> addImages(
            @PathVariable Long projectId,
            @RequestBody List<ProjectImage> images
    ){

        Project project = repository
                .findById(projectId)
                .orElseThrow();


        images.forEach(image -> {

            image.setProject(project);

        });


        return imageRepository.saveAll(images);

    }




    // Delete all images of a project
    @DeleteMapping("/{projectId}/images")
    public ResponseEntity<String> deleteProjectImages(
            @PathVariable Long projectId
    ){

        Project project = repository
                .findById(projectId)
                .orElseThrow();


        project.getImages().clear();

        repository.save(project);


        return ResponseEntity.ok("Project images deleted");

    }


}