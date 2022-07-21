package melo.guilhermer.distribuidoraapi.shoppingcart.adapter.api;

import melo.guilhermer.distribuidoraapi.shoppingcart.adapter.api.request.AddItemCartRequest;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.model.ShoppingCart;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.projection.ShoppingCartList;
import melo.guilhermer.distribuidoraapi.shoppingcart.domain.repository.ShoppingCartRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/shopping-carts")
public class ShoppingCartController {

    private ShoppingCartRepository repository;

    public ShoppingCartController(ShoppingCartRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/{userNickname}")
    public ResponseEntity addItemToCart(@PathVariable String userNickname, @RequestBody AddItemCartRequest request) {
        repository.save(new ShoppingCart(userNickname, request.getProductId()));

        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userNickname}")
    public List<ShoppingCartList> getAllByUSer(@PathVariable String userNickname) {
        return repository.findAllByUserNickname(userNickname);
    }

    @GetMapping("/{userNickname}/count")
    public Long countByUserNickname(@PathVariable String userNickname) {
        return repository.countByUserNickname(userNickname);
    }

}
