package com.its24a8.lmsrenew;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class FeedBack {
	public FeedBack(String content, int rating_1,  int rating_2, int rating_3, String comment) {
		super();
		this.content = content;
		this.rating_1 = rating_1;
		this.rating_2 = rating_2;
		this.rating_3 = rating_3;
		this.comment = comment;
	}
	
	@Id
	@GeneratedValue
	private long id;
	private long user_id;
	private long lesson_id;
	
	@NotBlank(message = "Name cannot be empty")
    private String content;

	@NotBlank(message = "Rating_1 cannot be empty")
    @Size(min = 1, max = 5, message = "Rating_1 must be between 1 and 5 evaluations")
    private int rating_1;

	@NotBlank(message = "Rating_2 cannot be empty")
    @Size(min = 1, max = 5, message = "Rating_2 must be between 1 and 5 evaluations")
    private int rating_2;
	
	@NotBlank(message = "Rating_3 cannot be empty")
    @Size(min = 1, max = 5, message = "Rating_3 must be between 1 and 5 evaluations")
    private int rating_3;
	
    @NotBlank(message = "comment cannot be empty")
    private String comment;
}
