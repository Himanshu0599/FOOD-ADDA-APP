import { useDispatch } from "react-redux";
import { addItem, clearItems, removeItem } from "../utils/cartSlice";
import "../css/addToCart.scss";
const AddToCart = ({ cartItems, menu }) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  const removeFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const clearCart = (itemId) => {
    dispatch(clearItems(itemId));
  };
  return (
    <div className="add-quantity">
      <div className="rounded decrease">
        <button
          type="button"
          onClick={() => {
            if (cartItems[menu.id]?.quantity <= 1) {
              clearCart(menu.id);
            } else {
              removeFromCart(menu.id);
            }
          }}
        >
        <span className="font-bold items-center">-</span>
        </button>
      </div>
      <div className="quantity-input">
        {!cartItems[menu.id]?.quantity ? 0 : cartItems[menu.id]?.quantity}
      </div>
      <div className="rounded increase">
        <button
          type="button"
          onClick={() => {
            addToCart(menu);
          }}
        >
        <span className="font-bold items-center">+</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;