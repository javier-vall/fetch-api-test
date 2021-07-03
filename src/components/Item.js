import React from "react";

export default function Item({ product }) {
  const { title, img, price } = product;
  return (
    <div>
      <img src={img}></img>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}
