'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <section className="w-screen p-3 mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          About Us
        </h1>
        <div className="text-center text-2xl mb-12">
          <p>
            The New Orleans Rank and File Project is a space for anyone who wants to build worker power at their job and create a fighting labor movement.
          </p>
          <p>
            We are workers training each other, preparing our unions to resist attacks from billionaires and anti-worker politicians.
          </p>
          <p>
            The next four years will be a test for the labor movement, with challenges to our legal protections and resistance from billionaires and politicians to workers’ demands for better wages and more social services.
          </p>
          <p>
            We need to fill our movement with activist workers who can prepare our unions to organize, fight, and win!
          </p>
        </div>
        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab('story')}
            className={`px-4 py-2 rounded ${
              activeTab === 'story'
                ? 'bg-red-800 text-white hover:bg-red-600'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Our Story
          </button>
          <button
            onClick={() => setActiveTab('org')}
            className={`px-4 py-2 rounded ${
              activeTab === 'org'
                ? 'bg-red-800 text-white hover:bg-red-600'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Our Organization
          </button>
          <button
            onClick={() => setActiveTab('donate')}
            className={`px-4 py-2 rounded ${
              activeTab === 'donate'
                ? 'bg-red-800 text-white hover:bg-red-600'
                : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Donate
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === 'story' && (
          <div className="space-y-6 text-gray-800 dark:text-gray-300">
            <p>
              Since our formation in November 2022, the New Orleans Rank and File Project has supported organizing projects, provided mutual aid, and strengthened the ecosystem of labor and community activists in the New Orleans area. While a number of coalitions exist in New Orleans for coordinating social justice and labor activism, including the Greater New Orleans AFL-CIO, the Rank and File Project provides a space for direct worker-to-worker solidarity without requiring any prior affiliation or recognition. Anyone working on a union organizing project at their workplace can come to our meetings and events! Unlike the AFL-CIO, we are not a coalition of labor unions; instead we are a network of individual labor activists, inside and outside of our respective union structures, working together to strengthen the entire movement. We work to learn organizing strategies and tactics from each other, and to create a pipeline for labor movement leadership rising from the rank-and-file of our unions.
            </p>
            <p>
              In New Orleans, the labor movement continues the struggle against privatization, unsafe and hazardous working conditions, environmental injustice, and the racism that suffuses our workplaces and communities. We are fighting in a political environment deeply hostile to worker organizing. Additionally, recent organizing efforts by sanitation workers, day-laborers, city employees, and Starbucks workers in New Orleans have fallen outside of the AFL-CIO's purview; we see the need for organizing support and training that is currently not being delivered in a horizontal way to workers across the silos of our respective unions. Through the Rank and File Project, we are laying the groundwork for future struggles for workplace justice and union recognition.
            </p>

            <h2 className="text-xl font-semibold mt-8">What We’ve Done:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Regular Meetings and Socials</li>
              <li>Organizer Trainings</li>
              <li>Strike Fund</li>
              <li>Defend Federal Workers March (March 2025)</li>
              <li>Labor Spring 2023–2025</li>
              <li>Labor Notes Conference 2024</li>
            </ul>
          </div>
        )}

        {activeTab === 'org' && (
          <div className="space-y-6 text-gray-800 dark:text-gray-300">
            <h2 className="text-2xl font-bold mb-2">What We Mean by “Rank and File”</h2>
            <p>
              Rank and file workers are regular dues-paying union members. We bring together cross-union worker-leaders to educate each other and offer support during strikes and organizing drives.
            </p>

            <h2 className="text-xl font-semibold mt-6">What We Do:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Worker-to-Worker Organizing:</strong> We train each other to build workplace power.</li>
              <li><strong>Solidarity and Mutual Aid:</strong> We support all working-class people seeking collective power.</li>
              <li><strong>Democratic Unions:</strong> Our unions belong to members — not unelected staffers.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Leadership</h2>
            <p>
              The NORnFP is led by a steering committee of [X] members, elected annually. You can contact them via <a href="mailto:email@example.com" className="text-blue-600 underline">email</a> or the <a href="/contact" className="text-blue-600 underline">contact form</a>.
            </p>
            <p>
              Read our <a href="#" className="text-blue-600 underline">Constitution & Bylaws</a>.
            </p>
            <p>
              Want to join? <a href="#" className="text-blue-600 underline">Click here to become a member</a> and <a href="#" className="text-blue-600 underline">come to a meeting</a>.
            </p>
          </div>
        )}

        {activeTab === 'donate' && (
        <div className="text-gray-800 dark:text-gray-300">
          <p className="mb-4">
            Our work depends on donations from members and supporters who believe in building worker power in New Orleans. Every contribution goes directly to support organizing, training, and mutual aid.
          </p>
          <div className="flex justify-center">
            <a
              href="/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-black px-6 py-3 rounded shadow-sm hover:bg-green-500 transition"
            >
              Make a Donation
            </a>
          </div>
        </div>
        )}

        {/* Contact Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
