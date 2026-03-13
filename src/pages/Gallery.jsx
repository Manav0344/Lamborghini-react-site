import { useState, useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  // Gallery Images — all from Unsplash (free, no auth, HD)
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Aventador SVJ",
      category: "aventador"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Huracán Performante",
      category: "huracan"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Revuelto",
      category: "revuelto"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Aventador Roadster",
      category: "aventador"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Huracán STO",
      category: "huracan"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Sián FKP 37",
      category: "hybrid"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1609348545816-75a43897e2fe?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Countach LPI 800-4",
      category: "countach"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1675436060461-a6ae9f1a49e4?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Urus Performante",
      category: "urus"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=1200&h=900&fit=crop&q=90",
      alt: "Lamborghini Aventador Ultimae",
      category: "aventador"
    }
  ]

  const categories = [
    { id: 'all',       name: 'All Models' },
    { id: 'aventador', name: 'Aventador'  },
    { id: 'huracan',   name: 'Huracán'   },
    { id: 'revuelto',  name: 'Revuelto'  },
    { id: 'urus',      name: 'Urus'      },
    { id: 'countach',  name: 'Countach'  },
  ]

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  useEffect(() => {
    const savedFavorites = localStorage.getItem('galleryFavorites')
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
  }, [])

  const toggleFavorite = (imageId) => {
    const isFavorite = favorites.includes(imageId)
    const updatedFavorites = isFavorite
      ? favorites.filter((id) => id !== imageId)
      : [...favorites, imageId]
    setFavorites(updatedFavorites)
    localStorage.setItem('galleryFavorites', JSON.stringify(updatedFavorites))
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-down">
          <h1 className="text-6xl md:text-7xl font-black mb-6 gold-gradient">
            GALLERY
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness automotive artistry in motion
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-16" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-500/25 scale-105'
                  : 'bg-white/10 border border-white/30 text-gray-300 hover:bg-white/20 hover:text-white hover:border-white/50'
              }`}
            >
              <span className="relative z-10">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" data-aos="fade-up" data-aos-delay="100">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-white/20 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Favorite Button */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleFavorite(image.id) }}
                className={`absolute top-6 right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-yellow-400/30 transition-all duration-300 backdrop-blur-sm ${
                  favorites.includes(image.id)
                    ? 'bg-yellow-400 text-black scale-110 shadow-lg shadow-yellow-500/50'
                    : 'text-gray-400 hover:text-yellow-400 hover:scale-110'
                }`}
                title="Add to favorites"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Quick View Button */}
              <button
                onClick={() => setActiveImage(image)}
                className="absolute top-6 left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:scale-110"
                title="Quick view"
              >
                <ZoomIn className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div
                className="relative h-80 overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:rotate-1"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = `https://placehold.co/1200x900/1a1a2e/FFD700?text=${encodeURIComponent(image.alt)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Overlay */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-yellow-400 transition-colors">
                    {image.alt}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-widest">{image.category.toUpperCase()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="200">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: `${favorites.length}`, label: "Saved Images", icon: "💾" },
              { num: `${filteredImages.length}`,  label: "Showing",      icon: "🏎️" },
              { num: "100+",                       label: "Photos",       icon: "📸" },
              { num: "4K",                         label: "Resolution",   icon: "🎥" }
            ].map((stat, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black gold-gradient mb-2">{stat.num}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 -right-12 z-50 p-4 rounded-full bg-black/80 hover:bg-red-500/80 transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Favorite Button in Modal */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleFavorite(activeImage.id) }}
              className={`absolute -top-12 -left-12 z-50 p-4 rounded-full bg-black/80 hover:bg-yellow-400/80 transition-all duration-300 backdrop-blur-sm ${
                favorites.includes(activeImage.id) ? 'bg-yellow-400 text-black' : 'text-gray-300'
              }`}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Full-size Image */}
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-xl rounded-2xl p-8">
              <h3 className="text-3xl font-black mb-2 gold-gradient">{activeImage.alt}</h3>
              <p className="text-xl text-gray-300">High-resolution showcase · {activeImage.category.toUpperCase()}</p>
            </div>
          </div>
        </div>
      )}

      {/* Saved Badge */}
      {favorites.length > 0 && (
        <div
          className="fixed bottom-6 right-6 bg-yellow-400/20 border border-yellow-400/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl z-40"
          data-aos="fade-right"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl">💾</div>
            <div>
              <p className="font-bold text-yellow-300">{favorites.length} image{favorites.length > 1 ? 's' : ''} saved</p>
              <p className="text-sm text-yellow-400/70">Check your favorites anytime</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery