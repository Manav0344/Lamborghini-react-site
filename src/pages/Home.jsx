
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=2000&q=80"
  ];

  const featuredModels = [
    {
      name: "Aventador SVJ",
      image:
        "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
      price: "$507,353",
      category: "Track Monster"
    },
    {
      name: "Huracán STO",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
      price: "$331,000",
      category: "Road Warrior"
    },
    {
      name: "Revuelto",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      price: "$608,358",
      category: "Hybrid Beast"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });

    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SECTION */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center brightness-75 transition-all duration-1000"
            style={{
              backgroundImage: `url(${heroImages[currentHeroImage]})`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-black mb-8 gold-gradient">
            LAMBORGHINI
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Unleash the beast. Experience automotive perfection with cutting
            edge design and unrivaled performance.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link
              to="/models"
              className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-2xl hover:scale-105 transition"
            >
              DISCOVER MODELS
            </Link>

            <Link
              to="/gallery"
              className="px-12 py-5 border-2 border-yellow-400 text-yellow-400 font-bold text-xl rounded-2xl hover:bg-yellow-400 hover:text-black transition"
            >
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}

      <section className="py-32 px-4 max-w-7xl mx-auto">

        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-6xl font-black mb-6 gold-gradient">
            FEATURED MODELS
          </h2>

          <p className="text-2xl text-gray-300">
            Our most savage creations ready to dominate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {featuredModels.map((model, index) => (

            <Link
              key={index}
              to="/models"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-yellow-400/60 hover:scale-105 transition"
            >

              <div className="relative h-96 overflow-hidden">

                <img
                  src={model.image}
                  alt={model.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="text-3xl font-black mb-2">
                    {model.name}
                  </h3>

                  <p className="text-yellow-400 text-xl font-bold">
                    {model.price}
                  </p>

                  <span className="text-gray-300 text-sm">
                    {model.category}
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* WHY LAMBORGHINI */}

      <section className="py-32 px-4 bg-black">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-24" data-aos="fade-up">

            <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-black mb-6 gold-gradient">
              WHY LAMBORGHINI?
            </h2>

            <p className="text-2xl text-gray-300">
              Engineering excellence meets Italian passion
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                icon: "⚡",
                title: "Brutal Power",
                desc: "Up to 1000+ horsepower with extreme acceleration"
              },
              {
                icon: "🎨",
                title: "Italian Design",
                desc: "Aggressive styling mixed with luxury craftsmanship"
              },
              {
                icon: "🏎️",
                title: "Track Ready",
                desc: "Precision engineering built for the racetrack"
              }
            ].map((item, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:scale-105 transition"
              >

                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PERFORMANCE */}

      <section className="py-32 text-center">

        <h2 className="text-2xl md:text-4xl lg:text-[3.5rem] font-black mb-20 gold-gradient" data-aos="fade-up">
          PERFORMANCE
        </h2>

        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">

          {[
            { value: "1000+", label: "Horsepower" },
            { value: "2.8s", label: "0-100 km/h" },
            { value: "350+", label: "Top Speed km/h" }
          ].map((stat, index) => (

            <div key={index} data-aos="flip-up" data-aos-delay={index * 200}>

              <h3 className="text-6xl font-black text-yellow-400 mb-4">
                {stat.value}
              </h3>

              <p className="text-xl text-gray-300">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* GALLERY */}

      <section className="py-32 bg-black px-4">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-black text-center mb-20 gold-gradient">
            GALLERY
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80"
            ].map((img, index) => (

              <img
                key={index}
                src={img}
                className="h-72 w-full object-cover rounded-2xl hover:scale-105 transition"
              />

            ))}

          </div>

        </div>

      </section>

      {/* CUSTOMIZE CTA */}

      <section className="py-32 text-center">

        <h2 className="text-6xl font-black mb-10 gold-gradient">
          BUILD YOUR DREAM LAMBORGHINI
        </h2>

        <p className="text-2xl text-gray-300 mb-12">
          Customize colors wheels and interiors to match your style
        </p>

        <Link
          to="/customize"
          className="px-14 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xl rounded-2xl hover:scale-105 transition"
        >
          START CUSTOMIZING
        </Link>

      </section>
    </>
  );
};

export default Home;

