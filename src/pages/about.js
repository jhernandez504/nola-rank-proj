export default function About() {
  return (
    <main className="min-h-screen bg-gray-200 dark:bg-gray-900 px-4 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">About Us</h1>
        
        {/* Intro Section */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a passionate team of innovators, developers, and creatives committed to building solutions that drive impact.
            Our journey began with a simple idea and has since evolved into a mission to make a difference through technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Innovation</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Constantly exploring new ideas to deliver fresh, efficient, and scalable solutions.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Integrity</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We operate with transparency and honesty in everything we do.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Community</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Empowering others through open-source collaboration, mentorship, and inclusive culture.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300 dark:bg-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Team Member {num}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Role / Title</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-200 dark:bg-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To create meaningful tools, experiences, and platforms that empower users and organizations to thrive in a digital-first world.
          </p>
        </section>
      </section>
    </main>
  );
}
