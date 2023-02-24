import React from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-28 p-4 pr-20 mx-10" alt="logo" src={logo} />
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="right flex justify-between bg-white shadow-lg sm:bg-black-50 md:bg-black-50 sm:bg-black-50">
      <Title />
      <div className="nav-items mr-12 justify-center">
        <ul className="flex py-10 text-black font-bold font-serif mx-5 ml-10 mr-8 justify-center">
          <li className="px-2 mr-4">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="px-2 mr-4">About</li>
          </Link>
          <Link to="/help">
            <li className="px-2 mr-4">Help</li>
          </Link>
          <Link to="/cart">
            <li className="font-sans block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700 ml-0">
              <a href="#" role="button" className="relative flex mr-4 ml-0">
                <svg className="flex-0 w-8 h-8 fill-current" viewbox="0 0 24 24">
                  <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                </svg>
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {Object.values(cartItems).reduce(
                  (accumulator, eachItem) => accumulator + eachItem.quantity,
                  0
                )}
                </span>
              </a>
            </li>
          </Link>
          <Link to="/login">
            <li className="px-2 ml-2 mr-4">Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
