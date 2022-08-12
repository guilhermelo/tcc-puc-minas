package melo.guilhermer.distribuidoraapi.order.domain.repository;

import melo.guilhermer.distribuidoraapi.order.domain.model.Order;
import melo.guilhermer.distribuidoraapi.order.domain.projection.OrderList;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends Repository<Order, UUID> {
    void save(Order order);

    Slice<OrderList> findAll(Pageable pageable);

    Slice<OrderList> findAllByUserNickname(String userNickname, Pageable pageable);

    Optional<Order> findById(UUID orderId);

    Optional<OrderList> findByIdAndUserNickname(UUID id, String userNickname);

    @Modifying
    @Query(value = "UPDATE ORDERS SET STATUS = 'PAID' WHERE STATUS = 'MADE'", nativeQuery = true)
    void payAllOrdersMade();
}
