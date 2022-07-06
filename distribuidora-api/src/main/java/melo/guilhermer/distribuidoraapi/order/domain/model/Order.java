package melo.guilhermer.distribuidoraapi.order.domain.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    private UUID id;
    private LocalDateTime generatedAt;
    private UUID userId;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Set<OrderItem> items;

    private Order() {
    }

    public Order(UUID userId) {
        this.id = UUID.randomUUID();
        this.userId = userId;
        this.generatedAt = LocalDateTime.now();
        this.status = OrderStatus.MADE;
        this.items = new HashSet<>();
    }

    public UUID getId() {
        return id;
    }

    public void addItem(OrderItem orderItem) {
        this.items.add(Objects.requireNonNull(orderItem));
    }
}
