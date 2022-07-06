package melo.guilhermer.distribuidoraapi.order.adapter.api.request;

import java.util.UUID;

public class CreateOrderRequest {

    private UUID userId;

    public CreateOrderRequest() {
    }

    public UUID getUserId() {
        return userId;
    }
}
