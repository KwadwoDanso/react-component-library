Alertbox · TSX
Copy

// AlertBox.tsx — displays colored alerts (success, error, warning, info)
// Uses: interface typing, prop destructuring, optional props, children prop

import { AlertBoxProps } from "../../types";

// Each alert type maps to a different set of colors
const alertStyles = {
    success: { background: "#d1fae5", borderLeft: "4px solid #10b981", color: "#065f46" },
    error: { background: "#fee2e2", borderLeft: "4px solid #ef4444", color: "#991b1b" },
    warning: { background: "#fef3c7", borderLeft: "4px solid #f59e0b", color: "#92400e" },
    info: { background: "#dbeafe", borderLeft: "4px solid #3b82f6", color: "#1e40af" },
};

// Destructuring props directly in the function signature
function AlertBox({ type, message, onClose, children }: AlertBoxProps) {
    return (
        <div style={{ ...alertStyles[type], padding: "1rem", borderRadius: "4px", marginBottom: "1rem" }}>
            {/* Top row: message and optional close button */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ margin: 0, fontWeight: 500 }}>{message}</p>

                {/* Only render close button if onClose was passed */}
                {onClose && (
                    <button
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "1.25rem",
                            color: "inherit",
                        }}
                    >
                        x
                    </button>
                )}
            </div>

            {/* Render children below the message if any were passed */}
            {children && <div style={{ marginTop: "0.5rem" }}>{children}</div>}
        </div>
    );
}

export default AlertBox;