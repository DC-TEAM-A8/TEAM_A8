package com.its24a8.lmsrenew.data;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
	public Page<Attendance> findAllByOrderById(Pageable pageable);

}
