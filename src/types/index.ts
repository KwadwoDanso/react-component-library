
import React from "react";

// AlertBox — the type prop is a union type restricting it to four values
export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
    type: AlertType;           // which color scheme to use
    message: string;           // the alert text to display
    onClose?: () => void;      // optional callback when close is clicked
    children?: React.ReactNode; // optional extra content below the message
}