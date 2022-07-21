package melo.guilhermer.distribuidoraapi.shoppingcart.domain.repository;

import melo.guilhermer.distribuidoraapi.shoppingcart.domain.model.ShoppingCart;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.projection.ShoppingCartList;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.UUID;

public interface ShoppingCartRepository extends Repository<ShoppingCart, UUID> {
    void save(ShoppingCart shoppingCart);

    @Query(value = " select cast(s.id as varchar) as id, cast(p.id as varchar) as productId, p.name, p.price from shopping_cart s inner join product p on p.id = s.product_id where s.user_nickname = :userNickname", nativeQuery = true)
    List<ShoppingCartList> findAllByUserNickname(String userNickname);

    long countByUserNickname(String userNickname);
}
