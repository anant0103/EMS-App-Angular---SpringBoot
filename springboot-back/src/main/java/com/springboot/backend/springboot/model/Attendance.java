package com.springboot.backend.springboot.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="attendance")
public class Attendance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "date")
	@NotNull(message = "Date must not be NULL")
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Column(name = "intime")
	@Temporal(TemporalType.TIME)
	private Date intime;

	@Column(name = "outtime")
	@Temporal(TemporalType.TIME)
	private Date outtime;
	
	@ManyToOne(targetEntity = User.class,fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "user_idLong",insertable = false, updatable = false)
	@JsonIgnore
	private User user;
	
	@Column(name = "user_idLong")
	@NotNull(message = "UserId must not be NULL")
	private long userid;	
	
	public Attendance() {
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getIntime() {
		return intime;
	}

	public void setIntime(Date intime) {
		this.intime = intime;
	}

	public Date getOuttime() {
		return outtime;
	}

	public void setOuttime(Date outtime) {
		this.outtime = outtime;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public Attendance(Date date,Date intime, Date outtime, long userid) {
		this.date = date;
		this.intime = intime;
		this.outtime = outtime;
		this.userid = userid;
	}


}
