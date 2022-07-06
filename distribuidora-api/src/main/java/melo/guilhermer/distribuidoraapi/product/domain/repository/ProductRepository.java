package melo.guilhermer.distribuidoraapi.product.domain.repository;

import melo.guilhermer.distribuidoraapi.product.domain.Product;
import melo.guilhermer.distribuidoraapi.product.domain.projection.ProductList;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.repository.Repository;

import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends Repository<Product, UUID> {

    void save(Product product);

    Slice<ProductList> findAll(Pageable pageable);

    Optional<Product> findById(UUID id);
}
