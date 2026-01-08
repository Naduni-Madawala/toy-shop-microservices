package com.naduni.toyshop.shipping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/ship")
    public Ship ship() {
        return new Ship("READY", 250);
    }
}
