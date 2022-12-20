import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-16 flex h-16 w-screen items-center  justify-center pt-16">
      <div className="item-center flex justify-center md:ml-10 md:w-1/5">
        <Link href="/">
          <div className="relative opacity-75 transition duration-300 hover:opacity-100">
            <Image src={logo} alt="logo" className="w-12" />
          </div>
        </Link>
      </div>
      <nav className="hidden flex-1 items-center justify-center space-x-10 md:ml-16 md:flex">
        <a className="header-link-item">Gradients</a>
        <a className="header-link-item">
          Generator{' '}
          <span className="ml-1 rounded-[4px] bg-gradient-to-r from-[#9217d8] via-[#8515e0] to-[#7213f1] px-1">
            new
          </span>
        </a>
        <a className="header-link-item">About</a>
        <a className="header-link-item">Blog</a>
        <button
          className="rounded-md border-x-2 border-y-2 border-solid 
         border-blue-500 px-7 py-2 text-xs font-medium text-blue-500 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:opacity-75"
        >
          Sign up
        </button>
      </nav>
    </header>
  );
}
