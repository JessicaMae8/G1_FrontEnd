'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Navbar from '../../components/Navbar/Navbar';
import AuthModal from '../components/Auth/AuthModal';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(true);

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleLoginSuccess = () => {
    setShowAuthModal(false);
    // Additional actions on login success can be added here
  };

  return (
    <>
      <Navbar />
      {showAuthModal && <AuthModal onClose={handleCloseAuthModal} onLoginSuccess={handleLoginSuccess} />}

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

            <a
              href="#"
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-500 
              text-white font-semibold px-6 py-3 rounded-full transition duration-300 mb-8"
            >
              Login or Register to Access
            </a>

            <div className="flex flex-col sm:flex-col gap-2 sm:gap-4 rounded-sm pr-10 pl-10 pt-2 pb-2 font-Semibold">
              <Link href="/admin" className="underline hover:text-yellow-500">Admin Panel Test ➤</Link>
              <Link href="/library" className="underline hover:text-yellow-500">Library for Users Test ➤</Link>
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
              <br /><br />
              Our Library Management System is a comprehensive digital solution designed to revolutionize how libraries function. Whether you're an administrator overseeing the entire collection or a user simply looking to borrow a book, our system offers a seamless, intuitive experience tailored to your needs.
              <br /><br />
              From cataloging thousands of titles to managing user profiles and monitoring borrowing activity, every feature has been thoughtfully built to reduce manual work and increase efficiency. The system supports real-time inventory tracking, helping you instantly locate books, monitor availability, and avoid redundancies. Automated workflows handle common tasks like issuing and returning books, sending due date reminders, and generating reports — freeing up your time for what truly matters: serving readers.
              <br /><br />
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
        style={{ backgroundImage: "url('/img/group.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-45"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
            Discover what our library system offers to simplify borrowing, tracking, and managing books efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Book Borrowing', desc: 'Borrow books seamlessly with our smart borrowing system.' },
              { title: 'Online Catalog', desc: 'Browse our digital catalog from any device, anytime.' },
              { title: 'Admin Tools', desc: 'Manage users, books, and activity from an intuitive dashboard.' },
            ].map((service, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP PROFILES */}
      <section className="bg-[#4B2E05] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

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
        style={{ backgroundImage: "url('/img/group.jpg')" }}>
        <div className="max-w-6xl mx-auto bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-300">Zone 8, Bulan, Sorsogon</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+123 456 7890</p>
                  <p className="text-gray-300">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-2xl text-yellow-400 mt-1"></i>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">G1LIbraNEt@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
              <p className="text-gray-300 mb-6">If you have any questions or need help, reach out to us!</p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                ></textarea>

                <button
                  type="button"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-6 rounded-full transition duration-300"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#4B2E05] text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columns for footer content */}
          {/* You can add footer links or branding here */}
        </div>
      </footer>
    </>
  );
}