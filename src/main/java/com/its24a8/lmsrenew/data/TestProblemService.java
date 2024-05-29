package com.its24a8.lmsrenew.data;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestProblemService {
	@Autowired
	TestProblemRepository testProblemRepository;
	
	public Optional<TestProblem> getTestProblemById(long id) {
		return testProblemRepository.findById(id);
	}
	
	public void saveTestProblem(TestProblem testProblem) {
		testProblemRepository.save(testProblem);
	}
	
	
	
}
