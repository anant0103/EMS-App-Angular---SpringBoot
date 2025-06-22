package com.springboot.backend.springboot.CRUDtest;

import com.springboot.backend.springboot.model.ERole;
import com.springboot.backend.springboot.model.Role;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.assertj.core.api.Assertions;

import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.repository.RoleRepository;
import com.springboot.backend.springboot.repository.UserRepository;
import java.util.HashSet;
import java.util.Set;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserRepoTest {
	@Autowired
	private UserRepository employeeRepository;
        
        @Autowired
	private RoleRepository roleRepository;
	
	@Test
	@Order(1)
	@Rollback(value = false)
	public void saveUserTest() {
                Role rolw = new Role(ERole.ROLE_USER);
                roleRepository.save(rolw);
                Set<Role> set = new HashSet<>();
                set.add(rolw);
		User ems=new User("jj@gmail.com", "123456", set ,"Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		ems.setIdLong(100l);
		employeeRepository.save(ems);
		Assertions.assertThat(ems.getFname()).isEqualTo("Anant");
	}
	
	@Test
	@Order(2)
	@Rollback(value = false)
	public void getUserTest() {
		User ems=employeeRepository.findById(100L).get();
		Assertions.assertThat(ems.getIdLong()).isEqualTo(100L);
	}
	
	@Test
	@Order(3)
	@Rollback(value = false)
	public void getUserListTest() {
		List<User> emsUsers=employeeRepository.findAll();
		Assertions.assertThat(emsUsers.size()).isGreaterThan(0);
	}
	
	@Test
	@Order(4)
	@Rollback(value = false)
	public void updateUserTest() {
		User ems=employeeRepository.findById(100L).get();
		ems.setFname("NewName");
		User newemsUser=employeeRepository.save(ems);
		Assertions.assertThat(newemsUser.getFname()).isEqualTo("NewName");
	}
	
	@Test
	@Order(5)
	@Rollback(value = false)
	public void deleteUserTest() {
		User emsUser=employeeRepository.findById(100L).get();
		employeeRepository.delete(emsUser);
		User emsUser2=null;
		Optional<User> emOptional=employeeRepository.findById(100L);
		if(emOptional.isPresent()) {
			emsUser2=emOptional.get();
		}
		Assertions.assertThat(emsUser2).isNull();
	}

}
