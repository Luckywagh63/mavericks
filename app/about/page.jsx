"use client";

import React from "react";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-green-950 to-slate-500 min-h-screen pt-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 px-10 py-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold text-center text-gray-100 underline decoration-white">
            About Us
          </h1>
          <section className="mt-8 text-lg text-gray-200 max-w-3xl mx-auto">
            <p className="mb-4">
              Welcome to our website! We are a team of passionate individuals working towards solving real-world problems through technology. Our goal is to make a positive impact and provide innovative solutions to our users.
            </p>
            <p className="mb-4">
              With years of experience in the industry, we aim to provide users with the most efficient, user-friendly, and cutting-edge solutions. Our product is designed to meet the needs of people who seek a more streamlined and powerful way to interact with technology.
            </p>
            <p className="mb-4">
              We believe in transparency, collaboration, and constant improvement. Our journey is just beginning, and we are excited to continue building amazing things. Thank you for being a part of our story.
            </p>
          </section>

          <section className="mt-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-200">Our Mission</h2>
            <p className="mt-2 text-lg text-gray-200">
              Our mission is to empower individuals and businesses by providing them with the tools they need to thrive in the digital age. We strive to create solutions that make life easier, more efficient, and more enjoyable.
            </p>
          </section>

          <section className="mt-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-200">Contact Us</h2>
            <p className="mt-2 text-lg text-gray-200">
              If you have any questions or would like to know more, feel free to get in touch with us. We would love to hear from you!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
