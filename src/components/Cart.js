// import React,{Component} from 'react';
import CartItems from "./CartItems";

const Cart = (props) => {
  const { product } = props;
  return (
    <div>
      {product.map((prod) => {
        return <CartItems product={prod} key={prod.id} />;
      })}
    </div>
  );
};
export default Cart;
