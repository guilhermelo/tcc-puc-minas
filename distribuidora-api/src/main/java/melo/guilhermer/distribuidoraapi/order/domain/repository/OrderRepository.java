package melo.guilhermer.distribuidoraapi.order.domain.repository;

import melo.guilhermer.distribuidoraapi.order.domain.model.Order;
import melo.guilhermer.distribuidoraapi.order.domain.projection.OrderList;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends Repository<Order, UUID> {
    void save(Order order);

    Slice<OrderList> findAll(Pageable pageable);

    Optional<Order> findById(UUID orderId);
}
