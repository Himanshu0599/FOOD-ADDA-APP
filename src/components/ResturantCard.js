import React from 'react';
import { IMG_CDN_URL } from '../constant'

const RestaurantCard = ({ cloudinaryImageId, area, name, city, locality, cuisines, avgRating, lastMileTravelString, costForTwoString }) => {
 console.log("locality",locality);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <div className="px-5 py-3 mb-2">
          <div className="font-bold text-lg mb-1">{name.length > 36 ? `${name.slice(36, name.length)}` : name}</div>
          <p className="text-gray-700 text-base">
            {cuisines.length > 3 ? `${cuisines[0]} ${cuisines[1]} ${cuisines[2]}` : cuisines.join(", ")}
          </p>
        </div>
        <div className="px-6 pt-4 pb-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{locality.length> 18 ? `${locality.slice(18,locality.length)}`:locality}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{area}</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{city}</span>
        </div>
        <div className='px-4 mb-2 justify-between items-center flex space-x-4'>
          <span className="bg-green-400 w-14 h-8 flex grid-cols-2 place-content-center items-center">
            <svg aria-hidden="true" className="w-5 h-5 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            {avgRating}
          </span>
          <span className="my-2 font-bold ">{lastMileTravelString}</span>
          <span className="my-2 font-bold ">{costForTwoString}</span>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard