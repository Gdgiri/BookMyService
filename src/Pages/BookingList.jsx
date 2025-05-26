import React, { useState, useEffect } from "react";
import { FaFilter, FaUserCircle, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const bookings = [
  {
    id: "#BK1001",
    name: "John",
    service: "Electrician",
    date: "May 25, 2025 – 10:00 AM",
  },
  {
    id: "#BK1002",
    name: "Jake",
    service: "Plumber",
    date: "May 26, 2025 – 10:00 AM",
  },
  {
    id: "#BK1003",
    name: "Priya",
    service: "House Cleaning",
    date: "May 27, 2025 – 10:00 AM",
  },
  {
    id: "#BK1004",
    name: "Arun",
    service: "Painting",
    date: "May 28, 2025 – 10:00 AM",
  },
  {
    id: "#BK1005",
    name: "Sara",
    service: "Carpenter",
    date: "May 29, 2025 – 10:00 AM",
  },
  {
    id: "#BK1006",
    name: "Mike",
    service: "Electrician",
    date: "May 30, 2025 – 10:00 AM",
  },
  {
    id: "#BK1007",
    name: "Lisa",
    service: "Plumber",
    date: "May 31, 2025 – 10:00 AM",
  },
  {
    id: "#BK1008",
    name: "Tom",
    service: "House Cleaning",
    date: "June 1, 2025 – 10:00 AM",
  },
  {
    id: "#BK1009",
    name: "Emily",
    service: "House Cleaning",
    date: "June 2, 2025 – 10:00 AM",
  },
  {
    id: "#BK1010",
    name: "Emily",
    service: "Mechanic",
    date: "June 3, 2025 – 10:00 AM",
  },
   {
    id: "#BK1011",
    name: "Emily2",
    service: "Mechanic",
    date: "June 4, 2025 – 10:00 AM",
  },
];

const services = [
  { value: "all", label: "All Services" },
  { value: "Carpenter", label: "Carpenter" },
  { value: "Electrician", label: "Electrician" },
  { value: "Plumber", label: "Plumber" },
  { value: "House Cleaning", label: "House Cleaning" },
  { value: "Painting", label: "Painting" },
  { value: "Mechanic", label: "Mechanic" },
];

const ITEMS_PER_PAGE = 10;

const BookingList = () => {
  const [searchText, setSearchText] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalBooking, setModalBooking] = useState(null);

  const filteredBookings = bookings.filter((b) => {
    const matchesService =
      serviceFilter === "all" || b.service === serviceFilter;
    const matchesSearch =
      b.id.toLowerCase().includes(searchText.toLowerCase()) ||
      b.name.toLowerCase().includes(searchText.toLowerCase()) ||
      b.service.toLowerCase().includes(searchText.toLowerCase());
    return matchesService && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBookings = filteredBookings.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText, serviceFilter]);

  const serviceCounts = services
    .filter((s) => s.value !== "all")
    .map(({ value }) => {
      return filteredBookings.filter((b) => b.service === value).length;
    });

  const barData = {
    labels: services.filter((s) => s.value !== "all").map((s) => s.label),
    datasets: [
      {
        label: "Number of Serv",
        data: serviceCounts,
        backgroundColor: [
          "#3b82f6", // blue
          "#ef4444", // red
          "#f59e0b", // amber
          "#10b981", // green
          "#8b5cf6", // purple
        ],
        borderWidth: 1,
        barThickness: 30, // makes bars fatter (can adjust this number)
        maxBarThickness: 40, // max thickness
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16,
            weight: "bold",
          },
          padding: 20,
          generateLabels: (chart) => {
            const labels =
              ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
            // Remove the fillStyle (the color box)
            return labels.map((label) => ({
              ...label,
              fillStyle: "transparent", // make color box invisible
              strokeStyle: "transparent",
              pointStyle: false,
            }));
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, font: { size: 14 } },
        grid: {
          color: "#e5e7eb",
        },
      },
      x: {
        ticks: { font: { size: 14, weight: "bold" } },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 mt-20 md:mt-0">
        <h1 className="text-2xl sm:text-4xl font-semibold">Services</h1>
        <div className="flex items-center gap-8  md:gap-6 ml-12 md:ml-0">
          <FaRegBell
            className="text-2xl cursor-pointer text-yellow-500"
            title="Notifications"
          />
          <FaUserCircle className="text-2xl cursor-pointer" title="Profile" />
          <div className="text-right">
            <h3 className="font-semibold">Vishnu</h3>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">Booking Management</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Bookings..."
            className="border p-2 rounded w-full sm:w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="w-full sm:w-48 relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full border p-2 rounded flex justify-between items-center bg-white hover:border-blue-500"
            >
              <span className="capitalize">
                {serviceFilter === "all" ? "All Services" : serviceFilter}
              </span>
              {dropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>

            {dropdownOpen && (
              <ul
                className="absolute mt-1 w-52  border rounded bg-white shadow-md max-h-48 overflow-auto z-10"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style>{`
    ul::-webkit-scrollbar {
      display: none;
    }
  `}</style>
                {services.map(({ value, label }) => (
                  <li
                    key={value}
                    onClick={() => {
                      setServiceFilter(value);
                      setDropdownOpen(false);
                    }}
                    className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                      serviceFilter === value ? "bg-blue-100 font-semibold" : ""
                    }`}
                  >
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaFilter />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3 hidden md:table-cell">Service</th>
              <th className="px-6 py-3 hidden md:table-cell">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-8 text-gray-400 font-semibold"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              currentBookings.map(({ id, name, service, date }) => (
                <tr
                  key={id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => setModalBooking({ id, name, service, date })}
                >
                  <td className="px-6 py-3 font-mono">{id}</td>
                  <td className="px-6 py-3">{name}</td>
                  <td className="px-6 py-3 hidden md:table-cell capitalize">
                    {service}
                  </td>
                  <td className="px-6 py-3 hidden md:table-cell">{date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Chart Section */}
      <div
        className="mt-10 bg-white rounded shadow p-6"
        style={{ height: 380 }}
      >
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Modal for booking details */}
      {modalBooking && (
        <div
          onClick={() => setModalBooking(null)}
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded shadow max-w-sm w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Booking Details</h3>
              <button onClick={() => setModalBooking(null)}>
                <FaTimes />
              </button>
            </div>
            <p>
              <strong>ID:</strong> {modalBooking.id}
            </p>
            <p>
              <strong>Customer:</strong> {modalBooking.name}
            </p>
            <p>
              <strong>Service:</strong> {modalBooking.service}
            </p>
            <p>
              <strong>Date & Time:</strong> {modalBooking.date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingList;
