package com.springboot.backend.springboot.repository;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springboot.backend.springboot.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
	
	List<Attendance> findByUserIdLongOrderByDateDesc(Long idLongUser);
	
	List<Attendance> findByDate(Date date);
	
	@Query("SELECT a FROM Attendance a WHERE a.userid=?1 AND MONTH(a.date)=?2 ORDER BY a.date DESC")
	List<Attendance> findforUserByMonth(Long userid, Integer month);
	
	@Query("SELECT a from Attendance a WHERE a.userid=?1 AND a.date=?2")
	List<Attendance> findforUserByDate(Long userid,Date date);
	
	@Query("SELECT a FROM Attendance a WHERE a.date=?1 AND a.intime!=NULL ORDER BY a.intime DESC")
	List<Attendance> findAttendanceforCheckin(Date date);
}
