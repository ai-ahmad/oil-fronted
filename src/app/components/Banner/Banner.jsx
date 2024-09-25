"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch the banner data from the API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/banner");
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [banners]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  return (
    <div className="carousel container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mt-10">
      {banners.map((banner, index) => (
        <div
          key={banner._id}
          className={`carousel-item relative w-full ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img
            src={`http://localhost:5000${banner.image_url}`}
            alt={banner.description}
            className="w-full md:h-[560px] h-[300px] rounded-[20px] md:rounded-[30px] mb-10 object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={prevSlide}
              className="btn btn-circle bg-white text-black md:w-10 md:h-10 w-8 h-8"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-circle bg-white text-black md:w-10 md:h-10 w-8 h-8"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
