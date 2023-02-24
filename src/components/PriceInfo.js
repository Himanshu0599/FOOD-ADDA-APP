const PriceInfo = ({ cartItems, menu }) => {
    return (
      <>
        <span className="text-md font-extrabold">&#x20b9;</span>
        {parseFloat(
          cartItems[menu.id]?.quantity
            ? (menu.price / 100) * cartItems[menu.id]?.quantity
            : (menu.price / 100) * 1
        )}
      </>
    );
  };
  
  export default PriceInfo;