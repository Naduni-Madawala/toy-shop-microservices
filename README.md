# toy-shop-microservices
This is my demo-toy-shop three tier eCommerce architecture
# 🧸 Toy Shop – Microservices Ecommerce Platform

Toy Shop is a **Robot-Shop inspired microservices ecommerce application**
built to demonstrate **real-world DevOps, Cloud, and Kubernetes practices**.

## 🏗 Architecture

Frontend:
- AngularJS (served via Nginx)

Backend Microservices:
- Catalogue (Node.js + MongoDB)
- Cart (Node.js)
- User (Node.js)
- Payment (Python + RabbitMQ)
- Dispatch (Go)
- Shipping (Java Spring Boot)
- Ratings (PHP + MySQL)

Datastores:
- MongoDB
- MySQL
- Redis
- RabbitMQ

Observability:
- Fluentd (logs)

Orchestration:
- Docker Compose
- Kubernetes
- AKS (Helm)
- Swarm
- DCOS (legacy support)

## 🚀 Run locally

```bash
docker-compose up --build
