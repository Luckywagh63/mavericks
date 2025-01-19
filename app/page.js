"use client";
import Navbar from "../components/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [image, setImage] = useState(null); // State to store the uploaded image
  const [prediction, setPrediction] = useState(null); // State to store the prediction result
  const [confidence, setConfidence] = useState(null); // State to store the confidence level
  const [error, setError] = useState(null); // State to store any error message
  const router = useRouter();

  // Handle file upload and send image to Flask API
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file); // Ensure 'file' matches Flask's request.files key
  
      try {
        const response = await fetch("http://127.0.0.1:3000/output", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error(`Error in prediction: ${response.statusText}`);
        }
  
        const data = await response.json();
        setPrediction(data.prediction);
        setConfidence(data.confidence);
        setError(null);
      } catch (error) {
        console.error("Error while sending the image:", error);
        setError(error.message);
      }
    }
  };
  

  const openFileDialog = () => {
    document.getElementById("fileInput").click(); // Programmatically open the file input dialog
  };

  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 flex-col-reverse md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Crop Diagnostics Made Easy</h1>
              <p className="text-lg mb-6">
                Upload a photo of your crops and get instant, accurate diagnostics to improve yields.
              </p>
              <button
                onClick={openFileDialog}
                className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
              >
                Upload Pic
              </button>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden" // Hide the input element
              />
            </div>
            <div className="md:w-1/2">
              <img src="/crop.jpeg" alt="Crops" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Result Section */}
      {prediction && (
        <section className="text-center py-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Prediction Result</h2>
            <p className="text-lg mb-4">Predicted Class: {prediction}</p>
            <p className="text-lg mb-4">Confidence: {confidence}%</p>
          </div>
        </section>
      )}

      {/* Error Handling */}
      {error && (
        <section className="text-center py-8 bg-red-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p className="text-lg mb-4">{error}</p>
          </div>
        </section>
      )}

      {/* Footer Section */}
      <footer className="bg-green-800 text-white py-8 text-center">
        <p>&copy; 2025 Crop Diagnostics. All rights reserved.</p>
      </footer>
    </div>
  );
}
