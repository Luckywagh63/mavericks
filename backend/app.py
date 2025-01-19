from flask import Flask, request, jsonify
from flask_cors import CORS
import trial  # Import your trial.py functions here
import numpy as np

app = Flask(__name__)
CORS(app)  # Handle CORS

# Define the '/upload' route
@app.route("/output", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    print("Received file:", file.filename)  # Debug log
    img_path = "uploaded_image.jpg"
    file.save(img_path)
    print("File saved to:", img_path)  # Debug log


    try:
        # Preprocess and make a prediction
        img_data = preprocess_image(img_path)
        predictions = model.predict(img_data)
        predicted_class_index = np.argmax(predictions[0])
        predicted_label = class_labels[predicted_class_index]
        confidence = float(predictions[0][predicted_class_index])

        return jsonify({
            "prediction": predicted_label,
            "confidence": confidence
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 400

    
    # Convert any numpy float32 values in the result to regular Python float
    def convert_float32(obj):
        if isinstance(obj, np.float32):
            return float(obj)
        elif isinstance(obj, dict):
            return {k: convert_float32(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [convert_float32(item) for item in obj]
        return obj

    # Ensure the result is serializable
    result = convert_float32(result)

    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
