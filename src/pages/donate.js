import { useEffect } from 'react';

export default function Donate() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://donorbox.org/widget.js';
    script.setAttribute('paypalExpress', 'false');
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Support Our Mission</h1>
      <p className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
        Your donation helps us continue our important work in the community. Thank you for your generosity!
      </p>

      <div className="w-full max-w-2xl">
        <iframe
          src="https://donorbox.org/embed/YOUR_CAMPAIGN_ID_HERE"
          name="donorbox"
          allowPaymentRequest
          frameBorder="0"
          scrolling="no"
          className="w-full max-w-full"
          height="900px"
        ></iframe>
      </div>
    </main>
  );
}
