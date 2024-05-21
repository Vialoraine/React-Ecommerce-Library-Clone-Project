import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/book" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src="https://covers.openlibrary.org/b/id/10958382-L.jpg"
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Atomic Habits</h2>
                <div className="book__ratings">
                  <FontAwesomeIcon icon="star" />
                  <FontAwesomeIcon icon="star" />
                  <FontAwesomeIcon icon="star" />
                  <FontAwesomeIcon icon="star" />
                  <FontAwesomeIcon icon="star" />
                </div>
                <div className="book__selected--price">$39.00</div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis nisi culpa totam. Laudantium iusto praesentium
                    tempora consequatur repellat aperiam, minima nulla, omnis ex
                    ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis nisi culpa totam. Laudantium iusto praesentium
                    tempora consequatur repellat aperiam, minima nulla, omnis ex
                    ipsa architecto magnam, qui eligendi sit deleniti?
                  </p>
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
