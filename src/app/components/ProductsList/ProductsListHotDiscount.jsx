    "use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ProductCard } from "../ProductCard/ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function ProductListsHotDiscount() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const request = await axios.get("http://localhost:5000/api/v1/card");
        if (request.status === 200) {
          const products = request.data.filter(item => item.promotion == true);
          setProducts(products);
        } else {
          console.error("Error fetching products", request.statusText);
        }
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products)
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heading and navigation buttons */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-black">Горячие скидки</h1>
        {/* Custom navigation buttons */}
        <div className="flex space-x-2">
          <button className="swiper-button-prev-custom-1 h-10 w-10 text-white bg-[#CBCBCB] p-2 rounded-full">
            ←
          </button>
          <button className="swiper-button-next-custom-2 h-10 w-10 text-white bg-[#CBCBCB] p-2 rounded-full">
            ➔
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1} // Default to 1 slide
        breakpoints={{
          640: {
            slidesPerView: 1, // Small screen shows 1 product
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // Medium screen shows 2 products
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // Large screen shows 3 products
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4, // Very large screens show 4 products
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev-custom-1",
          nextEl: ".swiper-button-next-custom-2",
        }}
        modules={[Navigation]}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="mb-3">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
