const CartProduct = (props) => {
  const { item } = props;
  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.name} />
      <div className="description">{item.product.description}</div>
    </div>
  );
};

export default CartProduct;
