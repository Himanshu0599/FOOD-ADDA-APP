import { useEffect, useState } from "react";
import RestaurantCard from './ResturantCard'
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import { restaurantListCardsData } from "../constantData";
import { FETCH_MENU_URL } from '../constant'
import {Carousel_img} from '../constant'
import Carousel from './Carousel'


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("")
  const [carousel,setCarousel]=useState([])

  useEffect(() => {
    // if CORS is enable in browser then setTimeout will run and fetch the json data from API and render the UI
    // setTimeout(() => {
    //   getRestaurants();
    // }, 200);

    setTimeout(() => {
      // if CORS is not enable in browser then show the local data only and show the CORS error in console
      console.log(" restaurantListCardsData", restaurantListCardsData);
      setAllRestaurants(restaurantListCardsData);
      setFilteredRestaurants(restaurantListCardsData);
      //setCarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    }, 200);
  }, []);

  // async function getRestaurants() {
  //   try {
  //     const data = await fetch(FETCH_MENU_URL);
  //     const json = await data.json();
  //     console.log("json",json);
  //     //setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //     setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //     //setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //     setCarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  const handleChange = (e) => setSearchText(e.target.value)

  const handleClick = () => {
    setFilteredRestaurants(allRestaurants.filter(restaurant => {
      return restaurant.data.name.toLowerCase().includes(searchText);
    }))
  }
  const searchRestaurant = (searchtext, allRestaurants) => {
    if (searchText !== "") {
      const data = filterData(searchtext, allRestaurants);
      setFilteredRestaurants(data);
      if (data.length === 0) {
        setError(`Sorry we couldn't find the restaurant ${searchText}`)
      }
    } else {
      setError("")
      setFilteredRestaurants(allRestaurants)
    }

  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
       {/* <div className="carousel-box">
         <div className=" carouselOuter-Box">

         {carousel.map((item)=> (
          <div className="carouselInner-Box" key={item.id} >
            <img className="carousel-img" alt="carousel-logo" src={Carousel_img + item.imageId }/>
         </div>
         ))}                

           </div>
         </div> */}
      <div className="carousel-box">
      {/* RestaurantOffer-container */}
      <div className="flex overflow-x-auto">
        {carousel.map((item) => (
          <div className="w-64 px-2 p-2 flex-shrink-0" key={item.id}>
            <img className="w-full h-auto" alt="carousel-logo" src={Carousel_img + item.imageId} />
          </div>
        ))}
      </div>
    </div>
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
              searchRestaurant(e.target.value, allRestaurants)
            }}
          />
          <button
            type="submit"
            className="text-white  absolute right-2.5 bottom-2.5 bg-[#FC8019] font-medium rounded-lg text-sm px-4 py-2"
            onClick={() => {
              //need to filter the data
              searchRestaurant(searchText, allRestaurants)
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap space-x-10 m-8">
        {filteredRestaurants.map((restaurant) => {
          console.log("restaurant",restaurant);
          return (
            <Link className="card-link" key={restaurant?.data?.id} to={`restaurant/${restaurant?.data?.id}`} >
            <RestaurantCard resData={restaurant.data}/>
          </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body