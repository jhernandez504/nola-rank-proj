export default function Home() {
  return (
  <main className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 px-4 py-10">
    <div className="w-screen text-center py-6 ">
      <section className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        {/* Text Section */}
        <div className="flex-1 space-y-4 pt-16">
          <h1 className="text-3xl font-extrabold">
            What is the New Orleans Rank & File Project?
          </h1>
          <p className="pt-5 mx-10">
            We are a worker solidarity and education organization rooted in our local
            labor movement.
          </p>
          <p className="mx-10">
            We are linking unions members directly with each other, across boundaries
            of union affiliation and industry.
          </p>
          <p className="mx-10">
            We are training each other to be organizers in order to build a militant
            labor movement.
          </p>

          <a href="/join" className="hover:underline hover:text-yellow-300 bg-red-800 rounded-sm py-2 px-5 text-white"> Join Us!</a>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="images/nurses/home1.png"
            alt="Rank and File Workers on Strike"
            className="rounded-lg shadow-lg w-full max-w-md scale-95"
          />
        </div>
      </section>

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