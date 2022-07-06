package melo.guilhermer.distribuidoraapi.payment;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity(name = "PaymentOrder")
@Table(name = "orders")
class Order {

    @Id
    UUID id;
}
