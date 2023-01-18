import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div id="pageInfo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tristique viverra porta. Suspendisse volutpat odio sit amet metus
        semper, nec maximus felis ullamcorper
      </div>
      <Link id="shopNow" to="/products" className="btn">
        Shop now
      </Link>
    </div>
  );
};

export default Home;
