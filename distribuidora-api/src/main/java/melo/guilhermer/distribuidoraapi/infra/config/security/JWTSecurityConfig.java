package melo.guilhermer.distribuidoraapi.infra.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class JWTSecurityConfig {

    @Bean
    public SecurityFilterChain configureFilterChain(HttpSecurity http) throws Exception {
        return http.authorizeRequests(auth -> auth.anyRequest().authenticated())
                .cors(c -> c.configurationSource(corsConfigurationSource()))
                .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt).build();
    }


    private CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration.applyPermitDefaultValues());
        return source;
    }

    //    @Bean
//    public JwtDecoder jwtDecoder() {
//
//
//
//    }
}
