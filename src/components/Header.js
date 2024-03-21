import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Logo from "../images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const isOnline = useOnline();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center flex-wrap bg-black text-yellow-500 w-full fixed top-0 left-0">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-32 p-5" />
      </Link>
      <div className="hidden md:block">
        <ul className="ml-0 md:ml-16 font-semibold md:font-bold text-sm md:text-xl">
          <Link to="/" className="pr-10">
            Home
          </Link>
          <Link to="/about" className="pr-10">
            About
          </Link>
          <Link to="/contact" className="pr-10">
            Contact
          </Link>
          <Link to="/cart" className="pr-10">
            Cart - {cartItems.length} items
          </Link>
        </ul>
      </div>
      <h1 className="text-sm md:text-2xl">{isOnline ? "🟢" : "🔴"}</h1>

      {isLoggedIn ? (
        <button
          className="text-sm md:text-xl font-bold pr-10 text-red-500"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="text-sm md:text-xl font-bold pr-10 text-green-600"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
      {/* <button>Login</button> */}
      <button className="md:hidden mr-5 delay-[2000ms]" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <div className="bg-black h-50 flex flex-col basis-full">
          <Link to="/" className="pt-3 pb-5 pl-10">
            Home
          </Link>
          <Link to="/about" className="pb-5 pl-10">
            About
          </Link>
          <Link to="/contact" className="pb-5 pl-10">
            Contact
          </Link>
          <Link to="/cart" className="pb-5 pl-10">
            Cart - {cartItems.length} items
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
