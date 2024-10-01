import React from 'react';
import Link from 'next/link';

interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

async function getBookings(): Promise<Booking[]> {
  const res = await fetch('http://host.docker.internal:5000/api/bookings', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Current Booking Count: {bookings.length}</h1>
      
      <ul className="space-y-4">
        {bookings.map((booking: Booking) => (
          <li key={booking.id} className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-300">
            <Link href={`./booking/${booking.id}`} className="text-blue-600 hover:text-blue-800">
              A booking on {new Date(booking.date).toLocaleDateString()} starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-6">
        <Link href={'/booking/new'}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Make a New Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
