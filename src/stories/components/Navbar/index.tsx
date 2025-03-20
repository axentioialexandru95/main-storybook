import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-4 sm:px-6 md:py-6 md:px-10">
      <div className="max-w-screen-2xl mx-auto">
        {/* Logo and social media icons */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/logo.svg"
                width={300}
                height={300}
                alt="Phantom Tech"
                className="h-6 sm:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Social Icons - Always visible */}
          <div className="flex items-center space-x-6 md:space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </a>
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
