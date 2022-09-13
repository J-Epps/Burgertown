import React from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const itemsPrice = props.cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.0575;
  const storePrice = itemsPrice + taxPrice;
  // const totalQty = props.cart.reduce((a, c) => a + c.qty, 0);
  // const shippingPrice > 2000 ? 0 : 50;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="viewCart">
      <div>
        {props.cart.length === 0 ? (
          <div className="viewCartTitle">Cart is Empty </div>
        ) : (
          <div className="viewCartTitle">Shopping Cart</div>
        )}
      </div>

      <table className="viewCartTable">
        <thead>
          <tr>
            <th className="viewCartTableProduct">PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
        </thead>

        <tbody>
          {props.cart.map((item) => (
            <tr key={item.id}>
              <th className="viewCartTableProduct">
                <Link
                  to="/product"
                  onClick={() => props.handleProductClick(item)}
                >
                  <img
                    className="viewCartImages"
                    src={item.image}
                    alt={item.image}
                  />
                  {item.name}
                </Link>
              </th>
              <th>${item.price}</th>
              <th>{item.qty}</th>
              <th>${(item.price * item.qty).toFixed(2)}</th>
            </tr>
          ))}
          {props.cart.length !== 0 && (
            <>
              <tr>
                <th className="viewCartTableProduct"></th>
                <th>Subtotal</th>
                <th>Taxes</th>
                <th>Total Price</th>
              </tr>
              <tr>
                <th></th>
                <th>${itemsPrice.toFixed(2)}</th>
                <th>${taxPrice.toFixed(2)}</th>
                <th>${storePrice.toFixed(2)}</th>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <div className="viewCartButtons">
        <div className="clearCart btn" onClick={props.handleClearCart}>
          CLEAR CART
        </div>
        <a href="/">
          <div className="checkout btn">CHECKOUT</div>
        </a>
      </div>
    </div>
  );
}
