import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288",
    description: "This is a short description for Product 1.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 2,
    name: "Product 2",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349",
    description: "This is a short description for Product 2.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 3,
    name: "Product 3",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-918a8430--Books4.jpg?v=1620061368",
    description: "This is a short description for Product 3.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 4,
    name: "Product 4",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-0b918a84--Books3.jpg?v=1620061361",
    description: "This is a short description for Product 4.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 5,
    name: "Product 5",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-30b57dac--Books7.jpg?v=1620061394",
    description: "This is a short description for Product 5.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 6,
    name: "Product 6",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
    description: "This is a short description for Product 6.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 7,
    name: "Product 7",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288",
    description: "This is a short description for Product 7.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 8,
    name: "Product 8",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349",
    description: "This is a short description for Product 8.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 9,
    name: "Product 9",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-918a8430--Books4.jpg?v=1620061368",
    description: "This is a short description for Product 9.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 10,
    name: "Product 10",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-0b918a84--Books3.jpg?v=1620061361",
    description: "This is a short description for Product 10.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 11,
    name: "Product 11",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-30b57dac--Books7.jpg?v=1620061394",
    description: "This is a short description for Product 11.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 12,
    name: "Product 12",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
    description: "This is a short description for Product 12.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 13,
    name: "Product 13",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288",
    description: "This is a short description for Product 13.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 14,
    name: "Product 14",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349",
    description: "This is a short description for Product 14.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 15,
    name: "Product 15",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-918a8430--Books4.jpg?v=1620061368",
    description: "This is a short description for Product 15.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 16,
    name: "Product 16",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-0b918a84--Books3.jpg?v=1620061361",
    description: "This is a short description for Product 16.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 17,
    name: "Product 17",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-30b57dac--Books7.jpg?v=1620061394",
    description: "This is a short description for Product 17.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 18,
    name: "Product 18",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
    description: "This is a short description for Product 18.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 19,
    name: "Product 19",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-71b40b91--Books.jpg?v=1620061288",
    description: "This is a short description for Product 19.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 20,
    name: "Product 20",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b40b918a--Books2.jpg?v=1620061349",
    description: "This is a short description for Product 20.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 21,
    name: "Product 21",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-918a8430--Books4.jpg?v=1620061368",
    description: "This is a short description for Product 21.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 22,
    name: "Product 22",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-0b918a84--Books3.jpg?v=1620061361",
    description: "This is a short description for Product 22.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 23,
    name: "Product 23",
    price: "$10.99",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-30b57dac--Books7.jpg?v=1620061394",
    description: "This is a short description for Product 23.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
  {
    id: 24,
    name: "Product 24",
    price: "$15.49",
    image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
    description: "This is a short description for Product 24.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    isFavorite: false,
    isExpanded: false,
  },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const toggleFavorite = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const toggleExpand = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isExpanded: !product.isExpanded } : product
      )
    );
  };

  const clearFavorites = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, isFavorite: false }))
    );
  };

  const showFavoritesOnly = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.isFavorite)
    );
  };

  return (
    <div className="app">
      <h1>Product Card Application</h1>
      <button onClick={clearFavorites}>Clear Favorites</button>
      <button onClick={showFavoritesOnly}>Show Favorites Only</button>
      <ProductList
        products={products}
        onToggleFavorite={toggleFavorite}
        onToggleExpand={toggleExpand}
      />
    </div>
  );
};

export default App;
