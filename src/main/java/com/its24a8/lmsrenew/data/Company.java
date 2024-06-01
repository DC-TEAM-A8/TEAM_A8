package com.its24a8.lmsrenew.data;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "company")
public class Company {
    public Company(LocalDate start_at, LocalDate end_at, String company_name, String conference_link) {
        super();
        this.start_at = start_at;
        this.end_at = end_at;
        this.company_name = company_name;
        this.conference_link = conference_link;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate start_at;
    
    private LocalDate end_at;
    
    private String company_name;
    
    private String conference_link;
}
