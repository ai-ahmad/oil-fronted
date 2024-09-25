"use client"

import { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const TopHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="py-3">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                <div className="flex items-center space-x-4">
                    <div className="hidden lg:flex items-center space-x-2">
                        <span className="text-xl">📍</span>
                        <div className="text-sm">
                            <p>г. Ташкент, Сергелийский район,</p>
                            <p>ул. Сугдиана 50Ж</p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow items-center justify-center relative w-full md:max-w-[33%]">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="border bg-white outline-none border-gray-300 rounded-full px-4 py-2 w-full pl-10" // padding-left increased for the icon
                        />
                        <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-400" />
                    </div>
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="text-sm">
                        <p>📞 <a href="tel:+998990109094">+998 (99) 010 90 94</a></p>
                        <p>📞 <a href="tel:+998974508383">+998 (97) 450 83 83</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
