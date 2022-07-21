package melo.guilhermer.distribuidoraapi.shoppingcart.domain.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    @Id
    private UUID id;

    private UUID productId;

    private String userNickname;

    public ShoppingCart() {}

    public ShoppingCart(String userNickname, UUID productId) {
        this.id = UUID.randomUUID();
        this.userNickname = userNickname;
        this.productId = productId;
    }
}
