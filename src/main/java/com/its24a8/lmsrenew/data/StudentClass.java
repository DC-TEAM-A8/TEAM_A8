package com.its24a8.lmsrenew.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "studentclass")
public class StudentClass {
    public StudentClass(String class_name, String conference_link, Company company) {
        super();
        this.class_name = class_name;
        this.conference_link = conference_link;
        this.company = company;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String class_name;
    
    private String conference_link;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
}
