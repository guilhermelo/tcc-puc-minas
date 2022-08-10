package melo.guilhermer.distribuidoraapi.util;

import melo.guilhermer.distribuidoraapi.order.domain.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@EnableScheduling
public class AtualizadorPedidos {

    @Autowired
    private OrderRepository orderRepository;

    @Scheduled(fixedDelay = 60000)
    @Transactional
    public void atualizaSituacaoPedidos() {
        this.orderRepository.payAllOrdersMade();
    }
}
