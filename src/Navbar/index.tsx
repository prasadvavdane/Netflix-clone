
import { useRouter } from "next/router";
import Image from "next/image";
import { FiSearch, FiUser,FiHome } from "react-icons/fi"; // Import the search and user icons
import logo from "/public/images/logo.jpg";
interface NavbarItem {
  name: string;
  href: string;
}

const navbarItems: NavbarItem[] = [
  { name: "Home", href: "/" },
  { name: "TV Shows", href: "/" },
  { name: "Movies", href: "/src/videos" },
  { name: "My List", href: "/src/videos" },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black p-4">
      <div className="flex justify-between items-center">
        {/* logo,left */}
        <Image
        src={logo}
          alt="Netflix logo"
          width={60}
          height={30}
        />
        {/* nav elements */}
        <ul className="flex space-x-6 ml-10 mr-auto">
          {navbarItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-white font-semibold hover:text-blue-500 ${
                  router.pathname === item.href ? "text-blue-500" : ""
                } ml-4`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right corner */}
        <div className=" flex mr-5 ">
          {/* search bar */}
        <div className="flex items-center ml-auto">
          <div className="relative rounded-lg bg-white p-2">
            <FiSearch className=" absolute text-gray-600 text-xl cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none pl-7 rounded-full text-gray-800"
            />
          </div>
        </div>

        {/* user icon */}
        <div className="flex flex-col items-center">
          <FiUser className="text-white text-3xl" />
          <span className="text-white ml-2 text-md font-bold">Prasad</span>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
