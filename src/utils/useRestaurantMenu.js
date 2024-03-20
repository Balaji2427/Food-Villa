import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    const menu = json?.data?.cards[0]?.card?.card?.info;
    const menuItems =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    setRestaurant(menu);
    setRestaurantMenu(menuItems);
  };
  return { restaurant, restaurantMenu };
};

export default useRestaurantMenu;
