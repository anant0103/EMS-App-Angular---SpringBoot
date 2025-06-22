package com.springboot.backend.springboot.validation;

import java.util.HashMap;
import java.util.Map;

import javax.validation.ConstraintViolationException;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.springboot.backend.springboot.exception.ResourceNotFoundException;

@ControllerAdvice
public class Validator extends ResponseEntityExceptionHandler {
	
	//handle Entity validation
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) ->{
			String fieldName = ((FieldError) error).getField();
			String message = error.getDefaultMessage();
			errors.put(fieldName, message);
		});
		return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
	}
	
	
	//handle get mapping: employees/hh
	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	  @ResponseStatus(HttpStatus.BAD_REQUEST)
	  ResponseEntity<Object> handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e) {
		
		Map<String, String> errors = new HashMap<>();
		String message = e.getMessage();
		errors.put("Error", message);
	    return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
	  }
	
	
	//handle get mapping: employees/-1
	@ExceptionHandler(ConstraintViolationException.class)
	  @ResponseStatus(HttpStatus.BAD_REQUEST)
	  ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException e) {
		
		Map<String, String> errors = new HashMap<>();
		String message = e.getMessage();
		errors.put("Error", message);
	    return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
	  }
	
	//handle get employees/100 if 100 employee not exist
	@ExceptionHandler(ResourceNotFoundException.class)
	  @ResponseStatus(HttpStatus.BAD_REQUEST)
	  ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException e) {
		
		Map<String, String> errors = new HashMap<>();
		String message = e.getMessage();
		errors.put("Error", message);
	    return new ResponseEntity<Object>(errors, HttpStatus.BAD_REQUEST);
	  }

	
}


