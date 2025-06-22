package com.springboot.backend.springboot.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.PreRemove;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLong;

	@Column(unique = true)
	@NotBlank(message = "Email must not be NULL")
	@Email(message = "Must be a valid Email Address")
	private String email;

	@NotBlank(message = "Password must not be Blank")
	@Size(max = 120)
	private String password;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST,CascadeType.REFRESH})
	@JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<Role>();

	@NotBlank(message = "First Name must not be Blank")
	@Pattern(regexp = "^[a-zA-Z \\-\\']+", message = "First Name must be in Alphabaets")
	@Column(name = "fname")
	private String fname;

	@NotBlank(message = "Last Name must not be Blank")
	@Pattern(regexp = "^[a-zA-Z \\-\\']+", message = "Last Name must be in Alphabaets")
	@Column(name = "lname")
	private String lname;

	@NotBlank(message = "Gender must not be Blank")
	@Pattern(regexp = "FEMALE|MALE", message = "Gender must be MALE or FEMALE")
	@Column(name = "gender")
	private String gender;

	@Size(min = 20, message = "Adress length must be greater than 20")
	@NotBlank(message = "Address must not be Blank")
	@Column(name = "address")
	private String address;

	@Min(value = 1111111111, message = "Phone No length must be 100")
	@Digits(integer = 10, fraction = 0, message = "Phone No length must be 10")
	@Column(name = "phoneno")
	private long phoneno;

	@NotBlank(message = "Designation must not be Blank")
	@Pattern(regexp = "^[a-zA-Z \\-\\']+", message = "Designation must be in Alphabaets")
	@Column(name = "designation")
	private String designation;

	@NotNull(message = "Birth Date must not be NULL")
	@Temporal(TemporalType.DATE)
	@Column(name = "bdate")
	private Date bdate;

	@NotNull(message = "Join Date must not be NULL")
	@Temporal(TemporalType.DATE)
	@Column(name = "jdate")
	private Date jdate;

	public User() {
	}

	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public User(String email, String password, Set<Role> roles, String fname, String lname, String gender,
			String address, long phoneno, String designation, Date bdate, Date jdate) {
		super();
		this.email = email;
		this.password = password;
		this.roles = new HashSet<Role>();
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.address = address;
		this.phoneno = phoneno;
		this.designation = designation;
		this.bdate = bdate;
		this.jdate = jdate;
	}
	
	public void addRole(Role role) {
        this.roles.add(role);
    }
	
	@PreRemove
    public void removeRole() {
        for(Role r: roles) {
        	roles.remove(r);
        }
    }

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Date getBdate() {
		return bdate;
	}

	public void setBdate(Date bdate) {
		this.bdate = bdate;
	}

	public Date getJdate() {
		return jdate;
	}

	public void setJdate(Date jdate) {
		this.jdate = jdate;
	}

	public Long getIdLong() {
		return idLong;
	}

	public void setIdLong(Long idLong) {
		this.idLong = idLong;
	}
	
	

}
