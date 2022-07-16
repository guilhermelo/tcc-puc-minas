package melo.guilhermer.distribuidoraapi.infra.config.security;

import melo.guilhermer.distribuidoraapi.user.domain.model.User;
import melo.guilhermer.distribuidoraapi.user.domain.repository.UserRepository;
import org.springframework.security.core.token.TokenService;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.UUID;

public class JWTAuthenticationFilter {

    private final TokenService tokenService;
    private final UserRepository userRepository;

    public JWTAuthenticationFilter(TokenService tokenService, UserRepository userRepository) {
        this.tokenService = tokenService;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String token = getToken(request);

        boolean isTokenValid = tokenService.isTokenValid(token);

        if(isTokenValid) {
            authenticateClient(token);
        }

        filterChain.doFilter(request, response);
    }

    private void authenticateClient(String token) {
        String userId = tokenService.getUserId(token);
        User user = userRepository.findById(UUID.fromString(userId)).orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    private String getToken(HttpServletRequest request) {

        String token = request.getHeader("Authorization");

        if(token == null || token.isEmpty() || !token.startsWith("Bearer ")) {
            return null;
        }

        return token.substring(7);
    }
}
