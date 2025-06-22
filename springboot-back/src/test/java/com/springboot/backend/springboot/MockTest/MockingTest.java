package com.springboot.backend.springboot.MockTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.annotation.Rollback;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Any;
import com.springboot.backend.springboot.model.Role;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.repository.UserRepository;
import java.util.HashSet;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;


@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
public class MockingTest {
	
	@Mock
	UserRepository userRepository;
	
	@Test
	public void saveUserTest() {
		User employee=new User("jj@gmail.com", "123456", new HashSet<Role>(), "Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		when(userRepository.save(any(User.class))).thenReturn(employee);	
		assertEquals(userRepository.save(employee).getFname() ,"Anant");
	}
	
	@Test
	public void getUserTest() {
		User employee=new User("jj@gmail.com", "123456",  new HashSet<Role>(), "Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		employee.setIdLong(100l);
		when(userRepository.findById(100l)).thenReturn(Optional.of(employee));
		assertEquals("Anant", userRepository.findById(100l).get().getFname());
	}
	
	@Test
	public void getUserListTest() {
		User employee=new User("jj@gmail.com", "123456",  new HashSet<Role>(), "Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		List<User> users = new ArrayList();
		users.add(employee);
		when(userRepository.findAll()).thenReturn(users);
		List<User> expected = userRepository.findAll();
		assertEquals(expected, users);
	}
	
	@Test
	public void updateUser() {
		User employee=new User("jj@gmail.com", "123456",  new HashSet<Role>(), "Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		employee.setIdLong(1L);
		when(userRepository.findById(1L)).thenReturn(Optional.of(employee));
		userRepository.findById(1L).get().setFname("Jay");
		userRepository.save(employee);
		verify(userRepository).save(employee);
		assertEquals(userRepository.findById(1L).get().getFname(), "Jay");
		
	}
	
	@Test
	public void deleteUser() {
		User employee=new User("jj@gmail.com", "123456",  new HashSet<Role>(), "Anant", "Doshi", "MALE", "A-302,TULSI APART,ENT, NEAR PARSHWANATH TOWNSHIP ROAD", 1234568790, "Programmer Analyst", new Date(), new Date());
		employee.setIdLong(1L);
		when(userRepository.findById(1L)).thenReturn(Optional.of(employee));
		userRepository.delete(employee);
		verify(userRepository).delete(employee);
	}

}
