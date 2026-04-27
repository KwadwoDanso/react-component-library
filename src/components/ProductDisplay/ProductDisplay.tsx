// ProductDisplay.tsx — shows product info with optional description, stock badge, and cart button
// Uses: interface typing, prop destructuring, default values, conditional rendering, children prop

import { ProductDisplayProps } from "../../types";

const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1.5rem",
    maxWidth: "320px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover" as const,
    borderRadius: "4px",
    marginBottom: "1rem",
};

// Destructuring with defaults for optional booleans
function ProductDisplay({ product, showDescription = false, showStockStatus = false, onAddToCart, children }: ProductDisplayProps) {
    return (
        <div style={cardStyle}>
            {/* Only render image if imageUrl exists */}
            {product.imageUrl && (
                <img src={product.imageUrl} alt={product.name} style={imageStyle} />
            )}

            {/* Product name */}
            <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>{product.name}</h3>

            {/* Price — .toFixed(2) ensures two decimal places */}
            <p style={{ margin: "0 0 0.5rem", fontSize: "1.2rem", fontWeight: 700 }}>
                ${product.price.toFixed(2)}
            </p>