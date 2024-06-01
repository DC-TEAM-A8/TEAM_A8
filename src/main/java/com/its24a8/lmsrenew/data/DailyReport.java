package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "daily_report")
public class DailyReport {
    public DailyReport(User user, String title, String content) {
        this.user = user;
        this.title = title;
        this.content = content;
    }
    
    public DailyReport(User user, String title, String content, LocalDateTime posted) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.posted = posted;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotBlank(message = "日報タイトルを入力してください")
    String title;

    @NotBlank(message = "日報本文を入力してください")
    String content;
    
    private LocalDateTime posted;
}
