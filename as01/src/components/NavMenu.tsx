import React from 'react';
import Link from 'next/link';

const NavMenu: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
        <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
