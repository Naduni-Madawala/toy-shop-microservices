#!/bin/bash
set -e

PROJECT_NAME=toyshop

echo "Creating OpenShift project: $PROJECT_NAME"
oc new-project $PROJECT_NAME || oc project $PROJECT_NAME

echo "Deploying MongoDB"
oc new-app mongo:6 --name=mongodb
oc expose svc/mongodb

echo "Deploying MySQL"
oc new-app mysql:8 \
  -e MYSQL_ROOT_PASSWORD=rootpass \
  --name=mysql
oc expose svc/mysql

echo "Deploying Redis"
oc new-app redis:7 --name=redis
oc expose svc/redis

echo "Deploying RabbitMQ"
oc new-app rabbitmq:3-management --name=rabbitmq
oc expose svc/rabbitmq

echo "Deploying Catalogue Service"
oc new-app naduni/toy-catalogue:latest --name=catalogue
oc expose svc/catalogue

echo "Deploying Cart Service"
oc new-app naduni/toy-cart:latest --name=cart
oc expose svc/cart

echo "Deploying User Service"
oc new-app naduni/toy-user:latest --name=user
oc expose svc/user

echo "Deploying Payment Service"
oc new-app naduni/toy-payment:latest --name=payment
oc expose svc/payment

echo "Deploying Ratings Service"
oc new-app naduni/toy-ratings:latest --name=ratings
oc expose svc/ratings

echo "Deploying Dispatch Service"
oc new-app naduni/toy-dispatch:latest --name=dispatch
oc expose svc/dispatch

echo "Deploying Shipping Service"
oc new-app naduni/toy-shipping:latest --name=shipping
oc expose svc/shipping

echo "Deploying Web UI"
oc new-app naduni/toy-web:latest --name=web
oc expose svc/web

echo "Toy Shop deployment on OpenShift completed successfully 🚀"
