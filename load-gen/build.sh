#!/bin/bash
set -e

IMAGE_NAME=naduni/toy-loadgen

echo "Building Toy Shop load generator image..."
docker build -t $IMAGE_NAME .

echo "Load generator image built successfully"

