"use client"

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // for icons
import TopHeader from './TopHeader';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
     <TopHeader/>
     <Navigation/>
    </header>
  );
};

export default Header;
