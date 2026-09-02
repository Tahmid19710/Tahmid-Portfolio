package com.tahmid.portfolio.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({
        "id",
        "name",
        "title",
        "description",
        "location",
        "email",
        "github",
        "linkedin",
        "profileImage",
        "cvLink"
})
@Entity
@Data
public class PersonalInfo {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;

    private String title;

    private String description;

    private String location;

    private String email;

    private String github;

    private String linkedin;

    private String profileImage;

    private String cvLink;

}