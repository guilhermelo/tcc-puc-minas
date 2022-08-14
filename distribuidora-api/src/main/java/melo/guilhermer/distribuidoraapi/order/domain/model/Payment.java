package melo.guilhermer.distribuidoraapi.order.domain.model;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class Payment {

    @Id
    private UUID id;
    private String name;
    private PaymentStatus status;
    private String number;
    private String cvv;
    private String expirationDate;

    private Payment() {
    }

    public Payment(String name, String number, String cvv, String expirationDate) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.number = number;
        this.cvv = cvv;
        this.expirationDate = expirationDate;
        this.status = PaymentStatus.CREATED;
    }

    public String getName() {
        return name;
    }

    public String getNumber() {
        return number;
    }

    public String getCvv() {
        return cvv;
    }

    public String getExpirationDate() {
        return expirationDate;
    }

    public UUID getId() {
        return id;
    }

    public PaymentStatus getStatus() {
        return status;
    }
}
