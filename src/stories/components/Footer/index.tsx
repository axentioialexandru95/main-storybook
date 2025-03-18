import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-surface border-t border-border py-12 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.svg" alt="Phantom Tech" width={150} height={40} priority />
            </Link>
            <p className="text-text-muted text-sm mb-4">
              Transforming ideas into successful MVPs with Laravel expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors p-2 shadow-neo-flat hover:shadow-neo-convex active:shadow-neo-pressed rounded-full"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors p-2 shadow-neo-flat hover:shadow-neo-convex active:shadow-neo-pressed rounded-full"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors p-2 shadow-neo-flat hover:shadow-neo-convex active:shadow-neo-pressed rounded-full"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="shadow-neo-flat p-4 rounded-lg">
              <h3 className="text-text font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">MVP Development</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Laravel Consulting</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">API Development</a></li>
                <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Database Design</a></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="shadow-neo-flat p-4 rounded-lg">
              <h3 className="text-text font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-text-muted hover:text-primary transition-colors">Features</a></li>
                <li><a href="#solutions" className="text-text-muted hover:text-primary transition-colors">Solutions</a></li>
                <li><a href="#pricing" className="text-text-muted hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#founder" className="text-text-muted hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="shadow-neo-flat p-4 rounded-lg">
              <h3 className="text-text font-bold mb-4">Contact</h3>
              <p className="text-text-muted mb-2">Email: contact@phantomtech.com</p>
              <p className="text-text-muted mb-4">Phone: +1 (555) 123-4567</p>
              <p className="text-text-muted text-sm">
                Available for projects worldwide
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-text-muted text-sm"
          >
            © {new Date().getFullYear()} Phantom Tech. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Cookie Policy</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 