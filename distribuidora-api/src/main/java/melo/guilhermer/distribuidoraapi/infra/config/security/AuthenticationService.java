package melo.guilhermer.distribuidoraapi.infra.config.security;

import melo.guilhermer.distribuidoraapi.user.domain.model.User;
import melo.guilhermer.distribuidoraapi.user.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService implements UserDetailsService {

    @Autowired
    private UserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = repository.findByUsername(username);

        return user.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado!"));
    }
}
