from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/pay")
def pay():
    return jsonify({
        "status": "success",
        "message": "Toy order payment processed"
    })

app.run(host="0.0.0.0", port=8080)

