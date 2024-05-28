package com.its24a8.lmsrenew;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
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
		Type = type;
	}
	
	@Id
	@GeneratedValue
	private long id;
	private long class_id;
	
	@NotBlank(message = "Name cannot be empty")
    private String name;
	
	@Enumerated(EnumType.STRING)
	private Type Type;
}

