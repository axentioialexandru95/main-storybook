import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen dark:bg-background bg-phantom-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    </ThemeProvider>
  );
};

export default Layout; 