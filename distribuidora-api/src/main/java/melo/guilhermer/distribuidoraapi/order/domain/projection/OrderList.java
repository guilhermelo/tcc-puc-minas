package melo.guilhermer.distribuidoraapi.order.domain.projection;

import melo.guilhermer.distribuidoraapi.order.domain.model.OrderStatus;

import java.time.LocalDateTime;

public interface OrderList {

    String getId();

    LocalDateTime getGeneratedAt();

    String getIdentifier();

    OrderStatus getStatus();

    Address getAddress();

    interface Address {
        String getStreet();
        String getNumber();
        String getDistrict();
        String getCity();
        String getState();
    }
}
