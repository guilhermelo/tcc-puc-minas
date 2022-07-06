package melo.guilhermer.distribuidoraapi.order.domain.projection;

import melo.guilhermer.distribuidoraapi.order.domain.model.OrderStatus;

import java.time.LocalDateTime;

public interface OrderList {

    LocalDateTime getGeneratedAt();

    OrderStatus getStatus();
}
