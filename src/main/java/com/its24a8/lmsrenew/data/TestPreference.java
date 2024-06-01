package com.its24a8.lmsrenew.data;

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
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "test_preference")
public class TestPreference {
	public TestPreference(Section section, int idx, int volume, int threshold, TestType type) {
		super();
		this.section = section;
		this.idx = idx;
		this.volume = volume;
		this.threshold = threshold;
		this.type = type;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private int idx = 0;
	private int volume = 0;
	private int threshold = 0;
	
	@Enumerated(EnumType.STRING)
	private TestType type;
	
	@ManyToOne
	@JoinColumn(name = "section_id")
	private Section section;
}
