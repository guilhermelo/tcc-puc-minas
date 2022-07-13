package melo.guilhermer.distribuidoraapi.shoppingcart.domain.projection;

import java.math.BigDecimal;

public interface ShoppingCartList {

    String getId();

    String getProductId();

    String getName();

    BigDecimal getPrice();

}
