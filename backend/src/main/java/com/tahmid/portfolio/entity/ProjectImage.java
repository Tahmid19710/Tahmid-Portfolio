package com.tahmid.portfolio.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


@Entity
public class ProjectImage {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String imageName;



    @ManyToOne
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;



    public ProjectImage(){

    }



    public ProjectImage(String imageName, Project project){

        this.imageName = imageName;
        this.project = project;

    }



    public Long getId() {

        return id;

    }



    public void setId(Long id) {

        this.id = id;

    }



    public String getImageName() {

        return imageName;

    }



    public void setImageName(String imageName) {

        this.imageName = imageName;

    }



    public Project getProject() {

        return project;

    }



    public void setProject(Project project) {

        this.project = project;

    }


}