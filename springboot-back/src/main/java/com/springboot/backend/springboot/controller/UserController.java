package com.springboot.backend.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.springboot.exception.ResourceNotFoundException;
import com.springboot.backend.springboot.model.User;
import com.springboot.backend.springboot.services.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;
import javax.validation.constraints.Min;

@Validated
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/")
public class UserController {

	@Autowired
	private UserService userService;

	// for read employees
	@GetMapping("/employees")
	public List<User> getAllEmployee() {
		return userService.getAllUsers();
	}

	// get employee of particular id
	@GetMapping("/employees/{id}")
	public ResponseEntity<User> getEmployeebyId(
			@PathVariable("id") @Min(value = 0L, message = "Path Variable must be positive") Long id) {
		User user = userService.getUserByIdlong(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Exist with id :" + id));
		return ResponseEntity.ok(user);
	}

	// for update employee
	@PutMapping("/employees/{id}")
	public ResponseEntity<User> updateEmployee(
			@PathVariable("id") @Min(value = 0L, message = "Path Variable must be positive") Long id,
			@Valid @RequestBody User userDetails) {
		User user = userService.updateUser(id, userDetails);
		return ResponseEntity.ok(user);
	}

	// for delete employee
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(
			@PathVariable("id") @Min(value = 0L, message = "Path Variable must be positive") Long id) {
		User user = userService.getUserByIdlong(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee Not Exist with id :" + id));
		userService.deleteUser(user);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
