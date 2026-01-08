#!/bin/bash
set -e

echo "Initializing Docker Swarm..."

docker swarm init || echo "Swarm already initialized"

echo "Docker Swarm status:"
docker node ls

echo "Swarm ready 🚀"

