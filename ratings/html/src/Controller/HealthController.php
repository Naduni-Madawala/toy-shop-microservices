<?php
namespace ToyShop\Controller;

class HealthController {
    public function check(): void {
        echo json_encode(["status" => "UP"]);
    }
}

