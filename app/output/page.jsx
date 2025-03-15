"use client";
import { useSearchParams } from "next/navigation";

export default function OutputPage() {
  const searchParams = useSearchParams();
  const prediction = searchParams.get("prediction");
  const confidence = searchParams.get("confidence");
  const imageUrl = searchParams.get("image"); // Get uploaded image URL

  // Disease Data (Symptoms, Treatment, Prevention, etc.)
  const diseaseData = {
    "Leaf Rust": {
      symptoms: "Yellow-orange spots on leaves, premature leaf drop.",
      treatment: "Apply fungicides like Propiconazole or Tebuconazole.",
      pesticide: "Use Mancozeb or Chlorothalonil-based pesticides.",
      prevention: "Ensure proper spacing, remove infected leaves, and use rust-resistant crop varieties.",
      riskLevel: "High",
      alternativeCrops: "Rust-resistant wheat varieties such as 'Jagger' or 'TAM 111'."
    },
    "Powdery": {
      symptoms: "White powdery patches on leaves and stems.",
      treatment: "Remove infected leaves and ensure good air circulation.",
      pesticide: "Sulfur-based fungicides or Neem oil work effectively.",
      prevention: "Avoid excessive nitrogen fertilizers and plant mildew-resistant varieties.",
      riskLevel: "Moderate",
      alternativeCrops: "Barley and oats tend to be more mildew-resistant."
    },
    "Rust": {
      symptoms: "Small reddish-brown spots on leaves, stunted plant growth.",
      treatment: "Avoid overhead watering and apply fungicides like Azoxystrobin.",
      pesticide: "Use Trifloxystrobin or Copper-based fungicides.",
      prevention: "Rotate crops and remove any plant debris after harvest.",
      riskLevel: "High",
      alternativeCrops: "Switch to resistant crop varieties such as 'AAC Tenacious'."
    },
    "Healthy": {
      symptoms: "No disease detected! Your plant looks healthy.",
      treatment: "No treatment needed! Keep monitoring for early signs of disease.",
      pesticide: "Regular neem oil spray can prevent future infections.",
      prevention: "Continue regular monitoring and follow organic farming practices.",
      riskLevel: "Low",
      alternativeCrops: "Keep growing your current crop. No change needed!"
    }
  };

  // Get disease info or default to "No data available"
  const diseaseInfo = diseaseData[prediction] || {
    symptoms: "No information available.",
    treatment: "No specific treatment found.",
    pesticide: "No recommended pesticides.",
    prevention: "No prevention methods available.",
    riskLevel: "Unknown",
    alternativeCrops: "No recommendations."
  };

  // Risk Level Indicator Styling
  const riskColors = {
    "High": "text-red-600 bg-red-100 border-red-500",
    "Moderate": "text-yellow-600 bg-yellow-100 border-yellow-500",
    "Low": "text-green-600 bg-green-100 border-green-500",
    "Unknown": "text-gray-600 bg-gray-100 border-gray-500"
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-24">
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col md:flex-row gap-6">
        
        {/* Left Side - Image */}
        {imageUrl && (
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={decodeURIComponent(imageUrl)} alt="Uploaded Crop" className="w-80 h-80 rounded-lg shadow-md object-cover"/>
          </div>
        )}

        {/* Right Side - Prediction & Treatment Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-green-800 text-center md:text-left">Prediction Result</h1>

          {/* Prediction Details */}
          {prediction ? (
            <div className="bg-green-100 text-green-900 p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-2">Predicted Disease:</p>
              <p className="text-2xl font-bold">{prediction}</p>
              <p className="text-lg mt-2">Accuracy: <span className="font-semibold">{confidence}%</span></p>
            </div>
          ) : (
            <p className="text-lg text-gray-700 text-center">No prediction available. Please upload an image first.</p>
          )}

          {/* Symptoms Section */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-bold text-green-700">🩺 Symptoms</h2>
            <p className="text-gray-700">{diseaseInfo.symptoms}</p>
          </div>

          {/* Treatment & Pesticide Section */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-bold text-green-700">💊 Treatment & Pesticides</h2>
            <p className="text-gray-700"><strong>Treatment:</strong> {diseaseInfo.treatment}</p>
            <p className="text-gray-700 mt-2"><strong>Recommended Pesticide:</strong> {diseaseInfo.pesticide}</p>
          </div>

          {/* Prevention Section */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-bold text-green-700">🛑 Prevention Tips</h2>
            <p className="text-gray-700">{diseaseInfo.prevention}</p>
          </div>

          {/* Risk Level Indicator */}
          <div className={`mt-4 p-4 rounded-lg shadow-md border ${riskColors[diseaseInfo.riskLevel]}`}>
            <h2 className="text-lg font-bold text-center">⚠️ Risk Level</h2>
            <p className="text-lg text-center font-semibold">{diseaseInfo.riskLevel}</p>
          </div>

          {/* Alternative Crops Section */}
          <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-bold text-green-700">🌱 Alternative Crops</h2>
            <p className="text-gray-700">{diseaseInfo.alternativeCrops}</p>
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => window.history.back()}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition duration-300 shadow-md"
            >
              Back to Upload
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
