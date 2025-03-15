"use client";
import Navbar from "../components/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router for redirection

  // Handle file upload and send image to Flask API
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await fetch("http://127.0.0.1:3000/output", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error(`Error in prediction: ${response.statusText}`);
        }
  
        const data = await response.json();
        
        // Create a URL for the uploaded image
        const fileUrl = URL.createObjectURL(file);
  
        // Redirect to Output Page with Query Params
        router.push(
          `/output?prediction=${encodeURIComponent(data.prediction)}&confidence=${encodeURIComponent(data.confidence)}&image=${encodeURIComponent(fileUrl)}`
        );
      } catch (error) {
        console.error("Error while sending the image:", error);
        setError(error.message);
      }
    }
  };
  

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-r from-green-900 to-slate-600">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 flex-col-reverse md:flex-row">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Crop Diagnostics Made Easy</h1>
              <p className="text-lg mb-6">
                Upload a photo of your crops and get instant, accurate diagnostics to improve yields.
              </p>
              <button
                onClick={() => document.getElementById("fileInput").click()}
                className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
              >
                Upload Pic
              </button>
              <input id="fileInput" type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
            </div>
            <div className="md:w-1/2">
              <img src="/crop.jpeg" alt="Crops" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Section */}
      {error && (
        <section className="text-center py-8 bg-red-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Error</h2>
            <p className="text-lg mb-4">{error}</p>
          </div>
        </section>
      )}

      {/* Latest Crop News Section */}
      <section className="py-10 bg-gradient-to-r from-stone-800 to-stone-600 mt-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">🌾 Latest Crop News & Updates</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* News Item Template */}
            {[
              {
                img: "/bajra.jpg",
                title: "⚠️ Leaf Rust Outbreak Alert",
                desc: "Rising temperatures have increased wheat leaf rust cases across farms. Experts advise preventive spraying.",
                link: "https://www.agriculture.com/news",
              },
              {
                img: "/jute.jpg",
                title: "🌱 Organic Fertilizer Boosts Crop Yields",
                desc: "A new organic fertilizer is improving crop yields by 30%, reducing dependence on chemicals.",
                link: "https://www.farmprogress.com",
              },
              {
                img: "/ai.jpg",
                title: "🤖 AI-Powered Crop Monitoring",
                desc: "AI technology is helping farmers detect diseases early, preventing losses and improving efficiency.",
                link: "https://www.thehindubusinessline.com/economy/agri-business/",
              },
              {
                img: "/groundnut.jpg",
                title: "🌾 Drought-Resistant Crops Introduced",
                desc: "Scientists have developed drought-resistant crops to help farmers combat climate change effects.",
                link: "https://www.agriculture.com/news",
              },
              {
                img: "/pest.webp",
                title: "🦟 Natural Pesticide Alternatives",
                desc: "Farmers are switching to bio-friendly pesticides that are safe for crops and the environment.",
                link: "https://www.farmprogress.com",
              },
              {
                img: "/weather.jpg",
                title: "🌦️ Weather-Based Farming Strategies",
                desc: "Advanced weather forecasting tools are helping farmers plan irrigation and pest control.",
                link: "https://www.thehindubusinessline.com/economy/agri-business/",
              },
            ].map((news, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img src={news.img} alt={news.title} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-700">{news.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{news.desc}</p>
                  <a href={news.link} target="_blank" className="text-blue-600 font-semibold text-sm mt-2 inline-block">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12 bg-gradient-to-r from-green-800 to-slate-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">👨‍💻 Meet Our Team</h2>

          <div className="flex flex-col space-y-6">
            {[
              { name: "Lucky Wagh", role: "Full Stack Developer", img: "/law.jpg" },
              { name: "Harshita Pradhan", role: "Machine Learning", img: "/team2.jpg" },
              { name: "Sampada Bathe", role: "AI Researcher", img: "/team3.jpg" },
              { name: "Ved Ringne", role: "Backend Developer", img: "/team4.jpg" },
            ].map((member, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <img src={member.img} alt={member.name} className="w-28 h-28 rounded-full object-cover mr-6" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-green-700">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
