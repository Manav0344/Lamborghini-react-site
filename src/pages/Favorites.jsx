import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Trash2,
  Share2,
  Download,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const Favorites = () => {
  const [favoriteModels, setFavoriteModels] = useState([]);
  const [galleryFavorites, setGalleryFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState("models");
  const [loading, setLoading] = useState(true);

  const allModels = [
    {
      id: 1,
      name: "Aventador SVJ",
      price: "$507,353",
      hp: "759 HP",
      topSpeed: "217 mph",
      image: "/api/placeholder/500/300/1a1a2e/FFD700",
      category: "Track",
    },
    {
      id: 2,
      name: "Huracán STO",
      price: "$331,000",
      hp: "630 HP",
      topSpeed: "193 mph",
      image: "/api/placeholder/500/300/000000/FFD700",
      category: "Track",
    },
    {
      id: 3,
      name: "Revuelto",
      price: "$608,358",
      hp: "1,001 HP",
      topSpeed: "217+ mph",
      image: "/api/placeholder/500/300/16213e/FFD700",
      category: "Hybrid",
    },
  ];

  const allGalleryImages = [
    {
      id: 1,
      src: "/api/placeholder/800/600/1a1a2e/FFD700",
      alt: "Aventador SVJ",
      model: "Aventador SVJ",
    },
    {
      id: 2,
      src: "/api/placeholder/800/600/000000/FFD700",
      alt: "Huracán STO",
      model: "Huracán STO",
    },
    {
      id: 3,
      src: "/api/placeholder/800/600/16213e/FFD700",
      alt: "Revuelto",
      model: "Revuelto",
    },
    {
      id: 4,
      src: "/api/placeholder/800/600/1a1a2e/FFA500",
      alt: "Aventador Roadster",
      model: "Aventador SVJ",
    },
  ];

  useEffect(() => {
    const models = JSON.parse(localStorage.getItem("favoriteModels") ?? "[]");
    const images = JSON.parse(localStorage.getItem("galleryFavorites") ?? "[]");

    setFavoriteModels(models);
    setGalleryFavorites(images);
    setLoading(false);
  }, []);

  const removeFromFavorites = (type, id) => {
    if (type === "models") {
      const updated = favoriteModels.filter((modelId) => modelId !== id);
      setFavoriteModels(updated);
      localStorage.setItem("favoriteModels", JSON.stringify(updated));
    } else {
      const updated = galleryFavorites.filter((imageId) => imageId !== id);
      setGalleryFavorites(updated);
      localStorage.setItem("galleryFavorites", JSON.stringify(updated));
    }
  };

  const clearAllFavorites = () => {
    localStorage.removeItem("favoriteModels");
    localStorage.removeItem("galleryFavorites");
    setFavoriteModels([]);
    setGalleryFavorites([]);
  };

  const filteredModels = allModels.filter((model) =>
    favoriteModels.includes(model.id)
  );

  const filteredImages = allGalleryImages.filter((img) =>
    galleryFavorites.includes(img.id)
  );

  const totalFavorites = favoriteModels.length + galleryFavorites.length;

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-8"></div>
          <p className="text-xl text-gray-400">Loading your favorites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <Link
            to="/"
            className="inline-flex items-center space-x-3 text-2xl font-bold text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ChevronLeft className="w-8 h-8" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-6xl md:text-7xl font-black mb-6 text-yellow-400">
            YOUR FAVORITES
          </h1>

          <div className="flex items-center justify-center space-x-8 text-2xl mb-8">
            <div className="flex items-center space-x-2">
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
              <span className="font-bold">{totalFavorites}</span>
              <span className="text-gray-400">Total</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-bold">{favoriteModels.length}</span>
              <span className="text-gray-400">Models</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-bold">{galleryFavorites.length}</span>
              <span className="text-gray-400">Photos</span>
            </div>
          </div>

          {totalFavorites === 0 && (
            <p className="text-2xl text-gray-500">
              No favorites yet.{" "}
              <Link
                to="/models"
                className="text-yellow-400 hover:text-yellow-300 font-bold"
              >
                Start exploring →
              </Link>
            </p>
          )}
        </div>

        {/* TABS */}
        {totalFavorites > 0 && (
          <>
            <div className="flex justify-center gap-4 mb-16">
              {[
                { id: "all", label: "All Favorites", count: totalFavorites },
                { id: "models", label: "Models", count: favoriteModels.length },
                { id: "gallery", label: "Gallery", count: galleryFavorites.length },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-2xl font-bold transition ${
                    activeTab === tab.id
                      ? "bg-yellow-400 text-black"
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="text-center mb-16">
              <button
                onClick={clearAllFavorites}
                className="px-8 py-4 bg-red-500/20 border border-red-500 text-red-300 rounded-2xl hover:bg-red-500/30"
              >
                Clear All Favorites ({totalFavorites})
              </button>
            </div>

            {/* MODELS */}
            {(activeTab === "models" || activeTab === "all") &&
              filteredModels.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {filteredModels.map((model) => (
                    <div
                      key={model.id}
                      className="bg-white/5 rounded-3xl overflow-hidden border border-yellow-400/30"
                    >
                      <button
                        onClick={() =>
                          removeFromFavorites("models", model.id)
                        }
                        className="absolute m-4 p-2 bg-red-500 text-white rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>

                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-full h-64 object-cover"
                      />

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {model.name}
                        </h3>

                        <p className="text-gray-400 mb-4">
                          {model.price} • {model.hp}
                        </p>

                        <div className="flex gap-2">
                          <Link
                            to="/customize"
                            className="flex-1 bg-yellow-400 text-black py-2 rounded-lg text-center font-bold"
                          >
                            Configure
                          </Link>

                          <button className="p-2 bg-white/20 rounded-lg">
                            <Share2 size={16} />
                          </button>

                          <button className="p-2 bg-white/20 rounded-lg">
                            <Download size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            {/* GALLERY */}
            {(activeTab === "gallery" || activeTab === "all") &&
              filteredImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          removeFromFavorites("gallery", image.id)
                        }
                        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"
                      >
                        <Trash2 size={16} />
                      </button>

                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
};

const EmptyState = ({ message, actionLink, actionText }) => (
  <div className="text-center py-32">
    <Heart className="w-16 h-16 text-gray-500 mx-auto mb-6" />
    <h3 className="text-3xl text-gray-400 mb-6">{message}</h3>

    <Link
      to={actionLink}
      className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold"
    >
      {actionText}
      <ChevronRight size={18} />
    </Link>
  </div>
);

export default Favorites;