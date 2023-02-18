import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import { MENU_DETAILS } from "../constant";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
   const { restaurantMenu} = useRestaurantMenu();
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div>
      {/* black screen */}
      <div className="flex flex-col justify-center gap-6 lg:flex-row bg-gray-900 text-white p-10 lg:justify-around">
        {/* image */}
        <img
          className=" w-72 rounded-md lg:ml-24"
          src={IMG_CDN_URL + restaurantMenu?.cloudinaryImageId}
          key="res1"
          id="res12"
          alt="KFC"
        />
        {/* div for restarant */}
        <div className="flex flex-col gap-2 justify-center lg:mr-24">
          <h1 className="text-2xl font-medium">{restaurantMenu?.name}</h1>

          <h4>{restaurantMenu?.cuisines?.join(" , ")}</h4>

          <div className="flex gap-2">
            <h4>{restaurantMenu?.area}</h4>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 ">
            <div className="flex items-center sm:flex-col gap-2">
              <div className="flex gap-2 justify-center">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <h4 className="text-sm font-medium">
                  {restaurantMenu?.avgRating} stars
                </h4>
              </div>
              <h4 className="text-xs font-light">
                {restaurantMenu?.totalRatingsString}
              </h4>
            </div>
            <div className="bg-white w-px hidden sm:flex text-white"></div>
            <div className="flex items-center sm:flex-col gap-2">
              <h4 className="text-sm font-medium">29 Mins</h4>
              <h4 className="text-xs font-light">Delivery Time</h4>
            </div>
            <div className="bg-white h-12 w-px hidden sm:flex text-white"></div>

            <div className="flex items-center sm:flex-col gap-2">
              <h4 className="text-sm font-medium">
                {restaurantMenu?.costForTwoMsg}
              </h4>
              <h4 className="text-xs font-light">Cost for two</h4>
            </div>
          </div>
        </div>
        {/* div for offers */}
        <div className="border-2 rounded-xl flex flex-col gap-4 border-dashed border-[#FC8019] p-3 sm:p-6 sm:mr-32">
          <h1 className="text-[#FC8019] font-medium text-lg">Offers</h1>
          <div className="flex gap-4">
            {/* <img src={Offertag} key="offertag" className="w-6 h-6" /> */}
            <h4 className="font-light text-sm">
              50% off upto 100 Rs | Use code TRYNEW
            </h4>{" "}
          </div>
          <div className="flex gap-4">
            {/* <img src={Offertag} key="offertag" className="w-6 h-6" /> */}
            <h4 className="font-light text-sm">
              10% off | Use code  WELCOME
            </h4>{" "}
          </div>
        </div>
      </div>
      {/* search bar */}
      {/* favourite */}

      <div className="grid grid-flow-row p-8 lg:grid-cols-4 lg:p-12 lg:px-24">
        <div className="hidden lg:flex flex-col gap-4 mr-6">
          {restaurantMenu?.menu?.widgets.map((item, index) => (
            <h6
              className="font-medium text-sm hover:text-[#FC8019] text-right"
              id={item.name}
              key={index}
            >
              <a href={"#" + item.name}> {item.name}</a>
            </h6>
          ))}
        </div>
        <div className="w-px hidden lg:flex bg-gray-200 border-0 dark:bg-gray-900"></div>

        {/* <div className="bg-[#808080] w-0.5 border-2 border-solid"></div> */}

        {/* menu list */}
        <div className="lg:-ml-72">
          {Object.values(restaurantMenu?.menu?.items).map((item, index) => (
            <div className="">
              <div className="grid grid-flow-row grid-cols-2 justify-between gap-20 xl:gap-48">
                <div className="flex flex-col gap-2">
                  <div className="w-4">
                    {item?.attributes?.vegClassifier === "VEG" ? (
                      <img src="https://iamgoingvegan.b-cdn.net/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg" />
                    ) : item?.attributes?.vegClassifier === "NONVEG" ? (
                      <img src="https://w7.pngwing.com/pngs/815/552/png-transparent-lentil-soup-veggie-burger-vegetarianism-vegetarian-and-non-vegetarian-marks-non-veg-food-miscellaneous-angle-food-thumbnail.png" />
                    ) : (
                      " "
                    )}
                  </div>
                  <h4 className="text-[#202020] font-medium text-sm">
                    {item?.name}
                  </h4>
                  <h4 className="text-[#000000] text-sm font-medium">
                    ₹{item?.price / 100}
                  </h4>
                </div>

                <div className="flex flex-col items-center  ">
                  <img
                    alt="#"
                    className="lg:w-32 rounded-lg"
                    src={
                      !item?.cloudinaryImageId
                        ? "https://cdn3d.iconscout.com/3d/premium/thumb/food-and-drink-5727926-4800418.png"
                        : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                        item.cloudinaryImageId
                    }
                  />
                  <button className="text-[#1AC84B] w-24 -mt-5 font-medium bg-white px-6 py-2 border rounded-lg shadow-lg border-white z-10 mt-2">
                    Add
                  </button>
                </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

