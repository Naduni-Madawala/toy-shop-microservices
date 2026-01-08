FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY toy-shop.py .
COPY entrypoint.sh .
COPY load-gen.sh .

RUN chmod +x entrypoint.sh load-gen.sh

ENTRYPOINT ["./entrypoint.sh"]

