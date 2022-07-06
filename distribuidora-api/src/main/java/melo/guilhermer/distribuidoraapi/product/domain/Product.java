package melo.guilhermer.distribuidoraapi.product.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
public class Product {

    @Id
    private UUID id;
    private String name;
    private BigDecimal price;

    @Deprecated
    private Product() {

    }

    public Product(String name, BigDecimal price) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.price = price;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }
}
