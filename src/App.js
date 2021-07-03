import data from "./data";
import React, { useEffect, useState } from "react";
import ItemsListContainer from "./components/ItemsListContainer";

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <h2>Cargando la wea...</h2>;
  }

  return (
    <>
      <h2>Products List</h2>
      <ItemsListContainer products={products} />
    </>
  );
}

export default App;
