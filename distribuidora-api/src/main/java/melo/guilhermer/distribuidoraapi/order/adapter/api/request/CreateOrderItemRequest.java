package melo.guilhermer.distribuidoraapi.order.adapter.api.request;

import java.math.BigDecimal;
import java.util.UUID;

public class CreateOrderItemRequest {

    private UUID productId;

    private BigDecimal quantity;

    private BigDecimal total;

    private String observation;

    public CreateOrderItemRequest() {
    }

    public UUID getProductId() {
        return productId;
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
