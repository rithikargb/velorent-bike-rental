import React, { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState('daily');
  const [booking, setBooking] = useState({
    vehicle: 'VeloScoot',
    startDate: '',
    endDate: '',
    location: 'Bhubaneswar Central'
  });

  const vehicles = [
    { name: 'VeloScoot', price: 150, deposit: 250 },
    { name: 'VeloRide', price: 200, deposit: 300 },
    { name: 'VeloPro', price: 300, deposit: 500 }
  ];

  const locations = [
    'Bhubaneswar Central',
    'Nayapalli',
    'Patia',
    'Saheed Nagar',
    'Khandagiri'
  ];

  const calculateTotal = () => {
    const days = Math.ceil((new Date(booking.endDate) - new Date(booking.startDate)) / (1000 * 60 * 60 * 24)) || 1;
    const selectedVehicle = vehicles.find(v => v.name === booking.vehicle);
    const subtotal = selectedVehicle.price * (activeTab === 'weekly' ? Math.ceil(days / 7) : days);
    return {
      subtotal,
      deposit: selectedVehicle.deposit,
      total: subtotal + selectedVehicle.deposit
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Book Your Ride</h1>
        
        {/* Vehicle Selection */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Vehicle</label>
          <select 
            value={booking.vehicle}
            onChange={(e) => setBooking({...booking, vehicle: e.target.value})}
            className="w-full p-2 border rounded"
          >
            {vehicles.map((vehicle) => (
              <option key={vehicle.name} value={vehicle.name}>
                {vehicle.name} (₹{vehicle.price}/day + ₹{vehicle.deposit} SD)
              </option>
            ))}
          </select>
        </div>

        {/* Rental Type Tabs */}
        <div className="flex mb-6 border-b">
          {['daily', 'weekly'].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 font-medium ${activeTab === tab ? 'border-b-2 border-primary' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Date Selection */}
        <div className="grid gap-4 mb-6">
          <div>
            <label className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" /> Start Date
            </label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              value={booking.startDate}
              onChange={(e) => setBooking({...booking, startDate: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" /> End Date
            </label>
            <input
              type="date"
              min={booking.startDate || new Date().toISOString().split('T')[0]}
              max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
              value={booking.endDate}
              onChange={(e) => setBooking({...booking, endDate: e.target.value})}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> Pickup Location
          </label>
          <select
            value={booking.location}
            onChange={(e) => setBooking({...booking, location: e.target.value})}
            className="w-full p-2 border rounded"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Pricing */}
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span>Base Fare:</span>
            <span>₹{calculateTotal().subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Security Deposit:</span>
            <span>₹{calculateTotal().deposit}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{calculateTotal().total}</span>
          </div>
        </div>

        <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingPage;