package com.its24a8.lmsrenew;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.its24a8.lmsrenew.data.Company;
import com.its24a8.lmsrenew.data.DailyReport;
import com.its24a8.lmsrenew.data.Lesson;
import com.its24a8.lmsrenew.data.StudentClass;
import com.its24a8.lmsrenew.data.TestPreference;
import com.its24a8.lmsrenew.data.TestPreferenceRepository;
import com.its24a8.lmsrenew.data.TestProblem;
import com.its24a8.lmsrenew.data.User;

@Component
public class MyRunner implements CommandLineRunner{
	@Autowired
	TableInitializer init;
	
	@Autowired
	TestPreferenceRepository tpr;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("コマンドラインランナー始");
		List<Company> listCompany = init.companyInit();
		List<StudentClass> listStudentClass = init.classInit(listCompany);
		List<User> listUser = init.userInit(listStudentClass);
		List<DailyReport> listdaily = init.dailyReportInit(listUser);
		List<TestProblem> listTestProblem = init.testproInit();
		List<TestPreference> listTestPre = init.testpreInit();
		List<Lesson> listLesson = init.lessonInit(listUser,listStudentClass,listTestPre);
		
		System.out.println("コマンドラインランナー終");
	}

}
