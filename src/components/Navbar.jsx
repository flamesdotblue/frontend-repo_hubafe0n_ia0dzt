import { Phone, MapPin } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight">Azure Bay Hotel</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#rooms" className="hover:text-blue-600 transition-colors">Rooms</a>
            <a href="#amenities" className="hover:text-blue-600 transition-colors">Amenities</a>
            <a href="#booking" className="hover:text-blue-600 transition-colors">Book</a>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-blue-600">
              <MapPin size={18} />
              Find us
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors">
              <Phone size={18} />
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
