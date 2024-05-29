package com.its24a8.lmsrenew;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.its24a8.lmsrenew.data.TestPreferenceRepository;

@Component
public class MyRunner implements CommandLineRunner{
	@Autowired
	TestPreferenceRepository tpr;

	@Override
	public void run(String... args) throws Exception {
		System.out.println("コマンドラインランナー始");
		
		System.out.println("コマンドラインランナー終");
	}

}
