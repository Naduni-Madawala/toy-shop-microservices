# Fluentd – Centralized Logging

This directory provides Fluentd configuration for
centralized logging in the Toy-Shop microservices application.

Inspired by the Robot-Shop logging setup.

Supports:
- Docker Compose
- Kubernetes (DaemonSet-style logging)

Fluentd collects logs from containers and prints them to stdout
(or forwards them to Elasticsearch if configured).

