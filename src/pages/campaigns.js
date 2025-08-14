"use client";

export default function Campaigns() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-12 text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold text-center">Our Campaigns</h1>
        <p className="text-lg">
          We are actively organizing and supporting campaigns that directly improve the lives of New Orleanians.
        </p>

        {/* Nurses Strike Campaign */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🩺 NOLA's Nurses Strike</h2>
          <p>
            Nurses at New Orleans hospitals are fighting for better working conditions, safer staffing ratios, and fair pay.
            We stand with them in their strike actions and fundraising efforts.
          </p>

          {/* Campaign Image */}
          <img
            src="/images/nurses/nursestrike1.jpg"
            alt="Nurses Strike Rally"
            className="rounded-lg shadow-lg"
          />

          {/* Centered Button */}
          <div className="flex justify-center">
            <a
              href="https://www.gofundme.com/f/stand-with-umc-nurses-fighting-retaliation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
            >
              Support on GoFundMe
            </a>
          </div>
        </section>

        {/* NOLA Heat Standards Campaign */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">🌡️ Heat Standards for NOLA Workers</h2>
          <p>
            With record-breaking heat in Louisiana, we are pushing for enforceable heat safety standards for outdoor and indoor
            workers alike. No one should risk heatstroke just to earn a paycheck.
          </p>

          {/* Campaign Image */}
          <img
            src="/images/workers/workers1.jpeg"
            alt="Workers' Rights Rally"
            className="rounded-lg shadow-lg"
          />

          {/* Centered Button */}
          <div className="flex justify-center">
            <a
              href="/heat-standards"
              className="inline-block px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Learn More & Take Action
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
