// UserProfileCard.tsx — displays a user's name, email, role, and avatar
// Uses: interface typing, prop destructuring, default values, children prop

import { UserProfileCardProps } from "../../types";

// Reusable style objects (inline styles use camelCase property names)
const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "1.5rem",
    maxWidth: "320px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
};

const avatarStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    backgroundColor: "#e5e7eb",
};

// Destructuring with default values for optional boolean props
function UserProfileCard({ user, showEmail = false, showRole = false, onEdit, children }: UserProfileCardProps) {
    // Get the first letter of the name for the avatar placeholder
    const initial = user.name.charAt(0).toUpperCase();

    return (
        <div style={cardStyle}>
            {/* Top section: avatar and name */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                {/* Show image if avatarUrl exists, otherwise show the initial */}
                {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.name} style={avatarStyle} />
                ) : (
                    <div style={{
                        ...avatarStyle,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        color: "#9ca3af",
                        fontWeight: 700,
                    }}>
                        {initial}
                    </div>
                )}

                <div>
                    <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{user.name}</h3>
                    {/* Ternary-style conditional: only show email if showEmail is true */}
                    {showEmail && (
                        <p style={{ margin: "0.25rem 0 0", color: "#6b7280", fontSize: "0.9rem" }}>
                            {user.email}
                        </p>
                    )}
                </div>
            </div>

            {/* Only show role if showRole is true */}
            {showRole && (
                <p style={{ margin: "0 0 0.75rem", color: "#6b7280", fontSize: "0.9rem" }}>
                    Role: {user.role}
                </p>
            )}

            {/* Only show Edit button if onEdit callback was passed */}
            {onEdit && (
                <button
                    onClick={() => onEdit(user.id)}
                    style={{
                        padding: "0.4rem 1rem",
                        backgroundColor: "#3b82f6",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                    }}
                >
                    Edit Profile
                </button>
            )}

            {/* Render children at the bottom of the card */}
            {children && <div style={{ marginTop: "0.75rem" }}>{children}</div>}
        </div>
    );
}

export default UserProfileCard;