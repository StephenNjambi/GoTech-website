import React, { useState, useEffect } from 'react';
import '../assets/css/Cta.css'; // Import your CSS file

function Cta() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 2 : 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-container bg-gray-900 text-white py-16">
      <div className={`slider-content slide-${activeSlide}`}>
        <div className="container mt-5 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Supercharge Your Business Today</h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied customers who have transformed their businesses with our innovative solutions.
          </p>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">
            Get Started
          </a>
        </div>
      </div>
      <div className={`slider-content slide-${activeSlide === 1 ? 2 : 1}`}>
        <div className="container mt-5 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Discover the Future of Technology</h2>
          <p className="text-lg mb-8">
            Explore the latest trends and advancements in technology that can propel your business to new heights.
          </p>
          <a href="#" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
