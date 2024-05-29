package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;

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
@Table(name = "testresult")
public class TestResult {
    public TestResult(LocalDateTime solved_at, int elapsed, int score, User user, TestPreference testPreference) {
        super();
        this.solved_at = solved_at;
        this.elapsed = elapsed;
        this.score = score;
        this.user = user;
        this.testPreference = testPreference;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime solved_at;
    
    private int elapsed;
    
    private int score;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "test_preference_id")
    private TestPreference testPreference;
}

