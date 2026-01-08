# Toy Shop – OpenShift Deployment

This directory contains OpenShift-specific deployment scripts
for the Toy Shop microservices application.

The Toy Shop application is a polyglot microservices-based
ecommerce system inspired by the Robot-Shop reference architecture.

## Components Deployed
- Web (AngularJS + Nginx)
- Catalogue (NodeJS + MongoDB)
- Cart
- User
- Payment
- Ratings
- Dispatch
- Shipping
- MongoDB
- MySQL
- Redis
- RabbitMQ

## Prerequisites
- OpenShift cluster (4.x recommended)
- `oc` CLI installed and logged in
- Docker images pushed to a container registry

## Notes
- This setup uses OpenShift-native commands (`oc new-app`)
- Intended for demo and learning purposes
- Business logic remains identical across AKS, K8s, and OpenShift

