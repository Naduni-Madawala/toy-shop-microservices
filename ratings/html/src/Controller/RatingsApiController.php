<?php
namespace ToyShop\Controller;

use ToyShop\Service\RatingsService;

class RatingsApiController {
    public function handle(): void {
        $service = new RatingsService();
        echo json_encode($service->getRatings());
    }
}

