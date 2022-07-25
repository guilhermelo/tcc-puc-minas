package melo.guilhermer.distribuidoraapi.order.domain.model;

import javax.persistence.Embeddable;

@Embeddable
public class Address {
    private String street;
    private String number;
    private String zipCode;
    private String district;
    private String city;
    private String state;

    public Address(String street, String number, String zipCode, String district, String city, String state) {
        this.street = street;
        this.number = number;
        this.zipCode = zipCode;
        this.district = district;
        this.city = city;
        this.state = state;
    }

    public Address() {
    }

    public String getStreet() {
        return street;
    }

    public String getNumber() {
        return number;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getDistrict() {
        return district;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }
}
