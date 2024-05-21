import React from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img src="" alt="" className="cart__book--img" />
                    <div className="cart__book--info">
                      <span className="cart__book--title">Book Title</span>
                      <span className="cart__book--price">$39.00</span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" className="cart__input" min={0} max={99} />
                  </div>
                  <div className="cart__total">
                    $39.00
                  </div>
                </div>
              </div>
              <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in your cart!</h2>
                <Link to="/books">
                  <button className="btn">Browse books</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
