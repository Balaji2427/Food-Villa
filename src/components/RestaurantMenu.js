import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();

  const { restaurant, restaurantMenu } = useRestaurantMenu(resId);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex bg-amber-300 justify-center items-center p-5">
        <div className="">
          <img
            className="w-[20%] mx-10 my-5 rounded-lg"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt="res-img"
          />
        </div>
        <div className="mr-32">
          <h2 className="text-4xl font-bold mb-5">{restaurant?.name}</h2>
          <h2 className="text-md">{restaurant?.costForTwoMessage}</h2>
          {/* <h2>{restaurant?.cuisines.join(", ")}</h2> */}
          <h2 className="text-md mb-2">{restaurant?.avgRatingString}</h2>
          <h3 className="text-lg text-gray-800">{restaurant?.areaName}</h3>
          <h4 className="text-xl font-bold text-gray-800">
            {restaurant?.city}
          </h4>
        </div>
      </div>

      <div className="mt-10">
        <ul className="">
          {restaurantMenu.map((item) => (
            <li key={item?.card?.info?.id} className="flex items-center py-8">
              <div>
                <img
                  className="w-32 rounded-lg mr-48"
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold pb-2">
                  {item?.card?.info?.name}
                </h1>
                <button
                  className="bg-amber-300 py-2 text-sm rounded-lg w-20"
                  onClick={() => handleAddItem(item.card?.info)}
                >
                  Add +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
