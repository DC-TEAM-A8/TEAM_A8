package com.its24a8.lmsrenew.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class DailyReport {
    public DailyReport(long user_id, String title, String content) {
        this.user_id = user_id;
        this.title = title;
        this.content = content;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    long user_id;

    @NotBlank(message = "日報タイトルを入力してください")
    String title;

    @NotBlank(message = "日報本文を入力してください")
    String content;
}
