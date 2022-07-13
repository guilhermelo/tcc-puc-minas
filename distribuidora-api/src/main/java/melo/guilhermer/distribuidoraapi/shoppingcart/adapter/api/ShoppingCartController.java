package melo.guilhermer.distribuidoraapi.shoppingcart.adapter.api;

import melo.guilhermer.distribuidoraapi.shoppingcart.adapter.api.request.AddItemCartRequest;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.model.ShoppingCart;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.projection.ShoppingCartList;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.repository.ShoppingCartRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@CrossOrigin
@RestController
@RequestMapping("/shopping-carts")
public class ShoppingCartController {

    private ShoppingCartRepository repository;

    public ShoppingCartController(ShoppingCartRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/{userId}")
    public ResponseEntity addItemToCart(@PathVariable UUID userId, @RequestBody AddItemCartRequest request) {
        repository.save(new ShoppingCart(userId, request.getProductId()));

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}")
    public List<ShoppingCartList> getAllByUSer(@PathVariable UUID userId) {
        return repository.findAllByUserId(userId);
    }

    @GetMapping("/{userId}/count")
    public Long countByUserId(@PathVariable UUID userId) {
        return repository.countByUserId(userId);
    }

}
