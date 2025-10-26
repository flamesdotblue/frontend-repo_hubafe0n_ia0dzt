import { useState } from "react"

function BookingForm() {
  const [form, setForm] = useState({ checkIn: "", checkOut: "", guests: 2, room: "Deluxe Ocean View" })
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(
      `Inquiry sent for ${form.room} from ${form.checkIn || "?"} to ${form.checkOut || "?"} for ${form.guests} guest(s). We will contact you shortly!`
    )
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Plan your stay</h2>
            <p className="mt-2 text-gray-600">Share your dates and preferences — our team will confirm availability and the best rates.</p>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop"
                alt="Hotel lobby"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur rounded-2xl p-6 border space-y-4 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <input
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                <select
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Room type</label>
                <select
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Deluxe Ocean View</option>
                  <option>Garden Suite</option>
                  <option>Penthouse Residence</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Special requests (optional)</label>
              <textarea
                name="notes"
                rows="4"
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., late check-in, allergy-friendly bedding"
              />
            </div>

            <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              Send booking inquiry
            </button>

            {message && (
              <p className="text-green-700 bg-green-50 border border-green-200 rounded-md p-3 text-sm">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
