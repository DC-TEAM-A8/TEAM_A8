package com.its24a8.lmsrenew.data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class TestProblemCommandLineRunner implements CommandLineRunner{
	@Autowired
	TestProblemService service;
	@Override
	public void run(String... args) throws Exception {
		TestProblem tp1 = new TestProblem("Java",1,"問題文","回答１","回答2","回答3","回答4",new boolean[]{false,false,false,false});
		TestProblem tp2 = new TestProblem("Java",2,"問題文","回答１","回答2","回答3","回答4",new boolean[]{true,true,true,true});
		TestProblem tp3 = new TestProblem("Java",3,"問題文","回答１","回答2","回答3","回答4",new boolean[]{false,false,true,false});
		TestProblem tp4 = new TestProblem("javascript",1,"問題文","回答１","回答2","回答3","回答4",new boolean[]{true,false,false,false});
		TestProblem tp5 = new TestProblem("ITリテラシ",1,"問題文","回答１","回答2","回答3","回答4",new boolean[]{false,true,true,false});
		service.saveTestProblem(tp1);
		service.saveTestProblem(tp2);
		service.saveTestProblem(tp3);
		service.saveTestProblem(tp4);
		service.saveTestProblem(tp5);
		
		System.out.println(service.getTestProblemById(2));
		System.out.println(service.getTestProblemById(3));
		System.out.println(service.getTestProblemById(0));
	}
}
