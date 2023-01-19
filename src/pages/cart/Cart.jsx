import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div id="cart">
      <h3>Your cart</h3>
      <div className="cart-items">
        {cart.map((item) => (
          <CartProduct item={item} key={item.product.name} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
