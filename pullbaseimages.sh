#!/bin/bash
set -e

echo "Pulling base images..."

docker pull mongo:6
docker pull mysql:8
docker pull redis:7
docker pull rabbitmq:3-management
docker pull nginx:alpine
docker pull node:18-alpine
docker pull python:3.11-slim
docker pull eclipse-temurin:17-jre

echo "Base images pulled successfully"

