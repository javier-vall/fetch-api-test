import React from "react";
import ItemsList from "./ItemsList";

export default function ItemsListContainer({ products }) {
  return (
    <>
      <ItemsList products={products} />
    </>
  );
}
