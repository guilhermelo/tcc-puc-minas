package melo.guilhermer.distribuidoraapi.reservation;

import melo.guilhermer.distribuidoraapi.product.domain.Product;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.UUID;

//@Entity(name = "ReservationOrder")
class Order {

//    @Id
    private UUID id;

//    @ManyToOne
//    @JoinColumn(name = "product_id")
    private Product product;
}
