package com.its24a8.lmsrenew.data;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface TestResultRepository extends JpaRepository<TestResult, Long>{
	public List<TestResult> findByUserAndTestPreference(@Param("user") User user, @Param("testPreference") TestPreference testPreference);
	public Page<TestResult> findAllByOrderById(Pageable pageable);
}
