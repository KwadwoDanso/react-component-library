
import React from "react";

// AlertBox — the type prop is a union type restricting it to four values
export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
    type: AlertType;           // which color scheme to use
    message: string;           // the alert text to display
    onClose?: () => void;      // optional callback when close is clicked
    children?: React.ReactNode; // optional extra content below the message
}

// UserProfileCard
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;        // optional — shows initials if missing
}

export interface UserProfileCardProps {
    user: User;                // the user object to display
    showEmail?: boolean;       // whether to show the email (default false)
    showRole?: boolean;        // whether to show the role (default false)
    onEdit?: (userId: string) => void; // optional callback for edit button
    children?: React.ReactNode; // optional extra content at the bottom
}

// ProductDisplay
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;         // optional product image
    inStock: boolean;
}

export interface ProductDisplayProps {
    product: Product;          // the product object to display
    showDescription?: boolean; // whether to show description (default false)
    showStockStatus?: boolean; // whether to show stock badge (default false)
    onAddToCart?: (productId: string) => void; // optional cart callback
    children?: React.ReactNode; // optional extra content at the bottom
}