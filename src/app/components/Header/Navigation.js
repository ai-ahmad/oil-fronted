"use client"

import Image from 'next/image';
import { useState } from 'react';
import Logo  from "../../public/media/Group.png"
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='mt-3'>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                {/* Left Section: Logo */}
                <div className="flex-shrink-0">
                    <a href="/">
                        <Image
                            src={Logo}// Public path starting from the public folder
                            alt="Oil Drive logo"
                            width="150"
                            height="50"
                            className="md:h-10"
                        />
                    </a>

                </div>

                {/* Center Section: Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 text-sm">
                    <a href="#" className="text-gray-700 hover:text-red-500">О компании</a>
                    <a href="#" className="text-gray-700 hover:text-red-500">Каталог</a>
                    <a href="#" className="text-gray-700 hover:text-red-500">Продукция</a>
                    <a href="#" className="text-gray-700 hover:text-red-500">Контакты</a>
                </div>

                {/* Right Section: Language Switch and Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Language Switch */}
                    <div className="text-sm">
                        <a href="#" className="text-black">Ru/</a>
                        <a href="#" className="text-red-500">Uz</a>
                    </div>

                    {/* Request Button */}
                    <button className="bg-red-500 text-white py-2 px-4 rounded-full">
                        Оставить заявку
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="flex md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 border-t">
                    <a href="#" className="text-gray-700 hover:text-red-500">О компании</a>
                    <a href="#" className="text-red-500">Каталог</a>
                    <a href="#" className="text-gray-700 hover:text-red-500">Продукция</a>
                    <a href="#" className="text-gray-700 hover:text-red-500">Контакты</a>
                    <div className="flex items-center space-x-4">
                        <div className="text-sm">
                            <a href="#" className="text-black">Ru/</a>
                            <a href="#" className="text-red-500">Uz</a>
                        </div>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-full">
                            Оставить заявку
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
