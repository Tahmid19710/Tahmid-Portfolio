package com.tahmid.portfolio.controller;


import com.tahmid.portfolio.entity.ContactMessage;
import com.tahmid.portfolio.repository.ContactRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {


    private final ContactRepository repository;


    public ContactController(ContactRepository repository){

        System.out.println("CONTACT CONTROLLER LOADED");
        this.repository = repository;

    }



    @PostMapping
    public ContactMessage sendMessage(
            @RequestBody ContactMessage message
    ){

        return repository.save(message);

    }



    @GetMapping
    public List<ContactMessage> getMessages(){

        return repository.findAll();

    }


}