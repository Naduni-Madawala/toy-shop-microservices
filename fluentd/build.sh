#!/bin/bash
set -e

IMAGE_NAME=naduni/toy-fluentd

echo "Building Fluentd image..."
docker build -t $IMAGE_NAME .

echo "Fluentd image built successfully"

