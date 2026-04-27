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