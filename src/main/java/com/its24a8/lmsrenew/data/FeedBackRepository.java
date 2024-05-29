package com.its24a8.lmsrenew.data;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface FeedBackRepository extends JpaRepository<FeedBack, Long>{
	public List<FeedBack> findByUserAndLesson(@Param("user") User user,Lesson lesson);
	public Page<FeedBack> findAllByOrderById(Pageable pageable);
}
