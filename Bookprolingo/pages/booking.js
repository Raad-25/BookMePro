import React from 'react';

export default function Booking() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Book Interpretation Service</h1>
      <form className="space-y-4 max-w-xl">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Select Interpretation Type</option>
          <option>Simultaneous</option>
          <option>Consecutive</option>
          <option>Remote via Zoom</option>
        </select>
        <input type="text" placeholder="Event Topic" className="w-full border p-2 rounded" />
        <input type="date" className="w-full border p-2 rounded" />
        <textarea placeholder="Additional Notes (e.g. Location, Time)" className="w-full border p-2 rounded"></textarea>
        <a
          href="https://wa.me/9647700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Confirm via WhatsApp
        </a>
      </form>
    </div>
  );
}
