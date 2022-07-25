package melo.guilhermer.distribuidoraapi.payment;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

public class PaymentTest {

    @Id
    private UUID id;

    private LocalDateTime generatedAt;

    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;

    private BigDecimal value;

    private String name;

    private String number;

    private String expiration;

    private String code;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
