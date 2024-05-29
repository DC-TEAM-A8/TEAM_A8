package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;

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
    public Company(LocalDateTime start_at, LocalDateTime end_at, String conference_link) {
        super();
        this.start_at = start_at;
        this.end_at = end_at;
        this.conference_link = conference_link;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime start_at;
    
    private LocalDateTime end_at;
    
    private String conference_link;
}
