package com.its24a8.lmsrenew.data;

import jakarta.persistence.Entity;
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
@Table(name = "test_problem")
public class TestProblem {
	public TestProblem(int idx, String content, String choice_1, String choice_2, String choice_3, String choice_4,
			boolean[] collect, TestPreference testpreference, Section section) {
		super();
		this.idx = idx;
		this.content = content;
		this.choice_1 = choice_1;
		this.choice_2 = choice_2;
		this.choice_3 = choice_3;
		this.choice_4 = choice_4;
		for(int i=0;i<this.collect.length;i++) {
			this.collect[i] = collect[i];
		}
		this.testPreference = testpreference;
		this.section = section;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private int idx;
	private String content;
	private String choice_1 = "";
	private String choice_2 = "";
	private String choice_3 = "";
	private String choice_4 = "";
	private boolean[] collect = new boolean[4];
	
    @ManyToOne
    @JoinColumn(name = "testpreference_id")
	private TestPreference testPreference;
    
    @ManyToOne
    @JoinColumn(name = "section_id")
	private Section section;

}
