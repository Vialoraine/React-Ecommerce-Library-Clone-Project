import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { books } from "./data";
import { BookInfo } from "./pages/BookInfo";
import { Cart } from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const addedItem = cart.find((item) => item.id === book.id);
    setCart((prevCart) =>
      addedItem
        ? [
            ...prevCart.map((item) => {
              return item.id === addedItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }
  function removeItem(item) {
    setCart((prevCart) =>
      addedItem
        ? [
            ...prevCart.map((item) => {
              return item.id === addedItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        <Route path="/cart" render={() => <Cart cart={cart} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
