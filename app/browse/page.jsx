"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function OutputPage() {
  const router = useRouter();
  const { query } = router;
  const image = query?.image; // Check if 'image' exists in router.query safely
  const [results, setResults] = useState(null);

  // Crop data (weather, temperature, rainfall, and soil conditions)
  const cropData = {
    Rice: {
      temperature: "15°-27° C",
      rainfall: "100-150 cm",
      soil: "Heavy-clayey to clayey-loam",
      image: "rice.jpg", // Add the actual path to the crop image
      description: "Rice thrives in warm and humid climates with temperatures between 20-35°C. It requires heavy rainfall ranging from 100-200 cm or adequate irrigation for optimal growth. Clayey or loamy soils that retain water are ideal for rice cultivation. This crop is mainly grown in lowlands or waterlogged areas, making it a staple food for many countries. Asia is the largest producer of rice globally, with India and China leading the production.",
    },
    
    Wheat: {
      temperature: "12°-25°C",
      rainfall: "25-75 cm",
      soil: "Well-drained-light clay to heavy clay",
      image: "wheat.jpg", // Add path to crop image
      description: "Wheat prefers a cool growing season with temperatures of 10-25°C, making it suitable for temperate climates. It requires moderate rainfall of about 50-75 cm and cannot tolerate waterlogged conditions. The crop grows best in well-drained loamy or clayey soil. Wheat is widely cultivated in regions with distinct winter and spring seasons, such as North America, Europe, and parts of Asia. It is a major source of carbohydrates worldwide.",
    },
    Maize: {
      temperature: "15°-27°C",
      rainfall: "65-125 cm",
      soil: "Deep-heavy clay to light sandy loam",
      image: "maize.jpg", // Add path to crop image
      description: "Maize, also known as corn, thrives in warm climates with temperatures between 21°-27°C. It requires moderate rainfall of about 50-100 cm and grows well in fertile, well-drained loamy soils. Maize is a versatile crop used for food, animal feed, and industrial purposes. It is widely cultivated in countries like the USA, China, and Brazil and is a staple crop in many regions.",
    },
    Millets: {
      temperature: "20°-35°C",
      rainfall: "25-75 cm",
      soil: "Sandy-loam to clayey loam",
      image: "millets.jpg", // Add path to crop image
      description: "Millets are hardy crops that grow in dry, hot regions with minimal rainfall. They thrive in sandy or light soils and are highly drought-resistant. Popular millets include sorghum, finger millet, and foxtail millet. They are nutritionally dense, rich in proteins and minerals, and are often cultivated in arid regions of Africa and India. Millets are increasingly promoted for sustainable agriculture.",
    },
    Bajra: {
      temperature: "25°-35°C",
      rainfall: "25-60 cm",
      soil: "Sandy loam to loam",
      image: "bajra.jpg", // Add path to crop image
      description: "Bajra grows well in hot and dry climates, with an optimal temperature range of 25-30°C. It is a drought-tolerant crop that requires 40-60 cm of rainfall and is suited for sandy or light soils with good drainage. This hardy crop is often cultivated in arid and semi-arid regions, particularly in India and Africa. Bajra is known for its nutritional value, being rich in iron and other essential nutrients."
    },
    Pulses: {
      temperature: "20°-27°C",
      rainfall: "25-60 cm",
      soil: "Sandy-loam",
      producers: "India: Madhya Pradesh, Rajasthan, Uttar Pradesh, Maharashtra, Punjab, Haryana, Andhra Pradesh, Karnataka, Tamil Nadu, West Bengal",
      image: "pulses.jpg", // Add path to crop image
      description: "Pulses, including lentils, chickpeas, and black gram, thrive in warm climates with temperatures ranging from 20°-30°C. They require low to moderate rainfall of about 30-75 cm and are best suited for well-drained loamy or sandy soils. Pulses are nitrogen-fixing crops that improve soil fertility and are a vital source of protein and nutrients. India is the largest producer and consumer of pulses, making them an essential part of the diet in many countries."
    },
    Lentil: {
      temperature: "15°-25°C",
      rainfall: "25-50 cm",
      soil: "Loamy to clayey loam",
      image: "lentil.jpg", // Add path to crop image
      description: "Pulses, including lentils, chickpeas, and black gram, thrive in warm climates with temperatures ranging from 20°-30°C. They require low to moderate rainfall of about 30-75 cm and are best suited for well-drained loamy or sandy soils. Pulses are nitrogen-fixing crops that improve soil fertility and are a vital source of protein and nutrients. India is the largest producer and consumer of pulses, making them an essential part of the diet in many countries."
    },
    Oilseeds: {
      temperature: "15°-30°C",
      rainfall: "30-50 cm",
      soil: "Loam to clayey loam",
      image: "oilseeds.jpg", // Add path to crop image
      description:"Oilseed crops, including mustard, sunflower, and sesame, thrive in varied climates depending on the type. Generally, they prefer warm climates and moderate rainfall ranging from 50-100 cm. Fertile, well-drained loamy soils are ideal for these crops. Oilseeds are a major source of vegetable oils and are widely used in cooking, biofuels, and industry. Countries like India, China, and Argentina are major producers.",
    },
    Groundnut: {
      temperature: "20°-30°C",
      rainfall: "50-75 cm",
      soil: "Well-drained-sandy loams, red and black cotton",
      image: "groundnut.jpg", // Add path to crop image
      description:"Groundnut thrives in warm climates with temperatures of 20-30°C. It requires moderate rainfall between 50-75 cm, with well-distributed moisture throughout the growing season. Sandy loam or black soils rich in organic matter are ideal for groundnut cultivation. Groundnuts are a major oilseed crop and are also consumed as snacks. They are widely grown in India, China, and the USA."
    },
    Sugarcane: {
      temperature: "20°-35°C",
      rainfall: "85-165 cm",
      soil: "Well-drained alluvium, black, red and brown regur soil",
      image: "sugarcane.jpg", // Add path to crop image
      description:"Sugarcane flourishes in tropical and subtropical climates with temperatures of 20-35°C. It has a high water demand, requiring 75-150 cm of rainfall or irrigation. Deep, fertile loamy or clayey soils with good drainage are suitable for its growth. Sugarcane is the main source of sugar production globally and is also used for ethanol production. Brazil, India, and Thailand are the leading producers of sugarcane."
    },
    SugarBeet: {
      temperature: "10°-25°C",
      rainfall: "25-50 cm",
      soil: "Well-drained-loamy soil",
      producers: "France, USA, Germany, Russia, China, Ukraine, Poland, Turkey",
      image: "sugarbeet.jpg", // Add path to crop image
      description:"Sugar beet grows in cool temperate climates with temperatures of 15-20°C. It requires moderate rainfall of 50-70 cm and well-drained loamy soils rich in organic matter. Sugar beet is grown for sugar extraction and animal feed. It is primarily cultivated in Europe, the USA, and Russia. The crop has a shorter growing season compared to sugarcane.",
    },
    Cotton: {
      temperature: "18°-27°C",
      rainfall: "60-110 cm",
      soil: "Well-drained loam, and regur (black-earth)",
      image: "cotton.jpg", // Add path to crop image
      description:"Cotton grows best in warm, dry climates with temperatures ranging from 21°-30°C. It requires moderate rainfall of about 50-100 cm, along with well-drained, loamy soils that allow good water retention. Cotton is a major cash crop, primarily grown for its fibers used in the textile industry. Major producers include India, China, and the USA. The cotton plant requires a long growing season and thrives in areas with plenty of sunshine, making it suitable for tropical and subtropical regions."
    },
    Tea: {
      temperature: "15°-35°C",
      rainfall: "100-250 cm",
      soil: "Well-drained, light loamy soil",
      producers: "India, China, Sri Lanka, Kenya, Indonesia, Bangladesh, Turkey",
      image: "tea.jpg", // Add path to crop image
      description:"Tea thrives in tropical and subtropical climates with temperatures between 18°-30°C. It requires abundant rainfall, around 150-250 cm annually, and well-drained, acidic soils. Tea plants prefer high altitudes with cool and misty conditions, which help develop the flavor and aroma of the leaves. Major producers of tea include China, India, and Kenya, where it is cultivated in large plantations. Tea is not only a popular beverage but also an important economic crop in many countries."
    },
    Coffee: {
      temperature: "15°-28°C",
      rainfall: "125-225 cm",
      image: "coffee.jpg", // Add path to crop image
      description:"Coffee grows best in tropical climates with temperatures ranging from 18°-24°C. It requires abundant rainfall of about 100-150 cm annually and well-drained, fertile soils rich in organic matter. Coffee plants thrive at higher altitudes, often in mountainous regions, which contribute to the development of the distinct flavors of the beans. Major coffee producers include Brazil, Vietnam, and Colombia. Coffee is one of the most widely consumed beverages worldwide and a significant cash crop in many countries."
    },
    Cocoa: {
      temperature: "18°-35°C",
      rainfall: "100-250 cm",
      soil: "Well-drained alluvium",
      image: "cocoa.jpg", // Add path to crop image
      description:"Cocoa thrives in hot, humid climates with temperatures between 21°-30°C. It requires heavy rainfall, approximately 100-250 cm annually, and well-drained, fertile soils that are slightly acidic. Cocoa plants prefer shaded areas and are typically grown in tropical regions, particularly in West Africa, Latin America, and Southeast Asia. The seeds, or beans, are used to produce chocolate and other cocoa-based products, making cocoa a highly valuable crop for the global confectionery industry."
    },
    Rubber: {
      temperature: "27°C",
      rainfall: "150-250 cm",
      soil: "Rich-well-drained alluvial soil",
      image: "rubber.jpg", // Add path to crop image
      description:"Rubber grows best in hot and humid climates with temperatures ranging from 25°-35°C. It requires high rainfall, about 150-250 cm annually, and well-drained, fertile soils. Rubber trees thrive in tropical regions, especially in countries like Thailand, Indonesia, and Malaysia, which are the largest producers. The latex extracted from rubber trees is used for manufacturing various products, including tires, footwear, and medical supplies. Rubber cultivation requires several years of growth before tapping for latex, making it a long-term investment for farmers."
    },
    Jute: {
      temperature: "25°-35°C",
      rainfall: "150-250 cm",
      soil: "Well-drained alluvial soil",
      image: "jute.jpg", // Add path to crop image
      description:"Jute thrives in warm, humid climates with temperatures between 25°-35°C. It requires heavy rainfall of about 150-250 cm annually and grows best in well-drained, fertile, loamy soils. Jute is primarily cultivated in countries like India and Bangladesh, where it is used to produce burlap, ropes, and sacks. The plant grows quickly, typically in 4-6 months, and is highly valued for its strong, biodegradable fibers. Jute is also an eco-friendly alternative to synthetic materials, making it an important crop in the textile and packaging industries."
    },
    Flax: {
      temperature: "10°-20°C",
      rainfall: "15-20 cm",
      soil: "Rich loam or clayey loam",
      image: "flax.jpg", // Add path to crop image
      description:"Flax thrives in temperate climates with cool to moderate temperatures ranging from 15°-20°C. It requires moderate rainfall of around 50-100 cm annually and grows best in well-drained, fertile loamy or sandy soils. Flax is primarily cultivated for its seeds, which are used to produce flaxseed oil, and its fibers, which are used to make linen fabric. Major producers include Canada, Russia, and Europe. Flax is known for its high nutritional value and versatility in both food and textile industries."
    },
    Coconut: {
      temperature: "27°C",
      rainfall: "100-250 cm, up to 600 m above sea level",
      soil: "Lateritic red, sandy alluvial sandy",
      image: "coconut.jpg", // Add path to crop image
      description:"Coconut trees thrive in tropical climates with temperatures ranging from 27°-32°C. They require high rainfall, typically 150-250 cm annually, and well-drained, sandy or loamy soils. Coconuts are grown primarily in coastal areas and are a major crop in countries like Indonesia, the Philippines, and India. The fruit's meat, milk, and oil are used in various culinary, cosmetic, and medicinal applications. Coconuts also have economic importance in the production of coir, a fiber used in ropes and mats. The coconut tree is often referred to as the tree of life due to its wide range of uses."
    },
    OilPalm: {
      temperature: "27°-33°C (maximum), 22°-24°C (minimum)",
      rainfall: "250-400 cm well distributed in the year",
      soil: "Deep-loamy and alluvial soil",
      image: "oilpalm.jpg", // Add path to crop image
      description:"Oil palm thrives in tropical climates with temperatures ranging from 24°-30°C. It requires high rainfall, approximately 2000-3000 mm annually, and well-drained, fertile soils. Oil palm is primarily cultivated in Southeast Asia, particularly in Malaysia and Indonesia, which are the largest producers. The palm produces fruits from which palm oil is extracted, a widely used vegetable oil in food, cosmetics, and biofuels. Oil palm plantations require extensive land and several years for the trees to mature, but they are highly productive once established, making them a key economic crop."
    },
    Clove: {
      temperature: "25°-35°C",
      rainfall: "200-250 cm",
      soil: "Red alluvial soil",
      image: "clove.jpg", // Add path to crop image
      description:"Clove thrives in tropical climates with temperatures ranging from 20°-30°C. It requires high rainfall of around 150-250 cm annually and grows best in well-drained, loamy or volcanic soils. Clove trees are typically grown at elevations of 400-800 meters above sea level. Major producers include Indonesia, Madagascar, and Sri Lanka. The aromatic flower buds of the clove tree are harvested and dried to produce a spice used in cooking, medicine, and fragrances. Cloves have been valued for their strong flavor and antiseptic properties for centuries."
    },
    BlackPepper: {
      temperature: "15°-40°C",
      rainfall: "200-300 cm. Height up to 1500 m above sea level",
      soil: "Rich in humus, red-loam to sandy loam, and red lateritic sandy loam",
      image: "blackpepper.jpg", // Add path to crop image
      description:"Black pepper thrives in tropical climates with temperatures ranging from 20°-30°C. It requires high rainfall of about 150-250 cm annually and well-drained, fertile soils rich in organic matter. Black pepper plants are climbing vines that grow best in shaded areas and need support from trees or trellises. Major producers include India, Vietnam, and Indonesia. The peppercorns, which are the dried fruit of the plant, are used as a spice and are one of the most widely traded spices in the world. Black pepper is prized for its sharp, spicy flavor and medicinal properties."
    },
    Cardamom: {
      temperature: "10°-35°C",
      rainfall: "150-400 cm, height 600-1500 m",
      soil: "Well-drained lateritic",
      image: "cardamom.jpg", // Add path to crop image
      description:"Cardamom thrives in tropical climates with temperatures ranging from 20°-30°C. It requires high rainfall of around 150-250 cm annually and grows best in well-drained, fertile, and slightly acidic soils. Cardamom plants prefer shaded environments and are typically grown in forests or plantations with partial sunlight. India, Guatemala, and Sri Lanka are the leading producers of cardamom. The aromatic seeds of the cardamom pods are used as a spice in cooking, beverages, and medicine, prized for their unique, sweet, and pungent flavor. It is often used in both savory and sweet dishes and is a key ingredient in many cultural cuisines."
    },
    Turmeric: {
      temperature: "20°-30°C",
      rainfall: "150-250 cm",
      soil: "Well-drained clayey loam or red loamy soil",
      image: "turmeric.jpg", // Add path to crop image
      description:"Turmeric thrives in tropical climates with temperatures ranging from 20°-30°C. It requires abundant rainfall, approximately 150-250 cm annually, and well-drained, fertile, and slightly acidic soils. Turmeric is typically grown in regions with high humidity and well-irrigated fields. India is the largest producer of turmeric, which is mainly cultivated in the southern and eastern parts of the country. The rhizomes of the turmeric plant are harvested and dried to produce the bright yellow spice known for its distinctive flavor and medicinal properties. Turmeric is widely used in cooking, particularly in curries, and has been valued for its anti-inflammatory and antioxidant benefits in traditional medicine."
    },
  };

  useEffect(() => {
    if (image) {
      fetch("/api/diagnose", {
        method: "POST",
        body: JSON.stringify({ image }), // Pass the image URL or form data as needed
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.results) {
            setResults(data.results); // Check if results exist
          } else {
            console.error("No results found in the response data");
            setResults([]); // Fallback to an empty array if no results are found
          }
        })
        .catch((error) => console.error("Error fetching diagnosis:", error));
    }
  }, [image]);

  return (
    <div className="bg-gradient-to-r from-green-950 to-slate-500 min-h-screen flex flex-col items-center justify-center text-white pt-20">
      <h1 className="text-3xl font-bold mb-4">Crop Analysis Result</h1>

     

      <div className="mt-12 w-full px-4">
        <h2 className="text-2xl font-bold mb-4">Crop Conditions</h2>
        {Object.keys(cropData).map((crop) => (
          <div key={crop} className="bg-white text-black p-6 rounded-lg shadow-lg mb-6 flex flex-row items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{crop}</h3>
              <p><strong>Temperature:</strong> {cropData[crop].temperature}</p>
              <p><strong>Rainfall:</strong> {cropData[crop].rainfall}</p>
              <p><strong>Soil:</strong> {cropData[crop].soil}</p>
              <p><strong>description:</strong> {cropData[crop].description}</p>
              {cropData[crop].producers && (
                <p><strong>Producers:</strong> {cropData[crop].producers}</p>
              )}
            </div>
            <div className="flex-shrink-0 ml-6">
              <img
                src={cropData[crop].image}
                alt={crop}
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
