import { useSelector } from "react-redux";
import { DELIVERY_CHARGES, IMG_CDN_URL, TAXES } from "../constant";
import "../css/cart.scss";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";
import PriceInfo from "./PriceInfo";
import useTotalPrice from "../utils/useTotalPrice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useTotalPrice(Object.values(cartItems));
  return (
    <div className="container">
      <div className="flex pb-5 justify-between items-center">
        <h1 className="py-2 my-2 text-3xl font-bold ml-12 font-serif">Cart Items</h1>
        <button className="btn">Clear Cart</button>
      </div>
      <div className="flex">
        <div className="items-list w-4/6 pr-6">
          {Object.values(cartItems).map((cartItem) => {
            return (
              <div
                key={cartItem.menu.id}
                className="border-bottom py-5 flex cart-item items-center justify-between mx-8"
              >
                <div className="flex justify-between mr-5 items-center">
                  <img
                    className="mr-5"
                    src={`${IMG_CDN_URL}/${cartItem?.menu?.cloudinaryImageId}`}
                    alt={cartItem?.menu?.name}
                  />

                  <div className="details">
                    <p className="break-words font-serif font-bold">{cartItem?.menu?.name}</p>
                     <p>
                      <PriceInfo cartItems={cartItems} menu={cartItem?.menu} />
                    </p> 
                  </div>
                </div>

                <AddToCart cartItems={cartItems} menu={cartItem?.menu} />
              </div>
            );
          })}
        </div>
      <div className="divider"></div>
        <div className="bill-details w-2/6 pl-6">
          <h4 className="font-bold text-2xl my-4 pb-2 border-bottom text-left font-serif">
            Bill Details
          </h4>
          <div className="flex justify-between price-info h-60 ">
            <ul>
              <li>Item Total</li>
              <li className="mb-4 font-serif">Delivery Charges</li>
              <li className="mb-10 font-serif">GST</li>
              <li className="font-bold font-serif">Final Price</li>
            </ul>
            <ul className="text-right">
              <li>
                <em className="fa fa-rupee mr-2"></em>
                 <span>{totalPrice}</span>
              </li>
              <li>
                <em className="fa fa-rupee mr-2"></em>
                <span>{DELIVERY_CHARGES}</span>
              </li>
              <li className="mb-10">
                <em className="fa fa-rupee mr-2"></em>
                 <span>{Math.round(totalPrice * TAXES * 100) / 100}</span> 
              </li>
              <li className="font-bold">
                <em className="fa fa-rupee mr-2"></em>
                 <span>
                  {Math.round(
                    (totalPrice + totalPrice * TAXES + DELIVERY_CHARGES) * 100
                  ) / 100}
                </span>
              </li>
            </ul>
          </div>
          <div className="payment flex justify-between items-center mb-8">
            <Link to="/">
              <ul className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2 ">Back</ul>
            </Link>
            <button className="bg-green-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
              Proceed to pay  <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;