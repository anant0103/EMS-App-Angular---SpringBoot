package com.springboot.backend.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.repository.UserRepository;

@Service
@Transactional
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	public Optional<User> getUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}
	
	public Optional<User> getUserByIdlong(long id) {
		return userRepository.findById(id);
	}
	
	public User addUser(User user) {
		return userRepository.save(user);
	}
	
	public User updateUser(long id,User user) {
		user.setIdLong(id);
		return userRepository.save(user);
	}
	
	public void deleteUser(User user) {
		user.removeRole();
		userRepository.delete(user);
	}
	
	public List<User> getBirthdays(int month) {
		return userRepository.findBirthdays(month);
	}
	
	public List<User> getWorkAnniversary(int month) {
		return userRepository.findWorkAnniversary(month);
	}
	
}
