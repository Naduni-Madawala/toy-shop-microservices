<?php
namespace ToyShop\Service;

class HealthCheckService {
    public function status(): string {
        return "OK";
    }
}

