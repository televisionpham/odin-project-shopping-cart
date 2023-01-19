import { useDispatch } from "react-redux";
import { addItem } from "../../store";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ product }));
  };

  return (
    <div className="card product-card">
      <img
        className="card-img-top"
        src={product.image}
        alt={product.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          <span>{product.name}</span>
          <span>${product.price}</span>
        </h5>
        <p className="card-text">{product.description}</p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
