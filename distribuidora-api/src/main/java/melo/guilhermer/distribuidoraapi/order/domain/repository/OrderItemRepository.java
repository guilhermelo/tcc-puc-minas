package melo.guilhermer.distribuidoraapi.order.domain.repository;

import melo.guilhermer.distribuidoraapi.order.domain.model.query.OrderItemQuery;
import melo.guilhermer.distribuidoraapi.order.domain.projection.OrderItemList;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.UUID;

public interface OrderItemRepository extends Repository<OrderItemQuery, UUID> {

    List<OrderItemList> findAllByOrderId(UUID orderId);

}
