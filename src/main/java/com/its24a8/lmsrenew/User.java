package com.its24a8.lmsrenew;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="user")
public class User {
	public User(String name, Type type) {
		super();
		this.name = name;
		this.type = type;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long class_id;
	
	@NotBlank(message = "Name cannot be empty")
    private String name;
	
	@Enumerated(EnumType.STRING)
	private Type type;
}

