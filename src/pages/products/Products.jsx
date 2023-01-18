import { products } from "../CONSTANTS";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      {products.map((p) => (
        <Product product={p} key={p.name} />
      ))}
    </div>
  );
};

export default Products;
