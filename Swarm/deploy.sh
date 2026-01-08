#!/bin/bash
set -e

STACK_NAME=toyshop

echo "Deploying Toy Shop stack to Docker Swarm..."

docker stack deploy -c docker-compose.yaml $STACK_NAME

echo ""
echo "Services deployed:"
docker stack services $STACK_NAME

echo ""
echo "Toy Shop is running on Docker Swarm 🚀"

