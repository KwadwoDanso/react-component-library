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

            {/* Description — only shown when showDescription is true */}
            {showDescription && (
                <p style={{ margin: "0 0 0.75rem", color: "#6b7280", fontSize: "0.9rem" }}>
                    {product.description}
                </p>
            )}

            {/* Stock badge — uses ternary to pick green (in stock) or red (out of stock) */}
            {showStockStatus && (
                <p style={{
                    display: "inline-block",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                    backgroundColor: product.inStock ? "#d1fae5" : "#fee2e2",
                    color: product.inStock ? "#065f46" : "#991b1b",
                }}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
            )}

            {/* Add to Cart — only shown if onAddToCart was passed, disabled when out of stock */}
            {onAddToCart && (
                <div>
                    <button
                        onClick={() => onAddToCart(product.id)}
                        disabled={!product.inStock}
                        style={{
                            padding: "0.5rem 1.25rem",
                            border: "none",
                            borderRadius: "4px",
                            cursor: product.inStock ? "pointer" : "not-allowed",
                            fontSize: "0.9rem",
                            backgroundColor: product.inStock ? "#3b82f6" : "#d1d5db",
                            color: product.inStock ? "#ffffff" : "#9ca3af",
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            )}

            {/* Children rendered at the bottom */}
            {children && <div style={{ marginTop: "0.75rem" }}>{children}</div>}
        </div>
    );
}

export default ProductDisplay;
