FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY payment.py .
COPY rabbitmq.py .
COPY payment.ini .

EXPOSE 8080

CMD ["python", "payment.py"]

