package melo.guilhermer.distribuidoraapi.product.adapter.api;

import melo.guilhermer.distribuidoraapi.product.adapter.api.request.CreateProductRequest;
import melo.guilhermer.distribuidoraapi.product.domain.Product;
import melo.guilhermer.distribuidoraapi.product.domain.projection.ProductList;
import melo.guilhermer.distribuidoraapi.product.domain.repository.ProductRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<ProductList> findAll(Pageable pageable, @RequestParam(name = "search", defaultValue = "") String search) {

        if(!"".equals(search)) {
            return repository.findByNameContainingIgnoreCase(pageable, search).getContent();
        }

        return repository.findAll(pageable).getContent();
    }

    @GetMapping("/{id}")
    public Product findById(@PathVariable UUID id) {
        return repository.findById(id).get();
    }

    @PostMapping
    public ResponseEntity create(@RequestBody CreateProductRequest request, UriComponentsBuilder uriBuilder) {
        var product = new Product(request.getName(), request.getPrice());

        repository.save(product);

        URI uri = uriBuilder.path("/products/{id}").buildAndExpand(product.getId().toString()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
