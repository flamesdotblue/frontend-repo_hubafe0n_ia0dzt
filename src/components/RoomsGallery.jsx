import { Star } from "lucide-react"

const rooms = [
  {
    name: "Deluxe Ocean View",
    price: 289,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop",
    features: ["King bed", "Private balcony", "Ocean view"],
  },
  {
    name: "Garden Suite",
    price: 219,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    features: ["King or twin", "Lounge area", "Garden terrace"],
  },
  {
    name: "Penthouse Residence",
    price: 549,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2bc5?q=80&w=1600&auto=format&fit=crop",
    features: ["Two bedrooms", "Kitchenette", "Panoramic view"],
  },
]

function RoomsGallery() {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Signature Rooms</h2>
            <p className="mt-2 text-gray-600">Elegant spaces designed for comfort and connection.</p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
            Check availability
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <article key={room.name} className="group rounded-2xl overflow-hidden border hover:shadow-xl transition-shadow bg-white">
              <div className="relative">
                <img src={room.img} alt={room.name} className="h-56 w-full object-cover" loading="lazy" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium">
                  <Star size={14} className="text-yellow-500" />
                  {room.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-blue-600 font-bold">${room.price}<span className="text-gray-500 font-normal text-sm">/night</span></p>
                </div>
                <ul className="mt-3 text-sm text-gray-600 list-disc list-inside space-y-1">
                  {room.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#booking" className="mt-4 inline-flex w-full justify-center px-4 py-2 rounded-md border border-gray-300 bg-white font-medium hover:border-gray-400 transition-colors">
                  Reserve
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoomsGallery
