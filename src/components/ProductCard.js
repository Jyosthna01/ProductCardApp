import React from "react";
import "../components/ProductCard.css";

const ProductCard = ({ product, onToggleFavorite, onToggleExpand }) => {
  return (
    <div className={`product-card ${product.isFavorite ? "favorite" : ""}`}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => onToggleFavorite(product.id)}>
        {product.isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
      </button>
      <button onClick={() => onToggleExpand(product.id)}>
        {product.isExpanded ? "Hide Features" : "Show Features"}
      </button>
      {product.isExpanded && (
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCard;
