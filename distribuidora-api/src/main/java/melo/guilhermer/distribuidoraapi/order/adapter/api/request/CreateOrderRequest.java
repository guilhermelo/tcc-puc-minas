package melo.guilhermer.distribuidoraapi.order.adapter.api.request;

import melo.guilhermer.distribuidoraapi.order.domain.model.Address;

public class CreateOrderRequest {

    private String userNickname;
    private Address address;
    private CreatePaymentRequest payment;

    public CreateOrderRequest() {
    }

    public String getUserNickname() {
        return userNickname;
    }

    public Address getAddress() {
        return address;
    }

    public CreatePaymentRequest getCreditCard() {
        return payment;
    }

    public CreatePaymentRequest getPayment() {
        return payment;
    }

    public static class CreatePaymentRequest {
        private String name;
        private String number;
        private String cvv;
        private String expirationDate;

        public CreatePaymentRequest() {
        }

        public String getName() {
            return name;
        }

        public String getNumber() {
            return number;
        }

        public String getCvv() {
            return cvv;
        }

        public String getExpirationDate() {
            return expirationDate;
        }
    }
}
