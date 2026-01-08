#!/bin/bash
set -e

echo "Starting Fluentd (Docker Compose mode)..."

docker run -d \
  --name toy-fluentd \
  -p 24224:24224 \
  -p 24224:24224/udp \
  naduni/toy-fluentd

echo "Fluentd is running on port 24224"

