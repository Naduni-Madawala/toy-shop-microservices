#!/bin/bash
set -e

echo "Deploying Toy Shop services to DC/OS..."

for app in manifest/*.json; do
  echo "Deploying $app"
  dcos marathon app add "$app" || echo "Already exists"
done

echo "✅ Toy Shop deployed on DC/OS"

