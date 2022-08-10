package melo.guilhermer.distribuidoraapi.order.domain.model;

import melo.guilhermer.distribuidoraapi.product.domain.Product;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "order_item")
public class OrderItem {
    @Id
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private BigDecimal quantity;

    private String observation;

    private BigDecimal total;

    private OrderItem() {
    }

    public OrderItem(Product product, BigDecimal quantity, BigDecimal total, String observation) {
        this.id = UUID.randomUUID();
        this.product = product;
        this.quantity = quantity;
        this.observation = observation;
        this.total = total;
    }

    public UUID getId() {
        return id;
    }

    public Product getProduct() {
        return product;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public String getObservation() {
        return observation;
    }

    public BigDecimal getTotal() {
        return total;
    }
}
