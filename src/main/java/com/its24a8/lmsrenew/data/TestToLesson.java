package com.its24a8.lmsrenew.data;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "test_to_lesson")
public class TestToLesson {
	@EmbeddedId
	private TestToLessonId id;
}