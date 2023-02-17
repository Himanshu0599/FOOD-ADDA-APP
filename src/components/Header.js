
import React from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-28 p-4 pr-20 mx-10" alt="logo" src={logo} />
  </a>
);
const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isOnline = useOnline();

  // const { user } = useContext(UserContext);

  // const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="right flex justify-between bg-white shadow-lg sm:bg-black-50 md:bg-black-50 sm:bg-black-50">
       <Title />
      <div className="nav-items">
        <ul className="flex py-10 text-black font-bold font-serif mx-5 ml-10">
          <li className="px-2 ">
            <Link to="/">Home</Link>
          </li>

          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/help">
            <li className="px-2">Help</li>
          </Link>
         <Link to="/cart">
             <li className="px-2" data-testid="cart">
              Cart-items
              {/* {cartItems.length} */}
            </li> 
          </Link> 
        </ul>
      </div>
      {/* <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
