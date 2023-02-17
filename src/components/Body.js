import { useEffect, useState } from "react";
import RestaurantCard from "./ResturantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { restaurantListCardsData } from "../constantData";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error,setError] =useState("")

  useEffect(() => {
    // if CORS is enable in browser then setTimeout will run and fetch the json data from API and render the UI
    setTimeout(() => {
      getRestaurants();
    }, 200);

    setTimeout(() => {
      // if CORS is not enable in browser then show the local data only and show the CORS error in console
      setAllRestaurants(restaurantListCardsData);
      setFilteredRestaurants(restaurantListCardsData);
    }, 200);
  }, []);

  async function getRestaurants() {
   try {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);    
   } catch (error) {
    console.log(error)
   }

  }

  const handleChange = (e) => setSearchText(e.target.value)

  const handleClick = () => {
    setFilteredRestaurants(allRestaurants.filter(restaurant => {
      return restaurant.data.name.toLowerCase().includes(searchText);
    }))
  }
  const searchRestaurant=(searchtext,allRestaurants)=>{
    if(searchText !==""){
      const data = filterData(searchtext, allRestaurants);
      setFilteredRestaurants(data);
      if(data.length ===0){
       setError(`Sorry we couldn't find the restaurant ${searchText}`)
      }
    }else{
      setError("")
      setFilteredRestaurants(allRestaurants)
    }
  
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>

      <div className="flex flex-col gap-4 lg:flex-row lg:px-6 justify-center items-center lg:gap-8 bg-[#494d60] py-20">
        <h1 className="text-white font-medium text-lg">Search by Restaurant</h1>
        <div className="relative flex flex-col gap-4">
          <input
            type="text"
            id="search"
            className="block w-[340px] md:w-[500px] lg:w-[700px] p-4 pl-4 lg:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none bg-gray-50"
            placeholder="Enter the Restaurant Name.."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              searchRestaurant(e.target.value,allRestaurants)
            }}
          />
          <button
            type="submit"
            className="text-white  absolute right-2.5 bottom-2.5 bg-[#FC8019] font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => {
              //need to filter the data
             searchRestaurant(searchText,allRestaurants)
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap space-x-10 m-8">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              className="m-8 rounded-lg p-1"
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body