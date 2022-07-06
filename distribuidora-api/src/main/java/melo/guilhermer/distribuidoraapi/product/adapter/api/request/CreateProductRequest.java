package melo.guilhermer.distribuidoraapi.product.adapter.api.request;

import java.math.BigDecimal;

public class CreateProductRequest {

    private final String name;
    private final BigDecimal price;

    public CreateProductRequest(String name, BigDecimal price) {
        this.name = name;
        this.price = price;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }
}
