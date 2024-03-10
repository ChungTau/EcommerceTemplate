package com.chungtau.ecommerceapi.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {
    @GetMapping("/")
	public String index() {
		return "Hello World123!";
	}

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/api/v1/home")
	public String Home(@AuthenticationPrincipal Jwt jwt) {
		return String.format("Hello, %s!", jwt.getClaimAsString("preferred_username"));
	}

    @GetMapping("/api/v1/test")
	public String Test() {
		return "TEST!";
	}
}