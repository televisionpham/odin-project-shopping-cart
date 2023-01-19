import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../store";

const CartProduct = (props) => {
  const { item, handleRemoveItem } = props;
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      const newValue = parseInt(quantity) - 1;
      setQuantity(newValue);
      dispatch(
        updateQuantity({
          id: item.product.name,
          quantity: newValue,
        })
      );
    }
  };

  const increaseQuantity = () => {
    const newValue = parseInt(quantity) + 1;
    setQuantity(newValue);
    dispatch(
      updateQuantity({
        id: item.product.name,
        quantity: newValue,
      })
    );
  };

  return (
    <div className="cart-item">
      <div className="cart-product">
        <img src={item.product.image} alt={item.product.name} />
        <p className="product-description">{item.product.description}</p>
      </div>
      <div className="input-group product-quantity">
        <button
          type="button"
          className="btn btn-light"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="number"
          min={0}
          value={quantity}
          onChange={(e) => handleQuantityChange(e)}
        />
        <button
          type="button"
          className="btn btn-light"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      <div className="product-cost">${item.product.price * item.quantity}</div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => handleRemoveItem(item.product.name)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default CartProduct;
