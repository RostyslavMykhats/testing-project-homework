import React from "react";
import { useState } from "react";
import Image from "next/image";
import done from "./done.png";
import Link from "next/link";

const CardProduct = ({ product }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    // Get existing cart items from localStorage or initialize as an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product already exists in the cart
    const existingCartItem = existingCartItems.find((item) => item.id === product.id);

    // If the product is already in the cart, increase its quantity, otherwise add it as a new item
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      existingCartItems.push({ ...product, quantity: 1 });
    }

    // Save the updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Show the popup
    setShowPopup(true);
  };
  return (
    <div
      style={{
        textAlign: "center",
        height: "430px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
          flexDirection: "column",
        }}
      >
        <Link
          product={product}
          style={{
            textDecoration: "none",
            color: "#000",
          }}
          href={`/products/${product.id}?category=${product.category}`}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "138px",
              height: "200px",
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          />
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            {product.title}
          </h3>
          <p
            style={{
              fontSize: "22px",
              fontWeight: "400",
              marginBottom: "10px",
              color: "#009D35",
            }}
          >
            {product.price} USD
          </p>
        </Link>
      </div>
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          background: "#FF842C",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: "500",
          cursor: "pointer",
        }}
        onClick={handleAddToCart}
      >
        До кошика
      </button>
      {showPopup && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={() => setShowPopup(false)}
          />
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px 50px",
              borderRadius: "7px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              background: "#fff",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: "999",
            }}
          >
            <Image src={done} alt="done" width={50} height={50} />
            <p>Товар в кошику</p>
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                background: "#FF842C",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                width: "100%",
              }}
              onClick={() => setShowPopup(false)}
            >
              Закрыть
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardProduct;
