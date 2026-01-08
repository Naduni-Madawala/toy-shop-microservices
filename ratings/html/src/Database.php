<?php
namespace ToyShop;

use PDO;

class Database {
    public static function getConnection(): PDO {
        return new PDO(
            "mysql:host=mysql;dbname=toyshop",
            "root",
            "rootpass",
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]
        );
    }
}

