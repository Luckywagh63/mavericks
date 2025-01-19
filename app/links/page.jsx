import Head from 'next/head'

export default function CropDiagnosis() {
  return (
    <>
      <Head>
        <title>Crop Disease Diagnosis</title>
        <meta name="description" content="Learn about crop disease diagnosis with informative YouTube videos, blogs, and news articles." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">Crop Disease Diagnosis Resources</h1>

          <p className="text-lg text-center text-gray-700 mb-12">
            Explore these valuable resources to learn more about crop disease diagnosis and management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* YouTube Video Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YouTube Videos</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=hf17M5g4D5k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    How to Identify Early Blight in Tomatoes | Crop Disease Diagnosis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=J7RjlgF2N8I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Late Blight Disease in Potatoes - Identification and Control
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=NiXSKcHrKrg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Managing Bacterial Spot in Tomatoes
                  </a>
                </li>
              </ul>
            </div>

            {/* Blog Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Blogs</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.agriculture.com/planting/crop-diseases/how-to-spot-and-treat-early-blight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    How to Spot and Treat Early Blight | Agriculture.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gardenerspath.com/plants/vegetables/late-blight-potatoes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Late Blight in Potatoes: What You Need to Know | Gardeners Path
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bhg.com/gardening/pests-diseases-animals/bacterial-spot-on-tomatoes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Bacterial Spot on Tomatoes: Causes and Control | Better Homes & Gardens
                  </a>
                </li>
              </ul>
            </div>

            {/* News Website Links */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">News Articles</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.bbc.com/news/science-environment-52117190"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    How Climate Change Is Affecting Crop Diseases | BBC News
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.theguardian.com/environment/2022/nov/03/potato-crops-climate-change-disease-risk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Climate Change Increases Disease Risk for Potato Crops | The Guardian
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npr.org/2020/02/20/805633033/crop-diseases-and-pests-are-spreading-faster-as-climate-change-worsens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Crop Diseases and Pests Are Spreading Faster Due to Climate Change | NPR
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
