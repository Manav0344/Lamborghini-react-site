import { useState, useEffect } from 'react'

const Models = () => {
  const [favoriteModels, setFavoriteModels] = useState([])

  const models = [
    {
      id: 1,
      name: "Aventador SVJ",
      price: "$507,353",
      hp: "759 HP",
      topSpeed: "217 mph",
      // Lamborghini Aventador – Unsplash free HD
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 2,
      name: "Huracán STO",
      price: "$331,000",
      hp: "630 HP",
      topSpeed: "193 mph",
      // Lamborghini Huracán – Unsplash free HD
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 3,
      name: "Revuelto",
      price: "$608,358",
      hp: "1,001 HP",
      topSpeed: "217+ mph",
      // Lamborghini V12 flagship – Unsplash free HD
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 4,
      name: "Urus Performante",
      price: "$268,654",
      hp: "657 HP",
      topSpeed: "190 mph",
      // Lamborghini Urus SUV – Unsplash free HD
      image: "https://images.unsplash.com/photo-1675436060461-a6ae9f1a49e4?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 5,
      name: "Countach LPI 800-4",
      price: "$2,500,000",
      hp: "803 HP",
      topSpeed: "221 mph",
      // Classic Lamborghini Countach – Unsplash free HD
      image: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 6,
      name: "Sian FKP 37",
      price: "$3,600,000",
      hp: "819 HP",
      topSpeed: "217+ mph",
      // Yellow Lamborghini supercar – Unsplash free HD
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&h=750&fit=crop&q=90"
    },
    {
      id: 7,
      name: "Huracán Tecnica",
      price: "$275,000",
      hp: "640 HP",
      topSpeed: "196 mph",
      // Lamborghini on track – Unsplash free HD
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=750&fit=crop&q=90"
    }
  ]

  useEffect(() => {
    const saved = localStorage.getItem('favoriteModels')
    if (saved) {
      setFavoriteModels(JSON.parse(saved))
    }
  }, [])

  const toggleFavorite = (modelId) => {
    const isFavorite = favoriteModels.includes(modelId)
    let updatedFavorites

    if (isFavorite) {
      updatedFavorites = favoriteModels.filter(id => id !== modelId)
    } else {
      updatedFavorites = [...favoriteModels, modelId]
    }

    setFavoriteModels(updatedFavorites)
    localStorage.setItem('favoriteModels', JSON.stringify(updatedFavorites))
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-down" data-aos-duration="1200">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gold-gradient" data-aos="zoom-in" data-aos-delay="300">
            OUR MODELS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="500">
            Choose your weapon from our legendary lineup of Italian supercars
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-32">
          {models.map((model, index) => (
            <div
              key={model.id}
              className="group relative bg-gradient-to-br from-black/80 to-gray-900 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            >
              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(model.id)}
                className={`absolute top-6 right-6 z-20 p-3 rounded-full bg-black/70 backdrop-blur-sm hover:bg-yellow-400/30 transition-all duration-300 hover:scale-110 shadow-lg ${
                  favoriteModels.includes(model.id)
                    ? 'bg-yellow-400 text-black scale-110 shadow-yellow-500/50'
                    : 'text-gray-400 hover:text-yellow-400'
                }`}
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out hover:brightness-110"
                  onError={(e) => {
                    // Fallback to a reliable placeholder if Unsplash fails
                    e.target.onerror = null
                    e.target.src = `https://placehold.co/1200x750/1a1a2e/FFD700?text=${encodeURIComponent(model.name)}`
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-400 transition-all duration-500 group-hover:translate-y-[-2px]">
                  {model.name}
                </h3>
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between group-hover:text-yellow-300 transition-colors duration-300">
                    <span className="text-gray-400">Price</span>
                    <span className="font-bold text-lg">{model.price}</span>
                  </div>
                  <div className="flex justify-between group-hover:text-yellow-300 transition-colors duration-300">
                    <span className="text-gray-400">Power</span>
                    <span className="font-bold text-lg">{model.hp}</span>
                  </div>
                  <div className="flex justify-between group-hover:text-yellow-300 transition-colors duration-300">
                    <span className="text-gray-400">Top Speed</span>
                    <span className="font-bold text-lg">{model.topSpeed}</span>
                  </div>
                </div>
                <button className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-black font-bold rounded-2xl hover:shadow-2xl hover:scale-105 hover:shadow-yellow-500/50 transition-all duration-500 group-hover:from-orange-500 group-hover:to-yellow-400 transform hover:-translate-y-1">
                  CONFIGURE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Comparison Section */}
        <div className="mb-32" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gold-gradient" data-aos="zoom-in">
              PERFORMANCE COMPARISON
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              See how our models stack up against each other
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 min-w-max">
              {[
                { label: "0-60 MPH", values: ["2.8s", "3.0s", "2.5s", "3.3s", "2.8s", "2.7s", "3.2s"] },
                { label: "Quarter Mile", values: ["10.4s", "10.6s", "9.8s", "11.2s", "10.3s", "10.1s", "10.7s"] },
                { label: "Downforce", values: ["450kg", "380kg", "520kg", "280kg", "410kg", "480kg", "360kg"] },
                { label: "Weight", values: ["1525kg", "1339kg", "1772kg", "2199kg", "1570kg", "1595kg", "1389kg"] }
              ].map((spec, specIndex) => (
                <div key={specIndex} className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300" data-aos="fade-left" data-aos-delay={specIndex * 100}>
                  <div className="text-sm text-yellow-400 uppercase tracking-wider mb-4 font-bold">{spec.label}</div>
                  <div className="space-y-2">
                    {spec.values.map((value, modelIndex) => (
                      <div key={modelIndex} className={`text-lg font-bold ${modelIndex === 2 ? 'text-yellow-400' : 'text-gray-200'}`}>
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-32 grid md:grid-cols-4 gap-8 text-center" data-aos="fade-up" data-aos-duration="1000">
          {[
            { num: "1,001", label: "Peak HP", icon: "⚡" },
            { num: "350", label: "MPH Max", icon: "🚀" },
            { num: "60+", label: "Years", icon: "🏆" },
            { num: "15", label: "Models", icon: "🔥" }
          ].map((stat, index) => (
            <div key={index} className="p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-yellow-400/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                 data-aos="zoom-in"
                 data-aos-delay={index * 200}
                 data-aos-duration="800">
              <div className="text-6xl mb-6">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-black gold-gradient mb-6">
                {stat.num}
              </div>
              <div className="text-xl text-gray-300 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Heritage Timeline Section */}
        <div className="mb-32" data-aos="fade-up" data-aos-duration="1200">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gold-gradient" data-aos="zoom-in">
              HERITAGE TIMELINE
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              60 years of engineering perfection
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-orange-500 hidden md:block" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  year: "1963", model: "350 GTV", desc: "First Lamborghini",
                  image: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=800&h=500&fit=crop&q=90"
                },
                {
                  year: "1990", model: "Diablo", desc: "First 200mph car",
                  image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop&q=90"
                },
                {
                  year: "2011", model: "Aventador", desc: "V12 Flagship",
                  image: "https://images.unsplash.com/photo-1609348545816-75a43897e2fe?w=800&h=500&fit=crop&q=90"
                },
                {
                  year: "2023", model: "Revuelto", desc: "First Hybrid",
                  image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=500&fit=crop&q=90"
                }
              ].map((milestone, index) => (
                <div key={index} className={`group relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-yellow-400/50 transition-all duration-700 hover:scale-105 ${index % 2 ? 'md:translate-y-12' : ''}`}
                     data-aos="fade-up"
                     data-aos-delay={index * 200}>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center text-2xl shadow-2xl font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  <img
                    src={milestone.image}
                    alt={milestone.model}
                    className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://placehold.co/800x500/1a1a2e/FFD700?text=${encodeURIComponent(milestone.model)}`
                    }}
                  />
                  <h4 className="text-2xl font-black mb-2 group-hover:text-yellow-400">{milestone.model}</h4>
                  <p className="text-gray-300">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center py-20 px-8 bg-gradient-to-r from-black/70 to-transparent backdrop-blur-xl rounded-3xl border border-yellow-400/30 shadow-2xl" data-aos="zoom-in" data-aos-duration="1000">
          <h2 className="text-5xl md:text-6xl font-black mb-8 gold-gradient">
            READY TO OWN A LEGEND?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the elite. Experience the thrill of Lamborghini ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-xl rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-yellow-500/25">
              BUILD YOURS
            </button>
            <button className="px-12 py-6 border-4 border-yellow-400 text-yellow-400 font-black text-xl rounded-3xl hover:bg-yellow-400 hover:text-black transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/50">
              VIEW INVENTORY
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models