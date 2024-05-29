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
