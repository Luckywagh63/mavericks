"use client";

import React from "react";


export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-900">About Us</h1>
        <section className="mt-8 text-lg text-gray-700">
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
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-2 text-lg text-gray-700">
            Our mission is to empower individuals and businesses by providing them with the tools they need to thrive in the digital age. We strive to create solutions that make life easier, more efficient, and more enjoyable.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-700">
            If you have any questions or would like to know more, feel free to get in touch with us. We would love to hear from you!
          </p>
        </section>
      </main>
    </div>
  );
}
