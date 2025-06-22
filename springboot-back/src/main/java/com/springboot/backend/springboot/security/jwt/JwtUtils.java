package com.springboot.backend.springboot.security.jwt;

import java.util.Date;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;
import io.jsonwebtoken.*;


import com.springboot.backend.springboot.security.services.UserDetailsImpl;

@Component
public class JwtUtils {
	
	@Value("${ems.app.jwtSecret}")
	private String jwtSecret;
	
	@Value("${ems.app.jwtCookieName}")
	private String jwtCookie;
	
	@Value("${ems.app.jwtExpirationMs}")
	private int jwtExpirationMs;
	
	public String getJwtFromCookies(HttpServletRequest request) {
		Cookie cookie = WebUtils.getCookie(request, jwtCookie);
		if(cookie != null)
			return cookie.getValue();
		else 
			return null;
	}
	
	public ResponseCookie generatedJwtCookie(UserDetailsImpl userPrincipal) {
		String jwt = generatedTokenFromUsername(userPrincipal.getUsername());
		ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24*60*60).httpOnly(true).build();
		return cookie;
	}
	
	public ResponseCookie getCleanJwtCookie() {
		ResponseCookie cookie = ResponseCookie.from(jwtCookie, null).path("/api").build();
		return cookie;
	}
	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	}
	
	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (Exception e) {
			System.out.print("Exception from JWT Token Parsing: "+e.getMessage());
		}
		return false;
	}
	
	public String generatedTokenFromUsername(String username) {
		String token = Jwts.builder()
				.setSubject(username)
				.setIssuedAt(new Date())
				.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
		System.out.println("New Generated Token: "+ token);
		return token;
	}
		

}
