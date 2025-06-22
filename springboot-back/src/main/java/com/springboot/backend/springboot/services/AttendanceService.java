package com.springboot.backend.springboot.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.backend.springboot.model.Attendance;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.repository.AttendanceRepository;

@Service
@Transactional
public class AttendanceService {
	
	@Autowired
	AttendanceRepository attendanceRepository;
	
	public List<Attendance> getAttendanceByUser(Long id) {
		return attendanceRepository.findByUserIdLongOrderByDateDesc(id);
	}
	
	public Attendance addAttendance(Attendance attendance) {
		return attendanceRepository.save(attendance);
	}
	
	public List<Attendance> getAttendanceByDate(Date date) {
		return attendanceRepository.findByDate(date);
	}
	
	public List<Attendance> getAttendanceforUserByMonth(Long id, Integer month) {
		return attendanceRepository.findforUserByMonth(id, month);
	}
	
	public List<Attendance> findforUserByDate(Long id, Date date) {
		return attendanceRepository.findforUserByDate(id,date);	
	}
	
	public List<Attendance> findAttendanceforCheckin(Date date) {
		return attendanceRepository.findAttendanceforCheckin(date);
	}
	
}
