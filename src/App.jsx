import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import RoomsGallery from "./components/RoomsGallery"
import BookingForm from "./components/BookingForm"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <RoomsGallery />
        <section id="amenities" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border bg-gradient-to-br from-blue-50 to-white">
                <h3 className="text-lg font-semibold mb-2">Beachfront access</h3>
                <p className="text-gray-600">Step onto soft sands and swim in crystal waters just outside the lobby.</p>
              </div>
              <div className="p-6 rounded-2xl border bg-gradient-to-br from-emerald-50 to-white">
                <h3 className="text-lg font-semibold mb-2">Wellness & spa</h3>
                <p className="text-gray-600">Sunrise yoga, sauna, and signature treatments for complete relaxation.</p>
              </div>
              <div className="p-6 rounded-2xl border bg-gradient-to-br from-amber-50 to-white">
                <h3 className="text-lg font-semibold mb-2">Coastal cuisine</h3>
                <p className="text-gray-600">Seasonal menus inspired by the sea, paired with local wines.</p>
              </div>
            </div>
          </div>
        </section>
        <BookingForm />
      </main>
      <footer className="mt-auto border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Azure Bay Hotel. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-4">
            <a href="#rooms" className="hover:text-blue-600">Rooms</a>
            <a href="#amenities" className="hover:text-blue-600">Amenities</a>
            <a href="#booking" className="hover:text-blue-600">Book</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
