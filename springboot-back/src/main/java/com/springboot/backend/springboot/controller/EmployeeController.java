package com.springboot.backend.springboot.controller;

import java.util.List;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.springboot.model.Attendance;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.services.AttendanceService;
import com.springboot.backend.springboot.services.UserService;

@Validated
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/")
public class EmployeeController {
	
	@Autowired
	private UserService userService;

	@GetMapping("/birthdays/{month}")
	public List<User> getBirthdayList(@PathVariable("month") 
	@Min(value = 1, message = "Month must be beetween 1 to 12")
	@Max(value = 12, message = "Month must be beetween 1 to 12") int id) {
		return userService.getBirthdays(id);
	}
	
	@GetMapping("/work-anniversary/{month}")
	public List<User> getWorkAnniversaryList(@PathVariable("month") 
	@Min(value = 1, message = "Month must be beetween 1 to 12")
	@Max(value = 12, message = "Month must be beetween 1 to 12") int id) {
		return userService.getWorkAnniversary(id);
	}
	

	
}
