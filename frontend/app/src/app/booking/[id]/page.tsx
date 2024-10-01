import React from 'react';
import { notFound } from 'next/navigation'; 
import Link from 'next/link';

interface BookingDetails {
  id: string; 
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string; 
}

async function getBooking(id: string): Promise<BookingDetails | null> {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings/${id}`, { cache: 'no-store' });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

const BookingDetails: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const booking = await getBooking(params.id);

  if (!booking) {
    return notFound(); 
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">Booking Details</h1>
      <p className="text-gray-700 text-lg">
        This booking is with <span className="font-semibold text-gray-900">{booking.doctor_name}</span>.
        For <span className="font-semibold text-gray-900">{booking.service}</span> and it ends on{" "}
        <span className="font-semibold text-gray-900">{booking.end_time}</span>.
      </p>
      <Link href="/" passHref>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default BookingDetails;
