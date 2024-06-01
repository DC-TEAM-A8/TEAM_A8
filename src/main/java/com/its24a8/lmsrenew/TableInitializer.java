package com.its24a8.lmsrenew;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.its24a8.lmsrenew.data.AmpmType;
import com.its24a8.lmsrenew.data.AttendanceRepository;
import com.its24a8.lmsrenew.data.Company;
import com.its24a8.lmsrenew.data.CompanyRepository;
import com.its24a8.lmsrenew.data.ConferenceLinkType;
import com.its24a8.lmsrenew.data.DailyReport;
import com.its24a8.lmsrenew.data.DailyReportRepository;
import com.its24a8.lmsrenew.data.FeedBackRepository;
import com.its24a8.lmsrenew.data.Lesson;
import com.its24a8.lmsrenew.data.LessonRepository;
import com.its24a8.lmsrenew.data.Section;
import com.its24a8.lmsrenew.data.SectionRepository;
import com.its24a8.lmsrenew.data.StudentClass;
import com.its24a8.lmsrenew.data.StudentClassRepository;
import com.its24a8.lmsrenew.data.TestPreference;
import com.its24a8.lmsrenew.data.TestPreferenceRepository;
import com.its24a8.lmsrenew.data.TestProblem;
import com.its24a8.lmsrenew.data.TestProblemRepository;
import com.its24a8.lmsrenew.data.TestResultRepository;
import com.its24a8.lmsrenew.data.TestType;
import com.its24a8.lmsrenew.data.Type;
import com.its24a8.lmsrenew.data.User;
import com.its24a8.lmsrenew.data.UserRepository;

@Service
public class TableInitializer {
	@Autowired
	AttendanceRepository attendrep;
	@Autowired
	StudentClassRepository stuclassrep;
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
	@Autowired
	SectionRepository secrep;
	
	static private String LINK = "https://us06web.zoom.us/j/81025097888";
	static private String[] SECTIONS = {"Java","JavaScript","HTML/CSS","データベース","ITリテラシー","ビジネスマナー","React"};
	static private boolean[] ANSWER = {true,false,false,false};
	
	public List<Company> companyInit(){
		LocalDate start = LocalDate.of(2024, 4, 1);
		LocalDate end = LocalDate.of(2024, 5,31);
		List<Company> list = Arrays.asList(
				new Company(start,end,"ドリームキャリア",LINK),
				new Company(start,end,"会社B",LINK),
				new Company(start,end,"会社C",LINK),
				new Company(start,end,"講師会社",LINK)
				);
		companyrep.saveAll(list);
		return companyrep.findAll();
	}
	
	public List<StudentClass> classInit(List<Company> companies){
		List<StudentClass> list = Arrays.asList(
				new StudentClass("ドリームキャリアA",LINK,companies.get(0)),
				new StudentClass("ドリームキャリアB",LINK,companies.get(0)),
				new StudentClass("講師クラス",LINK,companies.get(0))
				);
		stuclassrep.saveAll(list);
		return stuclassrep.findAll();
	}
	
	public List<User> userInit(List<StudentClass> classes){
		List<User> list = Arrays.asList(
				new User("田中太郎","password!",Type.STUDENT,classes.get(0)),
				new User("鈴木大輔","password!",Type.STUDENT,classes.get(0)),
				new User("田中健太郎","password!",Type.STUDENT,classes.get(0)),
				new User("山田雄太","password!",Type.STUDENT,classes.get(0)),
				new User("佐藤隆之","password!",Type.STUDENT,classes.get(0)),
				new User("鈴木花子","password!",Type.STUDENT,classes.get(1)),
				new User("伊藤美和子","password!",Type.STUDENT,classes.get(1)),
				new User("中村真理子","password!",Type.STUDENT,classes.get(1)),
				new User("木村千鶴","password!",Type.STUDENT,classes.get(1)),
				new User("佐々木亜美","password!",Type.STUDENT,classes.get(1)),
				new User("中田義彦","password!",Type.INSTRUCTOR,classes.get(2)),
				new User("小山はる","password!",Type.INSTRUCTOR,classes.get(2))
				);
		userrep.saveAll(list);
		return userrep.findAll();
	}
	
	public List<Lesson> lessonInit(List<User> users, List<StudentClass> classes, List<Section> sections){
		List<Lesson> list = new ArrayList<>();
		for(int i=0;i<31;i++) {
			LocalDate day = LocalDate.of(2024,5,i+1);
			list.add(new Lesson(classes.get(0),day,users.get(10),AmpmType.AM,ConferenceLinkType.Company,sections.get(6)));
			list.add(new Lesson(classes.get(0),day,users.get(11),AmpmType.PM,ConferenceLinkType.Company,sections.get(0)));
		}
		lessonrep.saveAll(list);
		return lessonrep.findAll();
	}
	
	public List<DailyReport> dailyReportInit(List<User> users){
		List<DailyReport> list = new ArrayList<>();
		

		for(int i=0;i<30;i++) {
			LocalDateTime day = LocalDateTime.of(2024, 4, i+1, 0, i+1);
			for(int j=0;j<3;j++) {
				DailyReport dr = new DailyReport(users.get(j),"日報タイトル","日報の内容です日報の内容です日報の内容です",day);
				list.add(dr);
			}
		}
		
		dailyrep.saveAll(list);
		return dailyrep.findAll();
	}
	
	public List<TestProblem> testproInit(List<TestPreference> testpres,List<Section> sections){
		
		List<TestProblem> list = new ArrayList<>();
		for(int j=0;j<sections.size();j++) {
			for(int i=0;i<30;i++) {
				TestProblem test = new TestProblem((i/6 +1),(sections.get(j).getName()+(i+1)+"問目です").toString(),"選択肢1","選択肢2","選択肢3","選択肢4",ANSWER,testpres.get(i/6+(j*5)),sections.get(j));
				list.add(test);
			}
		}
		
		testprorep.saveAll(list);
		return testprorep.findAll();
	}
	
	public List<TestPreference> testpreInit(List<Section> sections){
		List<TestPreference> list = new ArrayList<>();
		for(Section s:sections) {
			for(int i=0;i<6;i++) {
				list.add(new TestPreference(s,i+1,5,70,TestType.MINI));
			}
		}
		for(Section s:sections) {
			list.add(new TestPreference(s,1,20,70,TestType.FULL));
		}
		
		testprerep.saveAll(list);
		return testprerep.findAll();
	}
	
	public List<Section> sectionInit(){
		List<Section> list = new ArrayList<>();
		for(String s:SECTIONS) {
			list.add(new Section(s));
		}
		
		secrep.saveAll(list);
		return secrep.findAll();
	}

}