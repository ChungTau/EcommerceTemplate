package com.chungtau.ecommerceapi.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")
    String jwkSetUri;

    @Bean
    JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder
            .withJwkSetUri(this.jwkSetUri)
            .build();
    }

    @Bean
    public SecurityFilterChain resourceServerFilterChain(HttpSecurity http)throws Exception {

        http.csrf((csrf) -> csrf.disable()).httpBasic((httpBasic) -> httpBasic.disable()).authorizeHttpRequests((authorize) -> authorize.requestMatchers(new AntPathRequestMatcher("/")).permitAll().requestMatchers(new AntPathRequestMatcher("/api/v1/*")).authenticated());

        http.sessionManagement(sess -> sess.sessionCreationPolicy( SessionCreationPolicy.STATELESS));
        http.oauth2ResourceServer(oauth2 -> oauth2.jwt(jwt -> jwt.decoder(jwtDecoder())));
        return http.build();
    }
}
