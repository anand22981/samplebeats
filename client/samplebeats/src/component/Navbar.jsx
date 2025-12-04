import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/FullLogo_Transparent_NoBuffer.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Samples", href: "/Samples" },
  { name: "Blogs", href: "/Blogs" },
  { name: "Contacts", href: "/Contacts" },
  

];

  
 


export default function Navbar() {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-black z-50">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <img src={logo} className="h-12" />

        {/* Desktop menu */}
        <div className="hidden sm:flex  space-x-6">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-medium"
                  : "text-gray-300 hover:text-yellow-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Login */}
        <button onClick={() => { navigate("/Sigin")}} className="hidden sm:block text-gray-300 px-3 py-1 hover:bg-white/10 rounded-md">
          Login
        </button>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-black px-4 pb-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="block text-gray-300 py-2 border-b border-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <button className="mt-2 w-full text-left text-gray-300">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
