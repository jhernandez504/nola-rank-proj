'use client';

import React from 'react';

export default function JoinPage() {
  return (
    <div className="w-screen mx-auto px-8 py-10 space-y-12">
      {/* Join */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Join</h1>
        <p className="text-lg text-gray-700">
          Become part of a growing network of workers building power from the ground up.
        </p>
      </section>

      {/* Ready to Join? */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Ready to Join?</h2>
        <p className="text-gray-700">
          Whether you're already organizing or just getting started, we welcome you. Our meetings are open to all workers regardless of union affiliation.
        </p>
      </section>

      {/* How to Join */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">How to Join</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Attend one of our public meetings or social events</li>
          <li>Get connected with local organizers in your industry</li>
          <li>Join our newsletter and stay in the loop</li>
        </ul>
      </section>

      {/* Membership */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Membership</h2>
        <p className="text-gray-700">
          We are not a dues-based organization. Membership is informal and based on participation. Anyone committed to building worker power in New Orleans is welcome.
        </p>
      </section>

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
  );
}
