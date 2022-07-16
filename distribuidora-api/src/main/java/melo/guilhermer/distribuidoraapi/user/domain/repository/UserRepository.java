package melo.guilhermer.distribuidoraapi.user.domain.repository;

import melo.guilhermer.distribuidoraapi.user.domain.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {
    Optional<User> findByUsername(String username);
}
