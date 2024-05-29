package com.its24a8.lmsrenew.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "feedback")
public class FeedBack {

    public FeedBack(String content, int rating_1, int rating_2, int rating_3, String comment, User user, Lesson lesson) {
        super();
        this.content = content;
        this.rating_1 = rating_1;
        this.rating_2 = rating_2;
        this.rating_3 = rating_3;
        this.comment = comment;
        this.user = user;
        this.lesson = lesson;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = "Content cannot be empty")
    private String content;

    @Min(value = 1, message = "Rating_1 must be at least 1")
    @Max(value = 5, message = "Rating_1 must be at most 5")
    private int rating_1;

    @Min(value = 1, message = "Rating_2 must be at least 1")
    @Max(value = 5, message = "Rating_2 must be at most 5")
    private int rating_2;

    @Min(value = 1, message = "Rating_3 must be at least 1")
    @Max(value = 5, message = "Rating_3 must be at most 5")
    private int rating_3;

    @NotBlank(message = "Comment cannot be empty")
    private String comment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;
}

