package com.its24a8.lmsrenew;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.its24a8.lmsrenew.data.AttendanceRepository;
import com.its24a8.lmsrenew.data.ClassRepository;
import com.its24a8.lmsrenew.data.CompanyRepository;
import com.its24a8.lmsrenew.data.DailyReportRepository;
import com.its24a8.lmsrenew.data.FeedBackRepository;
import com.its24a8.lmsrenew.data.TestPreferenceRepository;
import com.its24a8.lmsrenew.data.TestProblemRepository;
import com.its24a8.lmsrenew.data.UserRepository;

@Service
public class TableInitializer {
	@Autowired
	AttendanceRepository attendrep;
	@Autowired
	ClassRepository classrep;
	@Autowired
	CompanyRepository companyrep;
	@Autowired
	DailyReportRepository dailyrep;
	@Autowired
	FeedBackRepository feedrep;
	@Autowired
	TestPreferenceRepository testprerep;
	@Autowired
	TestProblemRepository testprorep;
	@Autowired
	UserRepository userrep;
	
	
}