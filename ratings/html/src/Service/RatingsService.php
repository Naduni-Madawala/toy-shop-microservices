<?php
namespace ToyShop\Service;

use ToyShop\Database;

class RatingsService {

    public function getRatings(): array {
        $db = Database::getConnection();
        $stmt = $db->query("SELECT * FROM ratings");
        return $stmt->fetchAll();
    }
}

