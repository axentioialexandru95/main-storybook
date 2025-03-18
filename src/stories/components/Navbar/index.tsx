import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaDribbble, FaFacebook } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="p-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image  width={100} height={100} src="logo.svg" alt="Phantom Tech" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaDribbble className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
