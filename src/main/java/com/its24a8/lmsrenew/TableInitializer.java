package com.its24a8.lmsrenew;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.its24a8.lmsrenew.data.AttendanceRepository;
import com.its24a8.lmsrenew.data.Class;
import com.its24a8.lmsrenew.data.ClassRepository;
import com.its24a8.lmsrenew.data.Company;
import com.its24a8.lmsrenew.data.CompanyRepository;
import com.its24a8.lmsrenew.data.DailyReportRepository;
import com.its24a8.lmsrenew.data.FeedBackRepository;
import com.its24a8.lmsrenew.data.LessonRepository;
import com.its24a8.lmsrenew.data.TestPreferenceRepository;
import com.its24a8.lmsrenew.data.TestProblemRepository;
import com.its24a8.lmsrenew.data.TestResultRepository;
import com.its24a8.lmsrenew.data.Type;
import com.its24a8.lmsrenew.data.User;
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
	LessonRepository lessonrep;
	@Autowired
	TestPreferenceRepository testprerep;
	@Autowired
	TestProblemRepository testprorep;
	@Autowired
	TestResultRepository testresrep;
	@Autowired
	UserRepository userrep;
	
	static private String LINK = "https://us06web.zoom.us/j/81025097888";
	
	public List<Company> companyInit(){
		LocalDateTime start = LocalDateTime.of(2024, 4, 1, 0, 0);
		LocalDateTime end = LocalDateTime.of(2024, 5,31,0,0);
		List<Company> list = Arrays.asList(
				new Company(start,end,LINK),
				new Company(start,end,LINK),
				new Company(start,end,LINK)
				);
		companyrep.saveAll(list);
		return companyrep.findAll();
	}
	
	public List<Class> classInit(List<Company> companies){
		List<Class> list = Arrays.asList(
				new Class("ドリームキャリアA",LINK,companies.get(0)),
				new Class("ドリームキャリアB",LINK,companies.get(0))
				);
		classrep.saveAll(list);
		return classrep.findAll();
	}
	
	public List<User> userInit(List<Class> classes){
		List<User> list = Arrays.asList(
				new User("田中太郎",Type.STUDENT,classes.get(0)),
				new User("鈴木大輔",Type.STUDENT,classes.get(0)),
				new User("田中健太郎",Type.STUDENT,classes.get(0)),
				new User("山田雄太",Type.STUDENT,classes.get(0)),
				new User("佐藤隆之",Type.STUDENT,classes.get(0)),
				new User("鈴木花子",Type.STUDENT,classes.get(1)),
				new User("伊藤美和子",Type.STUDENT,classes.get(1)),
				new User("中村真理子",Type.STUDENT,classes.get(1)),
				new User("木村千鶴",Type.STUDENT,classes.get(1)),
				new User("佐々木亜美",Type.STUDENT,classes.get(1))
				);
		userrep.saveAll(list);
		return userrep.findAll();
	}
}