import React from 'react';
import { BiSolidSun, BiSolidMoon, BiUserCircle } from "react-icons/bi";

const NavLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Bookings", link: "/#booking" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = ({ theme, setTheme, isLoggedIn }) => {
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-4xl font-bold font-serif ml-4">VeloRent</h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NavLinks.map((data) => (
              <a
                key={data.id}
                href={data.link}
                className="py-2 text-lg font-medium hover:text-primary hover:border-b-2 border-primary transition duration-300"
              >
                {data.name}
              </a>
            ))}
            {!isLoggedIn ? (
              <a
                href="/signup"
                className="
              bg-transparent
              hover:bg-[#FF3D3D]
              text-[#FF3D3D]
              hover:text-white
              font-medium
              py-2 px-6
              rounded-[.375rem]
              border-2
              border-[#FF3D3D]
              tracking-wide
              transition-colors duration-500"
              >
                SignUp
              </a>
            ) : (
              <BiUserCircle className="text-3xl cursor-pointer hover:text-primary" title="Profile" />
            )}

            {/* Theme Toggle */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
