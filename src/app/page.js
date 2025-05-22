'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Navbar from '../../components/Navbar/Navbar';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <Navbar />
      {/* HOME */}
      <section id="home">
        <div
          className="h-screen w-full flex items-center justify-center pt-20"
          style={{
            backgroundImage: "url('/img/lib-img.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-lg p-10 w-full max-w-5xl text-white text-center flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 leading-tight mb-4">
              Welcome home, book lover – your library is ready.
            </h1>

           <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 mt-3 leading-relaxed">
Browse it. Borrow it. Read it. Our Library puts your entire collection at your fingertips — fast, simple, and seamlessly organized.

           </p>

           {showLogin ? (
             <LoginForm onSwitchToRegister={toggleForm} />
           ) : (
             <RegisterForm onSwitchToLogin={toggleForm} />
           )}

           <div className="flex flex-col sm:flex-col gap-2 sm:gap-4 rounded-sm pr-10 pl-10 pt-2 pb-2 font-Semibold">
             <Link href="/admin" className="underline hover:text-yellow-500">Admin Panel Test ➤</Link>
             <Link href="/user/dashboard" className="underline hover:text-yellow-500">Library for Users Test ➤</Link>
           </div>
         </div>
       </div>
     </section>

       {/* ABOUT */}
       <section className="min-h-screen w-full bg-[#4B2E05] py-16 px-4 md:px-8 lg:px-16 text-white" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-20">About Our Library System</h2>
            <p className="text-gray-300 mb-6">
             Welcome to the Future of Library Management

Our Library Management System is a comprehensive digital solution designed to revolutionize how libraries function. Whether you're an administrator overseeing the entire collection or a user simply looking to borrow a book, our system offers a seamless, intuitive experience tailored to your needs.

From cataloging thousands of titles to managing user profiles and monitoring borrowing activity, every feature has been thoughtfully built to reduce manual work and increase efficiency. The system supports real-time inventory tracking, helping you instantly locate books, monitor availability, and avoid redundancies. Automated workflows handle common tasks like issuing and returning books, sending due date reminders, and generating reports — freeing up your time for what truly matters: serving readers.

The clean, easy-to-navigate dashboard puts powerful tools at your fingertips. With clear visual insights, quick search capabilities, and responsive design, managing your library has never been this simple or smart.
            </p>
            <p className="text-gray-400">
              Whether you're managing a personal home library, a school media center, or a public institution, our system adapts to your environment and scales with your collection. By combining automation, accessibility, and modern design, we’re not just supporting libraries — we’re transforming them for the digital age.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/img/red-img.jpeg" alt="Library system preview" width={1500} height={80} className="w-full max-w-md pt-20" />
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section
        id="services"
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
        style={{
          backgroundImage: "url('/img/group.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover what our library system offers to simplify borrowing, tracking, and managing books efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Book Borrowing</h3>
              <p className="text-gray-300 text-sm">Borrow books seamlessly with our smart borrowing system.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Online Catalog</h3>
              <p className="text-gray-300 text-sm">Browse our digital catalog from any device, anytime.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 ">Admin Tools</h3>
              <p className="text-gray-300 text-sm">Manage users, books, and activity from an intuitive dashboard.</p>
            </div>
          </div>
        </div>
      </section >

      {/* GROUP PROFILES */}
      <section className="bg-[#4B2E05] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

          {/* Top Row - 3 Cards with hover carousel effect */}
          <div className="flex overflow-x-auto space-x-6 py-6 px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-700">
            {[
              { name: "Ronan Furio", role: "Front-End Developer", img: "/img/furio.jpg" },
              { name: "Lorelyn Habal", role: "Full Stack Developer", img: "/img/habal.jpg" },
              { name: "Jessica Mae Jamisal", role: "Backend Developer", img: "/img/jamisal.jpg" },
              { name: "Paolo Geva", role: "Backend Developer", img: "/img/paolo.jpg" },
              { name: "Hugh Vale", role: "Front-End Developer", img: "/img/vale.jpg" },
              { name: "Natasha Hipos", role: "Backend Developer", img: "/img/natasha.jpg" },
              { name: "Elise Ann Gapas", role: "Front-End Developer", img: "/img/elise.jpg" },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20  rounded-xl p-8 shadow-lg text-center shadow-md flex-shrink-0 w-64 snap-center transition-transform transform hover:scale-105 hover:z-10"
              >
                <Image
                  src={member.img}
                  alt={`Profile of ${member.name}`}
                  width={96}
                  height={96}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen w-full text-white py-16 px-4 pt-40"
        style={{
          backgroundImage: "url('/img/group.jpg')",
        }}>
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10">

            {/* Left Side - Contact Details */}
            <div className="md:w-1/2 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-300">Zone 8, Bulan, Sorsogon</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+123 456 7890</p>
                  <p className="text-gray-300">+123 456 7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">G1LIbraNEt@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-gray-300 mb-6">If you have any questions or need help, reach out to us!</p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <textarea
                    rows="5"
                    placeholder="Type your message here..."
                    className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition duration-300"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#4B2E05] text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - Library Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Library Info</h4>
            <ul className="space-y-2">
              <li><a href="#footer" className="hover:text-yellow-400 transition">About the Library</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Opening Hours</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Contact Us</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Library Staff</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Location & Directions</a></li>
            </ul>
          </div>

          {/* Column 2 - User Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">User Services</h4>
            <ul className="space-y-2">
              <li><a href="#footer" className="hover:text-yellow-400 transition">Search Catalog</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Borrow & Return</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Reserve Book</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Digital Library</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">My Account</a></li>
            </ul>
          </div>

          {/* Column 3 - Policies */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><a href="#footer" className="hover:text-yellow-400 transition">Borrowing Rules</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Late Return Policy</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Terms of Service</a></li>
              <li><a href="#footer" className="hover:text-yellow-400 transition">Help & Support</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates on new arrivals, library events, reading tips, and more—delivered weekly to your inbox.
            </p>
            <form action="#" className="flex flex-col sm:flex-row items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 py-2 rounded-md transition"
              >
                SUBSCRIBE
              </button>
            </form>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-yellow-400"><i className="fab fa-github"></i></a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}