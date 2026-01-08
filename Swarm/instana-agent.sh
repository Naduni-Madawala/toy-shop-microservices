#!/bin/bash
set -e

echo "Deploying Instana Agent on Docker Swarm..."

docker service create \
  --name instana-agent \
  --mode global \
  --constraint 'node.platform.os == linux' \
  --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
  --mount type=bind,src=/dev,dst=/dev \
  --env INSTANA_AGENT_KEY=REPLACE_ME \
  --env INSTANA_AGENT_ENDPOINT=https://ingress.instana.io \
  instana/agent

echo "Instana Agent deployed on all Swarm nodes"

