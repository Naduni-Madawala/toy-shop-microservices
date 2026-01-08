#!/bin/bash
set -e

echo "Removing Toy Shop services from DC/OS..."

for app in manifest/*.json; do
  APP_ID=$(jq -r '.id' "$app")
  echo "Removing $APP_ID"
  dcos marathon app remove "$APP_ID" || true
done

echo "🧹 Toy Shop removed from DC/OS"

