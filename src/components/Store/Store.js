import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aside from "../Aside/Aside";
import Book from "../Book/Book";
import "./Store.css";

const Store = () => {
  const [books, setBooks] = useState([]);
  const [selectBooks, setSelectBooks] = useState([]);

  const url = "./fakeData.JSON";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToCart = (book) => {
    const books = [...selectBooks, book];
    setSelectBooks(books);
  };

  return (
    <>
      <ToastContainer />
      <div className="store-container">
        <div className="book-container">
          {books.map((book) => (
            <Book
              handleAddToCart={handleAddToCart}
              key={book._id}
              data={book}
            ></Book>
          ))}
        </div>
        <div className="aside-container">
          <Aside books={selectBooks}></Aside>
        </div>
      </div>
    </>
  );
};

export default Store;
