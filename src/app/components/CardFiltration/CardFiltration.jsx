"use client"

import React from 'react';
import Image from 'next/image';
import car1 from '../../public/media/car1.png';
import car2 from '../../public/media/car2.png';
import car3 from '../../public/media/car3.png';
import car4 from '../../public/media/zavod.png';
import { useRouter } from 'next/navigation';  // Правильный импорт

const CardFiltration = () => {
  const router = useRouter();


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 container mx-auto px-4 md:px-0">
        {/* Card 1 */}
        <a href='/passengercard' className="relative rounded-lg overflow-hidden shadow-lg group" >
          <Image src={car1} alt="Car" width={500} height={300} className="w-full h-auto object-none transform group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-lg font-bold">Для Легковых и Легких Коммерческих Автомобилей</h3>
              <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                ➔
              </button>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a href='/truckscard' className="relative rounded-lg overflow-hidden shadow-lg group" >
          <Image src={car2} alt="Truck" width={500} height={300} className="w-full h-auto object-none transform group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-lg font-bold">Для Грузовых Автомобилей</h3>
              <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                ➔
              </button>
            </div>
          </div>
        </a>

        {/* Card 3 */}
        <a href='/constructioncard'  className="relative rounded-lg overflow-hidden shadow-lg group">
          <Image src={car3} alt="Excavator" width={500} height={300} className="w-full h-auto object-none transform group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-lg font-bold">Для Строительной Техники</h3>
              <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                ➔
              </button>
            </div>
          </div>
        </a>

        {/* Card 4 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg group" onClick={() => handleClick("/industrialcard")}>
          <Image src={car4} alt="Factory" width={500} height={300} className="w-full object-none h-auto transform group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-lg font-bold">Для Промышленных Объектов</h3>
              <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                ➔
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CardFiltration;
