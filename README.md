# EV Select

A reusable, lightweight and customizable select/autocomplete component for React with TypeScript support.

Built with:

- React
- TypeScript
- Vite

Features:

- Keyboard navigation
- Async search support
- Internal filtering
- Generic typing
- Custom item rendering
- Debounced search
- Lightweight CSS
- No external UI dependencies

---

# Installation

```bash
npm install ev-select
```

or

```bash
yarn add ev-select
```

---

# Basic Usage

```tsx
import { useState } from "react";
import { EVSelect } from "ev-select";

export default function App() {
  const [fruits] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ]);

  return (
    <EVSelect<{ id: number; name: string }>
      options={fruits}
      keyExtractor={(item) => String(item.id)}
      keyName="name"
      fieldsToSearch={["name"]}
      label="Select Fruit"
      onChange={(item) => console.log(item)}
    />
  );
}
```

---

# Async Search Example

Use `onSearch` to perform backend/API requests.

```tsx
import { useState } from "react";
import { EVSelect } from "ev-select";

interface User {
  id: number;
  name: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (search: string) => {
    setLoading(true);

    const response = await fetch(`/api/users?search=${search}`);

    const data = await response.json();

    setUsers(data);

    setLoading(false);
  };

  return (
    <EVSelect<User>
      options={users}
      keyExtractor={(item) => String(item.id)}
      keyName="name"
      fieldsToSearch={["name"]}
      label="Search Users"
      onSearch={fetchUsers}
      loading={loading}
      disableInternalFilter
    />
  );
}
```

---

# Custom Render

```tsx
<EVSelect<User>
  options={users}
  keyExtractor={(item) => String(item.id)}
  keyName="name"
  onRenderItem={(user) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{user.name}</span>
      <small>#{user.id}</small>
    </div>
  )}
/>
```

---

# Props

| Prop                    | Type                      | Description                        |
| ----------------------- | ------------------------- | ---------------------------------- |
| `options`               | `T[]`                     | Options list                       |
| `keyExtractor`          | `(item: T) => string`     | Unique key generator               |
| `keyName`               | `keyof T`                 | Field used for display             |
| `fieldsToSearch`        | `(keyof T)[]`             | Fields used for internal filtering |
| `label`                 | `string`                  | Input label                        |
| `delay`                 | `number`                  | Debounce delay in ms               |
| `onChange`              | `(item: T) => void`       | Triggered when item is selected    |
| `onSearch`              | `(value: string) => void` | Triggered after debounce           |
| `onFocus`               | `() => void`              | Input focus event                  |
| `onBlur`                | `() => void`              | Input blur event                   |
| `onRenderItem`          | `(item: T) => ReactNode`  | Custom option renderer             |
| `loading`               | `boolean`                 | Displays loader                    |
| `disableInternalFilter` | `boolean`                 | Disables internal filtering        |

---

# Keyboard Navigation

Supported keys:

| Key         | Action                    |
| ----------- | ------------------------- |
| `ArrowDown` | Navigate down             |
| `ArrowUp`   | Navigate up               |
| `Enter`     | Select highlighted option |
| `Escape`    | Close dropdown            |

---

# Internal Filtering

By default, the component filters options internally.

```tsx
<EVSelect options={data} fieldsToSearch={["name"]} />
```

---

# Disable Internal Filtering

Useful for async/server-side search.

```tsx
<EVSelect options={data} disableInternalFilter onSearch={fetchData} />
```

---

# TypeScript Support

Fully typed using generics.

```tsx
interface Product {
  id: number;
  name: string;
  category: string;
}

<EVSelect<Product>
  options={products}
  keyExtractor={(item) => String(item.id)}
  keyName="name"
/>;
```

---

# Styling

The component includes built-in CSS styles.

No additional setup is required.

---

# CSS Variables

You can customize styles using CSS variables.

```css
.ev-select {
  --ev-border-color: #3b82f6;
  --ev-border-radius: 12px;
  --ev-bg: #ffffff;
  --ev-text: #111827;
  --ev-hover: #eff6ff;
}
```

---

# Accessibility

Features:

- Keyboard navigation
- Focus states
- Accessible interactions
- Input-based navigation

---

# Package Structure

```txt
src/
  components/
  styles/
  index.ts
```

---

# Build

```bash
npm run build
```

---

# Development

```bash
npm run dev
```

---

# Peer Dependencies

```json
{
  "react": "^18 || ^19",
  "react-dom": "^18 || ^19"
}
```

---

# Recommended Improvements

Future roadmap:

- Virtualized list
- Multi-select
- Grouped options
- Accessibility improvements
- Controlled mode
- Mobile optimizations
- Custom dropdown positioning

---

# License

MIT

---

# Author

Your Name

---

# Repository

GitHub Repository URL
