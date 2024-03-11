package com.chungtau.ecommerceapi.controller;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chungtau.ecommerceapi.constant.Api;

@RestController
@RequestMapping(Api.BASE_API+"/userextras")
public class UserExtraController{
    
    @PreAuthorize("hasRole('USER')")
    @GetMapping("/me")
    public String getUserExtra(Principal principal) {
        return principal.getName();
    }
}
