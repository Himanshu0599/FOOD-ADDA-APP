import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";
import "../css/addToCart.scss";

const AddToCart = ({ menu }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Update this line to access 'items' property

  const handleDecrease = () => {
    if (cartItems[menu.id]?.quantity <= 1) {
       dispatch(clearItems(menu.id));
     } else {
       dispatch(removeItem(menu.id));
     }
  };

  const handleIncrease = () => {
    console.log("meu",menu);
    dispatch(addItem(menu)); // Use 'addItem' directly, pass 'menu' as payload
  };

  return (
    <div className="add-quantity">
      <div className="rounded decrease">
        <button type="button" onClick={handleDecrease}>
          <span className="font-bold items-center">-</span>
        </button>
      </div>
      <div className="quantity-input">
        {(cartItems[menu.id]?.quantity ?? 0)}
      </div>
      <div className="rounded increase">
        <button type="button" onClick={handleIncrease}>
          <span className="font-bold items-center">+</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addItem, clearItems, removeItem } from "../utils/cartSlice";
// import "../css/addToCart.scss";

// const AddToCart = ({ menu }) => {

//   if (!menu) {
//     // Handle the case when `menu` is undefined or null.
//     return null; // Or you can return a default component or an error message.
//   }

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);
// console.log("cartItems",cartItems);
//   const handleDecrease = () => {
//     if (cartItems[menu.id]?.quantity <= 1) {
//       dispatch(clearItems(menu.id));
//     } else {
//       dispatch(removeItem(menu.id));
//     }
//   };

//   const handleIncrease = () => {
//     dispatch(addItem(menu));
//   };

//   return (
//     <div className="add-quantity">
//       <div className="rounded decrease">
//         <button type="button" onClick={handleDecrease}>
//           <span className="font-bold items-center">-</span>
//         </button>
//       </div>
//       <div className="quantity-input">
//         {(cartItems[menu.id]?.quantity ?? 0)}
//       </div>
//       <div className="rounded increase">
//         <button type="button" onClick={handleIncrease}>
//           <span className="font-bold items-center">+</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddToCart;
