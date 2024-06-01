package com.its24a8.lmsrenew.data;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class TestToLessonId implements Serializable{
	@ManyToOne
	@JoinColumn(name = "test_preference_id")
	private TestPreference testPreference;
	
	@ManyToOne
	@JoinColumn(name = "lesson_id")
	private Lesson lesson;
}
