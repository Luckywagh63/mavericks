"use client";
import React, { useState } from "react";

const data = {
  fertilizers: [
    {
      title: "Nitrogenous Fertilizers",
      content:
        "Nitrogenous fertilizers supply nitrogen, a key nutrient for leafy and vegetative growth. Common fertilizers include urea, ammonium nitrate, and ammonium sulfate. These fertilizers enhance chlorophyll production and photosynthesis. However, overuse may lead to nitrogen leaching and soil acidification, harming soil health.",
    },
    {
      title: "Phosphatic Fertilizers",
      content:
        "Phosphatic fertilizers are essential for root development and energy transfer in plants. Examples include single superphosphate (SSP), triple superphosphate (TSP), and diammonium phosphate (DAP). These fertilizers ensure healthy flowering and fruiting. Phosphorus deficiency often leads to purple leaves and stunted growth.",
    },
    {
      title: "Potassic Fertilizers",
      content:
        "Potassic fertilizers provide potassium, vital for water regulation, enzyme activation, and disease resistance. Common types include muriate of potash (MOP) and sulfate of potash (SOP). They improve drought tolerance and overall plant health. Symptoms of potassium deficiency include yellowing leaf edges and weak stems.",
    },
    {
      title: "Micronutrient Fertilizers",
      content:
        "Micronutrient fertilizers supply essential trace elements like zinc, iron, manganese, and boron, which support critical enzyme and metabolic functions. Zinc sulfate, ferrous sulfate, and borax are common examples. Micronutrient deficiencies can lead to poor plant health and lower yields.",
    },
    {
      title: "Organic Fertilizers",
      content:
        "Organic fertilizers, such as compost, manure, and bone meal, enrich soil naturally by adding organic matter. They improve soil structure, enhance microbial activity, and provide slow-release nutrients. Organic farming practices heavily rely on these fertilizers for sustainable crop production.",
    },
  ],
  pesticides: [
    {
      title: "Insecticides",
      content:
        "Insecticides control harmful insects like aphids, beetles, and caterpillars that damage crops. Chemical insecticides include organophosphates (e.g., malathion), pyrethroids, and neonicotinoids. Integrated pest management (IPM) often combines them with biological controls to minimize environmental impact.",
    },
    {
      title: "Herbicides",
      content:
        "Herbicides are used to eliminate weeds that compete with crops for resources. Selective herbicides target specific weed species, while non-selective herbicides kill all vegetation. Glyphosate and atrazine are popular examples. Misuse can lead to herbicide resistance in weeds.",
    },
    {
      title: "Fungicides",
      content:
        "Fungicides combat fungal infections like rust, blight, and powdery mildew. They are available as contact fungicides (protective) and systemic fungicides (absorbed by the plant). Common examples include mancozeb, copper oxychloride, and carbendazim. Early application is crucial for effective protection.",
    },
    {
      title: "Biopesticides",
      content:
        "Biopesticides are derived from natural sources such as bacteria, fungi, and plant extracts. These eco-friendly alternatives include Bacillus thuringiensis (Bt) for insects, neem oil for various pests, and Trichoderma for soil-borne pathogens. They are safe for beneficial insects and the environment.",
    },
    {
      title: "Rodenticides",
      content:
        "Rodenticides are used to control rodents like rats and mice that damage crops and storage facilities. Common types include anticoagulants and acute toxins. Proper application and safety measures are essential to prevent harm to non-target species.",
    },
    {
      title: "Plant Growth Regulators",
      content:
        "While not strictly pesticides, plant growth regulators (PGRs) like gibberellic acid and ethylene inhibitors are used to control plant growth, enhance fruit size, and improve crop yields. They are an important tool in modern agriculture.",
    },
  ],
};

export default function FertilizersPesticides() {
  const [activeCategory, setActiveCategory] = useState("fertilizers");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-950 to-slate-500 text-white py-6 text-center shadow-lg pt-10">
        <div className="mt-16">
          <h1 className="text-3xl font-bold">
            Fertilizers and Pesticides Management
          </h1>
          <p className="text-lg mt-2">
            Learn about the types of fertilizers and pesticides essential for
            sustainable agriculture.
          </p>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              activeCategory === "fertilizers"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => {
              setActiveCategory("fertilizers");
              setActiveIndex(null);
            }}
          >
            Fertilizers
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeCategory === "pesticides"
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => {
              setActiveCategory("pesticides");
              setActiveIndex(null);
            }}
          >
            Pesticides
          </button>
        </div>

        {/* Accordion */}
        {data[activeCategory].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left font-bold text-xl text-green-700 hover:underline flex justify-between items-center"
            >
              {item.title}
              <span className="text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-700">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

