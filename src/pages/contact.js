export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Image */}
        <div className="w-full">
          <img
            src="/contact-illustration.svg" // <-- Replace with your image path
            alt="Contact Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Reason for Contact</label>
              <select
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select a reason</option>
                <option value="support">Support</option>
                <option value="volunteer">Volunteer</option>
                <option value="press">Press Inquiry</option>
                <option value="general">General Question</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Message *</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
