package melo.guilhermer.distribuidoraapi.order.domain.projection;

import java.math.BigDecimal;
import java.util.UUID;

public interface OrderItemList {

    String getId();

    Product getProduct();

    BigDecimal getQuantity();

    interface Product {
        UUID getId();
        String getName();
        BigDecimal getPrice();
    }
}
