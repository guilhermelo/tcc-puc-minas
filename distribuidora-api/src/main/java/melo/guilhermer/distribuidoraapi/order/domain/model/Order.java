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

    private String identifier;

    private LocalDateTime generatedAt;

    private String userNickname;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Set<OrderItem> items;

    @Embedded
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private Payment payment;

    private Order() {
    }

    public Order(String userNickname, Address address, Payment payment) {
        this.id = UUID.randomUUID();
        this.userNickname = userNickname;
        this.generatedAt = LocalDateTime.now();
        this.status = OrderStatus.MADE;
        this.items = new HashSet<>();
        this.address = address;
        this.payment = payment;
        this.identifier = id.toString().replace("-", "");
    }

    public UUID getId() {
        return id;
    }

    public void addItem(OrderItem orderItem) {
        this.items.add(Objects.requireNonNull(orderItem));
    }

    public Payment getPayment() {
        return payment;
    }

    public Address getAddress() {
        return address;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public LocalDateTime getGeneratedAt() {
        return generatedAt;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public Set<OrderItem> getItems() {
        return items;
    }

    public String getIdentifier() {
        return identifier;
    }
}
