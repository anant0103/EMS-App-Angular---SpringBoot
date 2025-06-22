package com.springboot.backend.springboot.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.springboot.backend.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByIdLong(Long idlong);
	Optional<User> findByEmail(String email);
	Boolean existsByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE MONTH(u.bdate)=?1 ORDER BY u.bdate")
	List<User> findBirthdays(Integer month);
	
	@Query("SELECT u FROM User u WHERE MONTH(u.jdate)=?1 ORDER BY u.jdate")
	List<User> findWorkAnniversary(Integer month);
}
