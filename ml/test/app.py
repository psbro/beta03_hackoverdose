from io import BytesIO
from flask import Flask, request, jsonify
import urllib

from keras.utils import get_file
import pathlib
import tensorflow as tf
import numpy as np

app = Flask(__name__)

model_path = "model.h5"


def loadImage(URL):
    with urllib.request.urlopen(URL) as url:
        img = tf.keras.utils.load_img(
            BytesIO(url.read()), color_mode="rgb", target_size=(150, 150), interpolation="nearest")

    return tf.keras.utils.img_to_array(img)


@app.route('/test', methods=['POST'])
def test():
    model_predict = tf.keras.models.load_model('model.h5')

    model_predict.compile(optimizer='adam',
                          loss='categorical_crossentropy',
                          metrics=['accuracy'])
    image_name = []
    image_conf = []
    predict_result = []

    path = request.json["link"]
    print(path)

    img = loadImage(path)
    img = np.expand_dims(img, axis=0)
    img = img/255

    images = np.vstack([img])
    classes = model_predict.predict(images, batch_size=10)

    max = np.amax(classes[0])
    if np.where(classes[0] == max)[0] == 0:
        image_conf.append(max)
        predict_result.append('Fresh Apple')
    elif np.where(classes[0] == max)[0] == 1:
        image_conf.append(max)
        predict_result.append('Fresh Banana')
    elif np.where(classes[0] == max)[0] == 2:
        image_conf.append(max)
        predict_result.append('Fresh Orange')
    elif np.where(classes[0] == max)[0] == 3:
        image_conf.append(max)
        predict_result.append('Rotten Apple')
    elif np.where(classes[0] == max)[0] == 4:
        image_conf.append(max)
        predict_result.append('Rotten Banana')
    else:
        image_conf.append(max)
        predict_result.append('Rotten orange')

    print(f'Predicted: {predict_result}, Confidence: {image_conf}')
    print(type(predict_result))
    print(type(image_conf))
    return {'result': predict_result, 'confidence': str(image_conf)}


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
