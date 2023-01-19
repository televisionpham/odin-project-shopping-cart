import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <header className="nav-bar">
      <div className="logo">ShoppingCart</div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/products">
          Products
        </Link>
        <Link className="nav-link" to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <span className="badge badge-light">{cart.reduce((total, x) => total + x.quantity, 0)}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
