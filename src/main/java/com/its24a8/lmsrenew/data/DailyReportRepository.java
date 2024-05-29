package com.its24a8.lmsrenew.data;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyReportRepository extends JpaRepository<DailyReport, Long>{
	public List<DailyReport> findByUserAndPosted(User user,LocalDateTime posted);
	public Page<DailyReport> findAllByOrderById(Pageable pageable);
}
