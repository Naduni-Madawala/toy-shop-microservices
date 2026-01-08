#!/bin/bash

kubectl autoscale deployment catalogue \
  --cpu-percent=50 \
  --min=1 \
  --max=5

