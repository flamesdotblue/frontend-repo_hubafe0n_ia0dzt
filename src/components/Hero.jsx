function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Coastal luxury redefined
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              Welcome to Azure Bay Hotel – sunlit suites, ocean-breeze balconies, and thoughtful service for effortless stays.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
                Book your stay
              </a>
              <a href="#rooms" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-800 font-semibold hover:border-gray-400 transition-colors">
                Explore rooms
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
                alt="Oceanfront hotel pool"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
