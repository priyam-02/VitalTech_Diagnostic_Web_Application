from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import base64

from flask_cors import CORS, cross_origin

# Initialize Flask application
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


# Print TensorFlow version to verify installation (can be removed in production)
# print(tf.__version__)

classes = {0: 'NORMAL', 1: 'COVID-19', 2: 'TUBERCULOSIS'}
model = load_model("model.keras")  # Ensure this matches your actual model file

@app.route('/predict', methods=['GET', 'POST'])
@cross_origin()
def predict():
    # Assuming the image is sent as a file in the request
    # file = request.files['image']
    # if not file:
    #     return jsonify({'error': 'No file provided'}), 400
    
    if 'image' in request.files:
        # Image is uploaded as a file
        file = request.files['image']
        image_bytes = file.read()
    elif 'image' in request.json:
        # Image is uploaded as base64 string
        image_data = request.json['image']
        if 'data:' in image_data and ';base64,' in image_data:
            # Find the start of the base64 string
            header, image_data = image_data.split(';base64,')
        image_bytes = base64.b64decode(image_data)
    else:
        return jsonify({'error': 'No image provided'}), 400

    # Read the image in OpenCV
    image = cv2.imdecode(np.frombuffer(image_bytes, np.uint8), cv2.IMREAD_COLOR)
    if image is None:
        return jsonify({'error': 'Could not decode image'}), 422

    # Resize and preprocess as needed for your model
    image = cv2.resize(image, (224, 224))  # Adjust size as per your model's requirement
    image = np.expand_dims(image, axis=0)  # Add batch dimension

    prediction = model.predict(image)
    class_id = np.argmax(prediction)
    class_name = classes[class_id]
    return jsonify({'prediction': class_name})

@app.route('/status', methods=['GET'])
def status():
    return "Server is up and running!"

if __name__ == '__main__':
    app.run(debug=True)
