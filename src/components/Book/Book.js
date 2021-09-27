import React from "react";
import "./Book.css";

const Book = ({ data, handleAddToCart }) => {
  const { name, price, published, writer, picture, email } = data;

  return (
    <div className="single-cart">
      <img src={picture} alt="" />
      <div className="single-cart-details">
        <p>Name: {name}</p>
        <p>Price: ${price}</p>
        <p>Writter: {writer}</p>
        <p>Published: {published}</p>
        <p>Publisher Email: {email}</p>
        <button className="btn btn-dark cart-button" onClick={()=>handleAddToCart(data)}><i className="fas fa-cart-plus"></i>Add to cart</button>
      </div>
    </div>
  );
};

export default Book;
