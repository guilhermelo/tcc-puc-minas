package melo.guilhermer.distribuidoraapi.order.domain.model.query;

import melo.guilhermer.distribuidoraapi.product.domain.Product;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "order_item")
public class OrderItemQuery {
    @Id
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private BigDecimal quantity;

    @Column(name = "order_id")
    private UUID orderId;

    private BigDecimal total;

    private OrderItemQuery() {

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

    public BigDecimal getTotal() {
        return total;
    }
}
