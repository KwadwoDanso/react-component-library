# Component Library

A set of reusable React components built with TypeScript. Each component uses typed props via interfaces, prop destructuring, and the children prop for flexible composition.

## How to Run

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Components

### AlertBox

Displays a colored alert message. Supports four types: success, error, warning, and info.

```tsx
<AlertBox type="success" message="Profile saved!" onClose={() => setShow(false)}>
  <p>You can continue using the app.</p>
</AlertBox>
```

**Props (AlertBoxProps):**
- `type` (required) — "success" | "error" | "warning" | "info"
- `message` (required) — the alert text
- `onClose` (optional) — callback when close button is clicked
- `children` (optional) — extra content below the message

### UserProfileCard

Displays user info with an avatar, name, and optionally email and role.

```tsx
<UserProfileCard user={user} showEmail={true} showRole={true} onEdit={(id) => alert(id)}>
  <p>Last login: 2 hours ago</p>
</UserProfileCard>
```

**Props (UserProfileCardProps):**
- `user` (required) — object with id, name, email, role, and optional avatarUrl
- `showEmail` (optional) — show the email, defaults to false
- `showRole` (optional) — show the role, defaults to false
- `onEdit` (optional) — callback with userId when Edit is clicked
- `children` (optional) — extra content at the bottom

### ProductDisplay

Shows product info with optional description, stock badge, and add-to-cart button.

```tsx
<ProductDisplay product={product} showDescription={true} showStockStatus={true} onAddToCart={(id) => console.log(id)}>
  <p>Free shipping available</p>
</ProductDisplay>
```

**Props (ProductDisplayProps):**
- `product` (required) — object with id, name, price, description, imageUrl, inStock
- `showDescription` (optional) — show description text, defaults to false
- `showStockStatus` (optional) — show in-stock/out-of-stock badge, defaults to false
- `onAddToCart` (optional) — callback with productId, button disabled when out of stock
- `children` (optional) — extra content at the bottom

## Composition Example

In App.tsx, all three components work together. Clicking "Add to Cart" on a ProductDisplay triggers a success AlertBox to appear at the top of the page. This shows how components communicate through props and state.

## Reflection

1. **Optional props** — I used default values in destructuring (e.g., `showEmail = false`) so the component renders safely whether the prop is passed or not. Optional callbacks like `onEdit` are checked with {onEdit && (...)} before rendering their buttons.

2. **Interface design** — I kept each interface focused on what its component needs. The User and Product types are defined separately in types/index.ts so they can be reused. Optional fields use `?` to mark them as not required.

3. **Type safety** — All props are typed through interfaces. TypeScript catches missing required props and wrong types at compile time. The AlertType union type restricts the type prop to only four valid strings.

4. **Composition** — In App.tsx, the AlertBox appears when a product is added to cart, showing components communicating through state. Each component accepts `children` so extra content can be nested inside without modifying the component itself.


## Acknowledgement
Coded by Kwadwo
coded with AI for assistancte - claude and ChatGPT

## Resources

- React.dev
- Per Scholas React contnent
