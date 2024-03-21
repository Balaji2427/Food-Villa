import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST } from "../utils/constants";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    setAllRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴You are offline, please check your network connection.</h1>;
  }

  // if (filteredRestaurants.length === 0) return <h1>No restaurants found</h1>;

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="text-center mt-40 mb-20">
        <input
          type="text"
          className="border border-gray-600 w-[200px] md:w-[500px] h-10 rounded-2xl pl-5 placeholder:text-md"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-5 bg-emerald-500 w-20 h-10 rounded-2xl text-gray-100"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard key={restaurant?.info?.id} {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
