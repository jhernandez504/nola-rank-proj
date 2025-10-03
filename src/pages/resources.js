export default function Resources() {
  const handleContactClick = () => {
    // Redirect to contact page (adjust if you're using a router)
    window.location.href = "/contact";
  };

  return (
    <main className="w-screen mx-auto px-8 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Resources</h1>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Fliers and Guides</h2>
          <p className="text-gray-700">
            Downloadable fliers and organizing guides for local actions and outreach.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Featured Articles
          </h2>
          <p className="text-gray-700">
            Links to local and national articles featuring New Orleans and Raise & Fight labor actions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Public Sector Worker Resources
          </h2>
          <p className="text-gray-700 mb-2">
            Tools and support for Louisiana city, parish, and state government workers.
          </p>
          <ul className="list-disc list-inside text-blue-700">
            <li>
              <a href="https://afscmeatwork.org/afscme-council-17/about-us" target="_blank" rel="noopener noreferrer">
                AFSCME Council 17
              </a>
            </li>
            <li>
              <a href="https://www.afscmelocal2349.org/about" target="_blank" rel="noopener noreferrer">
                AFSCME Local 2349
              </a>
            </li>
            <li>
              <a href="https://www.neworleanscityworkers.org/resources" target="_blank" rel="noopener noreferrer">
                NOCWOC Resources
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Private Sector Worker Resources
          </h2>
          <p className="text-gray-700">
            Guidance and tools for non-government workers, unions, and independent organizers.
          </p>
        </div>
        <div className="flex justify-center mb-8">
        <button
          onClick={handleContactClick}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </div>
      </section>
    </main>
  );
}
