package melo.guilhermer.distribuidoraapi.product.domain.projection;

import java.math.BigDecimal;
import java.util.UUID;

public interface ProductList {

    UUID getId();

    String getName();

    BigDecimal getPrice();
}
