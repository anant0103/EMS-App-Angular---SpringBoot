package com.springboot.backend.springboot.controller;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.springboot.model.Attendance;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.services.AttendanceService;

@Validated
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/")
public class AttendanceController {
	
	@Autowired
	private AttendanceService attendanceService;
	
	// get attendance for particular user
	@GetMapping("/attendance/{id}")
	public List<Attendance> getAttendanceByUserId(@PathVariable("id")
	@Min(value = 0L, message = "Path Variable must be positive") Long id) {
		return attendanceService.getAttendanceByUser(id);
	}
	
	// get attendance for particular date
	@GetMapping("/attendance-date/{date}")
	public List<Attendance> getAttendanceByDate(@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		return attendanceService.getAttendanceByDate(date);
	}
	
	// add attendance
	@PostMapping("/attendance")
	public Attendance saveAttendance(@Valid @RequestBody Attendance attendance) {
		return attendanceService.addAttendance(attendance);
	}
	
	// get attendance for particular user for particular month
	@GetMapping("/attendance/{id}/{month}")
	public List<Attendance> getAttendanceforUserByMonth(@PathVariable("id")
	@Min(value = 0L, message = "Path Variable must be positive") Long id,
	@PathVariable("month") @Min(value = 1, message = "Month must between 1 to 12") 
	@Max(value = 12, message = "Month must between 1 to 12") Integer month) {
		return attendanceService.getAttendanceforUserByMonth(id, month);
	}
	
	// get attendance for particular user for particular day
	@GetMapping("/attendance-day/{id}/{date}")
	public List<Attendance> getAttendanceforUserByDate(@PathVariable("id")
	@Min(value = 0L, message = "Path Variable must be positive") Long id,
	@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		return attendanceService.findforUserByDate(id, date);
	}
	
	@GetMapping("/attendance-checkin/{date}")
	public List<Attendance> findAttendanceforCheckin(@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		return attendanceService.findAttendanceforCheckin(date);
	}

}
