package melo.guilhermer.distribuidoraapi.order.adapter.api;

import melo.guilhermer.distribuidoraapi.order.adapter.api.request.CreateOrderItemRequest;
import melo.guilhermer.distribuidoraapi.order.adapter.api.request.CreateOrderRequest;
import melo.guilhermer.distribuidoraapi.order.domain.model.Order;
import melo.guilhermer.distribuidoraapi.order.domain.model.OrderItem;
import melo.guilhermer.distribuidoraapi.order.domain.model.Payment;
import melo.guilhermer.distribuidoraapi.order.domain.projection.OrderItemList;
import melo.guilhermer.distribuidoraapi.order.domain.projection.OrderList;
import melo.guilhermer.distribuidoraapi.order.domain.repository.OrderItemRepository;
import melo.guilhermer.distribuidoraapi.order.domain.repository.OrderRepository;
import melo.guilhermer.distribuidoraapi.product.domain.Product;
import melo.guilhermer.distribuidoraapi.product.domain.repository.ProductRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@CrossOrigin(exposedHeaders = "Location")
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderRepository repository;
    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;

    public OrderController(OrderRepository repository, ProductRepository productRepository, OrderItemRepository orderItemRepository) {
        this.repository = repository;
        this.productRepository = productRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @PostMapping
    public ResponseEntity create(@RequestBody CreateOrderRequest request, UriComponentsBuilder uriBuilder) {

        var payment = new Payment(request.getCreditCard().getName(), request.getCreditCard().getNumber(), request.getCreditCard().getCvv(), request.getCreditCard().getExpirationDate());

        var order = new Order(request.getUserNickname(), request.getAddress(), payment);

        repository.save(order);

        URI uri = uriBuilder.path("/orders/{id}").buildAndExpand(order.getId().toString()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{userNickname}")
    public List<OrderList> getAll(@PathVariable String userNickname, Pageable pageable) {
        return repository.findAllByUserNickname(userNickname, pageable).getContent();
    }

    @PostMapping("/{orderId}/items")
    public ResponseEntity createOrderItem(@PathVariable UUID orderId, @RequestBody CreateOrderItemRequest request, UriComponentsBuilder uriBuilder) {

        Order order = repository.findById(orderId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found"));

        Product product = productRepository.findById(request.getProductId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        order.addItem(new OrderItem(product, request.getQuantity(), request.getObservation()));

        repository.save(order);

        // Try to create a reservation
        // If success, then create a payment in the reservation create process

        URI uri = uriBuilder.path("/orders/{id}/items/{}").buildAndExpand(order.getId().toString(), UUID.randomUUID().toString()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @GetMapping("/{orderId}/items")
    public List<OrderItemList> findItemsByOrderId(@PathVariable UUID orderId) {
        return orderItemRepository.findAllByOrderId(orderId);
    }
}
