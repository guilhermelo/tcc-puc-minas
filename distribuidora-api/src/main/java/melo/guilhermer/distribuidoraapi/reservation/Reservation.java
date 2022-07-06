package melo.guilhermer.distribuidoraapi.reservation;


import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.util.UUID;

//@Entity
public class Reservation {

    @Id
    private UUID id;

    private Order order;

    private LocalDateTime generatedAt;
}
