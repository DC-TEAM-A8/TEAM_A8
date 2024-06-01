package com.its24a8.lmsrenew.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TestPreferenceRepository extends JpaRepository<TestPreference, Long>{
	public List<TestPreference> findByType(TestType type);
	
	@Query("SELECT DISTINCT section FROM TestPreference")
	public List<Section> findSection();
}
