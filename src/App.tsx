// App.tsx — demonstrates all three components working together
// Shows: importing components, passing props, composition, children prop

import { useState } from "react";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import { User, Product } from "./types";

function App() {
  // State to show/hide the success alert when a product is added to cart
  const [showAlert, setShowAlert] = useState(false);

  // Sample user data matching the User interface
  const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
  };

  // Sample product data matching the Product interface
  const product: Product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl:
      "https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=600",
    inStock: true,
  };

  // Second product — out of stock to show the disabled state
  const soldOutProduct: Product = {
    id: "2",
    name: "Limited Edition Speaker",
    price: 349.99,
    description: "Portable Bluetooth speaker with 360 sound.",
    inStock: false,
  };

  // Callback passed to ProductDisplay via the onAddToCart prop
  const handleAddToCart = (productId: string) => {
    console.log("Added product " + productId + " to cart");
    setShowAlert(true);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Component Library Demo</h1>

      {/* AlertBox — only visible after clicking Add to Cart */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        >
          {/* Children prop: extra content inside the alert */}
          <p style={{ fontSize: "0.85rem" }}>You can continue shopping.</p>
        </AlertBox>
      )}

      {/* Alert type examples */}
      <h2 style={{ marginTop: "1.5rem" }}>Alert Examples</h2>
      <AlertBox type="info" message="This is an informational message." />
      <AlertBox type="warning" message="Please review your input before submitting." />
      <AlertBox type="error" message="Something went wrong. Please try again." />

      {/* UserProfileCard with all optional props enabled */}
      <h2 style={{ marginTop: "1.5rem" }}>User Profile</h2>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert("Editing user " + userId)}
      >
        {/* Children prop: extra content at the bottom of the card */}
        <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
          Last login: 2 hours ago
        </p>
      </UserProfileCard>

      {/* Two ProductDisplay cards side by side */}
      <h2 style={{ marginTop: "1.5rem" }}>Products</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {/* In-stock product with all options shown */}
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
            Free shipping available
          </p>
        </ProductDisplay>

        {/* Out-of-stock product — button will be disabled */}
        <ProductDisplay
          product={soldOutProduct}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;