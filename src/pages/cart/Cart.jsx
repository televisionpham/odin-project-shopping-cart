import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
    window.location.reload(false);
  };

  return (
    <div id="cart">
      <h3>Your cart</h3>
      <div className="cart-items">
        {cart.map((item) => (
          <CartProduct
            item={item}
            key={item.product.name}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="cart-total">
        Total: $
        {cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )}
      </div>
      <button className="btn btn-warning" id="proceedToPay">
        PROCEED TO PAY
      </button>
    </div>
  );
};

export default Cart;
