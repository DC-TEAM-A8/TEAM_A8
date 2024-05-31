package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "lesson")
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {
	public Lesson(long class_id, LocalDateTime date, long user_id, AmpmType ampm_type,
			ConferenceLinkType conference_link_type, String section_title, long test_id) {
		this.class_id = class_id;
		this.date = date;
		this.user_id = user_id;
		this.ampm_type = ampm_type;
		this.conference_link_type = conference_link_type;
		this.section_title = section_title;
		this.test_id = test_id;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private long class_id;

	private LocalDateTime date;

	private long user_id;

	@Enumerated(EnumType.STRING)
	private AmpmType ampm_type;

	@Enumerated(EnumType.STRING)
	private ConferenceLinkType conference_link_type;

	private String section_title;

	private long test_id;
}
