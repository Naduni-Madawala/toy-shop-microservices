<?php
require_once __DIR__ . '/vendor/autoload.php';

use ToyShop\Controller\RatingsApiController;
use ToyShop\Controller\HealthController;

header("Content-Type: application/json");

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ($path === '/health') {
    (new HealthController())->check();
    exit;
}

if (strpos($path, '/ratings') === 0) {
    (new RatingsApiController())->handle();
    exit;
}

http_response_code(404);
echo json_encode(["error" => "Not Found"]);
