import { IMG_CDN_URL } from "../utils/constants";

const CartItems = ({ name, description, price, imageId }) => {
  return (
    <div className="flex ml-[300px] mt-10">
      <img
        src={IMG_CDN_URL + imageId}
        alt="card"
        className="w-32 rounded-lg mr-20"
      />
      <div>
        <h2 className="mt-10 font-bold text-lg">{name}</h2>
        {/* <h3>{description?.slice(0, 80)}</h3> */}
        <h4 className="mt-2 text-md text-left">Price: {price / 100}</h4>
      </div>
    </div>
  );
};

export default CartItems;
