import requests
import random
import time

BASE_URL = "http://web"

PRODUCT_ENDPOINTS = [
    "/catalogue",
    "/catalogue/cars",
    "/catalogue/figure"
]

def hit_endpoint(endpoint):
    try:
        r = requests.get(BASE_URL + endpoint, timeout=2)
        print(f"Hit {endpoint} -> {r.status_code}")
    except Exception as e:
        print(f"Error hitting {endpoint}: {e}")

if __name__ == "__main__":
    endpoint = random.choice(PRODUCT_ENDPOINTS)
    hit_endpoint(endpoint)
    time.sleep(0.5)

