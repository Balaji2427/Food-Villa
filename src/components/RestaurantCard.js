import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, areaName }) => {
  return (
    <div className="w-80 mr-10 mb-16 text-center">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="card"
        className="w-80 h-60 rounded-lg mb-2"
      />
      <h2 className="text-xl font-bold text-orange-600">{name}</h2>
      <h3 className="text-sm mt-1 text-gray-500">
        {cuisines.join(", ").slice(0, 30)}
      </h3>
      <h4 className="text-md mt-1 font-bold">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
