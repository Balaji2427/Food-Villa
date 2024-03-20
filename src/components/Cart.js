import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl">Cart - {cartItems.length} Items</h1>
      <div>
        {cartItems.length === 0 ? (
          <>
            <h2 className="font-bold text-xl mt-5">
              Please Add items to the cart
            </h2>
            <Link to="/">
              <button className="bg-orange-500 mt-5 w-20 py-2 rounded-md text-white mb-8">
                Back
              </button>
            </Link>
          </>
        ) : (
          <button
            className="bg-orange-500 mt-5 w-28 py-2 rounded-md text-white mb-8"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        )}
        {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
