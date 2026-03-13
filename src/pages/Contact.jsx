const Contact = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto py-32">
        <h1 className="text-7xl font-black gold-gradient mb-12 text-center" data-aos="fade-up">CONTACT</h1>
        <div className="grid md:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="200">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-12">Ready to own the road?</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-2xl">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-bold">info@lamborghini.com</p>
                  <p className="text-gray-400">Sales & Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-2xl">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-bold">+1 (555)  Lamborghini</p>
                  <p className="text-gray-400">24/7 Service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-8">Send Message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400" />
              <button className="w-full py-4 px-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact