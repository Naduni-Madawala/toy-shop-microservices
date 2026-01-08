package com.naduni.toyshop.shipping;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Code {

    @Id
    private Long id;
    private String code;

    public Long getId() { return id; }
    public String getCode() { return code; }
}

