export default function Home() {
  return (
  <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10">
    <h1 className="max-w-6xl mx-auto font-extrabold text-center">NEW ORLEANS RANK AND FILE</h1>
    <div className="max-w-6xl mx-auto text-center py-6 ">
      <img
        src="/images/workers/workers2.jpeg"
        alt="Rank and File Workers"
        className="rounded-lg shadow-lg mx-auto"
        style={{ width: '50%', height: '50%' }}
      />
      <p>
        We’ve seen historic strikes recently across New Orleans, from AT&T workers, to UMC nurses, to ILA dockworkers.
      </p>
      <p>
        We are organizing strike support so that more workers can take to the streets in 2025!
      </p>
    </div>
    <div className="max-w-6xl mx-auto text-center justify-between">
      {/* Contact Button */}
        <div className="mt-12 flex justify-center p-5">
          <a
            href="/contact"
            className="bg-red-800 text-white px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Contact Us
          </a>
        </div>
        <div>
          <a
              href="/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Make a Donation
            </a>
        </div>
    </div>
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-12 justify-bottom m-3">
      {/* Sign Up for Newsletter */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Sign Up for Our Newsletter</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  </main>
  )
}