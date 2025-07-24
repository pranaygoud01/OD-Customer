import React, { useState } from "react";
import HNavBar from "../../components/eat-out/HNavBar";
import Footer from "../../components/Footer";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";

const TableBooking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    requests: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${form.name} on ${form.date} at ${form.time}`);
    // Here you can add your backend submission logic
  };

  return (
    <div>
      <HNavBar />
      <div className="px-0 bg-neutral-100 sm:px-10 md:px-20 py-0 md:py-15 gap-8 max-lg:gap-0 min-h-[90vh] grid grid-cols-1 md:grid-cols-3">
        <div className="w-full shadow border  bg-white border-neutral-200 max-lg:border-0">
          <img
            src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg"
            alt="Restaurant"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5 flex flex-col gap-1">
            <h1 className="text-xl max-lg:text-lg font-cal">Asian, Japanese</h1>
            <p className="text-sm max-lg:text-xs text-neutral-400">
              Location 4Th Floor, G.V. Pride, Gandipet Main Road, Kokapet
            </p>
          </div>
          <div className="w-full border-y-neutral-300 grid grid-cols-2 border-y h-[60px]">
            <button className="flex items-center w-full gap-1 text-green-500 justify-center border-r-neutral-300 border-r text-center px-5">
              <IoCallOutline />
              <span className="font-cal">Call</span>
            </button>
            <button className="flex items-center w-full gap-1 text-green-500 justify-center ">
              <CiLocationArrow1 className="text-xl" />
              <span className="font-cal">Direction</span>
            </button>
          </div>
          <div className="p-5 w-full">
            <h1 className="text-md text-neutral-600 font-cal">Menu</h1>
            {/* You could map over actual menu images here */}
            images
          </div>
        </div>

        {/* Booking form container */}
        <div className="w-full md:col-span-2 bg-white p-6 sm:p-10 border border-neutral-200 shadow">
          <h2 className="text-2xl mb-6  font-cal">Book Your Table</h2>
          <form className="flex flex-col max-lg:text-sm gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Guest{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              placeholder="Special requests (optional)"
              rows={3}
              className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Book Table
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TableBooking;
