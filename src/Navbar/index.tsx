import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiMenu, FiX,FiUser } from "react-icons/fi";
import Link from "next/link";

interface NavbarItem {
  name: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/" },
  { name: "Movies", href: "/" },
  { name: "My List", href: "/" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="flex justify-between items-center">
        {/* Logo, left */}
        <Link href="/">
          
            <Image src="/images/logo.jpg" alt="Netflix logo" width={180} height={180} />
        
        </Link>

        {/* Nav elements for non-mobile view */}
        <ul className="hidden sm:flex space-x-6 ml-10">
          {navbarItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}
                
                  className={`text-white font-semibold hover:text-blue-500 ${
                    router.pathname === item.href ? "text-blue-500" : ""
                  } ml-4`}
                >
                  {item.name}
              
              </Link>
            </li>
          ))}
        </ul>

        {/* Right corner for non-mobile view */}
        <div className="flex items-center ml-auto hidden sm:flex">
          {/* Your existing code for non-mobile view */}
          <div className="relative rounded-lg bg-white p-2 ml-4">
            {/* Your search bar code here */}
          </div>

          <div className="flex items-center ml-4">
            {/* Your user icon code here */}
            <FiUser className="text-white text-3xl" />
            <span className="text-white ml-2 text-md font-bold">Prasad</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center ml-auto sm:hidden">
          {isMobileMenuOpen ? (
            <div className="flex flex-col items-start w-full">
              {/* Nav elements for mobile view */}
              <ul className="flex flex-col w-full mt-4">
                {navbarItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}
                        className={`text-white font-semibold hover:text-blue-500 ${
                          router.pathname === item.href ? "text-blue-500" : ""
                        } my-2 pl-4`}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                    
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <FiMenu className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
