import pandas as pd
import pickle
from flask import Flask, jsonify, request
import numpy as np
import sklearn
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
cors = CORS(app)


model = pickle.load(open("model.pkl", "rb"))


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([np.array(data)])
    output = prediction.tolist()
    return jsonify(output)


if __name__ == "__main__":  # Makes sure this is the main process
    app.run(  # Starts the site
        host="0.0.0.0",  # EStablishes the host, required for repl to detect the site
        port=random.randint(
            2000, 9000
        ),  # Randomly select the port the machine hosts on.
    )
