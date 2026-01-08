import pika
import configparser

config = configparser.ConfigParser()
config.read("payment.ini")

RABBIT_HOST = config["rabbitmq"]["host"]
QUEUE = config["rabbitmq"]["queue"]

def publish_message(message):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host=RABBIT_HOST)
    )
    channel = connection.channel()

    channel.queue_declare(queue=QUEUE)

    channel.basic_publish(
        exchange="",
        routing_key=QUEUE,
        body=message
    )

    connection.close()

