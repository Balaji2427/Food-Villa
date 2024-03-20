import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import Logo from "../images/logo.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const isOnline = useOnline();

  return (
    <div className="flex justify-between items-center bg-black text-yellow-500">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-32 p-5" />
      </Link>
      <div>
        <ul className="ml-16 font-bold text-xl">
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
      <h1 className="text-2xl">{isOnline ? "🟢" : "🔴"}</h1>

      {isLoggedIn ? (
        <button
          className="text-xl font-bold pr-10 text-red-500"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="text-xl font-bold pr-10 text-green-600"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
      {/* <button>Login</button> */}
    </div>
  );
};

export default Header;
