#!/bin/bash
set -e

echo "Configuring Toy Shop MySQL database..."

mysql -u root -p$MYSQL_ROOT_PASSWORD <<EOF
CREATE DATABASE IF NOT EXISTS toyshop;
EOF

echo "MySQL configuration completed"

