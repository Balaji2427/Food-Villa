import { IMG_CDN_URL } from "../utils/constants";

const CartItems = ({ name, category, price, imageId }) => {
  return (
    <div className="flex ml-2 md:ml-[400px] mt-10">
      <img
        src={IMG_CDN_URL + imageId}
        alt="card"
        className="w-28 md:w-32 rounded-lg mr-5 md:mr-20"
      />
      <div>
        <h2 className="mt-2 md:mt-10 font-bold text-md md:text-lg text-center">{name}</h2>
        {/* <h3 className="mt-10 text-md">{category}</h3> */}
        <h4 className="mt-2 text-md text-center md:text-left">
          Price: {price / 100}
        </h4>
      </div>
    </div>
  );
};

export default CartItems;
