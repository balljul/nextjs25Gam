import React from 'react';
import NavMenu from './NavMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Next.js with TypeScript and Tailwind v4</h1>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
