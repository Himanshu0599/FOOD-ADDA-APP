import { useParams } from "react-router-dom";
import { MENU_DETAILS } from "../constant";
import { useEffect,useState } from "react";

const useRestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantMenu, setRestaurauntMenu] = useState(null);
    const [filteredMenu, setFilteredMenu] = useState(null);

    useEffect(() => {
      getRestaurantMenuInfo();
    }, []);
  
    async function getRestaurantMenuInfo() {
      const data = await fetch(`${MENU_DETAILS}&menuId=${resId}`);
      const json = await data.json();
      setRestaurauntMenu(json.data);
       let menuData=Object.values(json?.data?.menu?.items).map((item)=>{
         return item
       })
       setFilteredMenu(menuData)
     }
    return {restaurantMenu,filteredMenu,setFilteredMenu};
  };
  
  export default useRestaurantMenu;