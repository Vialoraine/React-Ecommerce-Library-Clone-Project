import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selecter--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Atomic Habits</h2>
                <div className="book__ratings"></div>
                <div className="book__selected--price"></div>
                <div className="book__summary">
                  <button className="btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="book__selected--title--top">
                  Recommended Books
                </h2>
              </div>
              <div className="books">
                <div className="book"></div>
                <div className="book"></div>
                <div className="book"></div>
                <div className="book"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
