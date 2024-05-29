package com.its24a8.lmsrenew.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestPreferenceRepository extends JpaRepository<TestPreference, Long>{
	public List<TestPreference> findBySection(String section);
	public List<TestPreference> findBySectionAndIdx(String section,int idx);
	public List<TestPreference> findBySectionAndType(String section,TestType type);
	public List<TestPreference> findByType(TestType type);
}
