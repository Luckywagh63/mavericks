"use client";
import { useState } from 'react';

const PredictPage = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  // Handle file input
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Send the image to Flask API for prediction
  const handlePredict = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://127.0.0.1:3000/output', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setPrediction(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Upload Image for Prediction</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handlePredict}>Predict</button>

      {prediction && (
        <div>
          <h2>Prediction: {prediction.prediction}</h2>
          <p>Confidence: {prediction.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default PredictPage;
