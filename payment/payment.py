from flask import Flask, jsonify, request
from rabbitmq import publish_message

app = Flask(__name__)

@app.route("/pay", methods=["POST"])
def pay():
    order = request.json or {}
    publish_message(str(order))
    return jsonify({
        "status": "success",
        "message": "Toy order payment processed"
    })

@app.route("/health")
def health():
    return "OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
