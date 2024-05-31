package com.its24a8.lmsrenew.data;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	public Lesson(StudentClass studentClass, LocalDate date, User user, AmpmType ampm_type,
			ConferenceLinkType conference_link_type, String section_title, TestPreference testPreference) {
		this.studentClass = studentClass;
		this.date = date;
		this.user = user;
		this.ampm_type = ampm_type;
		this.conference_link_type = conference_link_type;
		this.section_title = section_title;
		this.testPreference = testPreference;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

    @ManyToOne
    @JoinColumn(name = "class_id")
	private StudentClass studentClass;

	private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id")
	private User user;

	@Enumerated(EnumType.STRING)
	private AmpmType ampm_type;

	@Enumerated(EnumType.STRING)
	private ConferenceLinkType conference_link_type;

	private String section_title;

    @ManyToOne
    @JoinColumn(name = "testPreference_id")
	private TestPreference testPreference;
}
