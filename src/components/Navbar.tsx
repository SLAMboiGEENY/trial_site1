import React from 'react'
import { navLinks } from './Navitems';



interface NavLink {
  id: number;
  title: string;
  link: string;
}

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex">
        {navLinks.map((item: NavLink) => (
          <li key={item.id} className='mr-6'>
            <a href={item.link} className='text-gray-100 hover:text-gray-300'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;