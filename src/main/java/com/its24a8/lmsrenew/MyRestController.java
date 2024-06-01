package com.its24a8.lmsrenew;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRestController {
	
//	@Autowired
//	TestPreferenceRepository tpr;
//	
//	@GetMapping("/miniTest")
//	public List<Section> getSection(){
//		List<String> list = tpr.findSection();
//		List<Section> slist = new ArrayList<>();
//		for(String s:list) {
//			slist.add(new Section(s,tpr.findBySectionAndType(s, TestType.MINI).size()));
//		}
//		return slist;
//	}
//	
//	public class Section{
//		private String name;
//		private int volume;
//		public Section(String name,int volume) {
//			this.name = name;
//			this.volume = volume;
//		}
//		
//		public String getName() {
//			return this.name;
//		}
//		public int getVolume() {
//			return this.volume;
//		}
//	}
	
}
