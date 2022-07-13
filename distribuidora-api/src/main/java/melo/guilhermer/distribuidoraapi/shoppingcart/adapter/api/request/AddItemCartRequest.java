package melo.guilhermer.distribuidoraapi.shoppingcart.adapter.api.request;

import java.util.UUID;

public class AddItemCartRequest {
    private UUID productId;

    public AddItemCartRequest() {
    }

    public UUID getProductId() {
        return productId;
    }
}
