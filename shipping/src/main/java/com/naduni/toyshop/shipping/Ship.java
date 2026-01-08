package com.naduni.toyshop.shipping;

public class Ship {
    private String status;
    private int cost;

    public Ship(String status, int cost) {
        this.status = status;
        this.cost = cost;
    }

    public String getStatus() {
        return status;
    }

    public int getCost() {
        return cost;
    }
}

