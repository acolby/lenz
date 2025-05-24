# Lenz

**A visual debugging and annotation overlay for React apps.**  
Lenz lets you decorate elements in your app with `data-lenz` attributes and view them through an interactive overlay, helping with inspection, debugging, and collaboration.

## ✨ Features

- Overlay to inspect all elements marked with `data-lenz`
- Custom metadata support via `data-lenz-*` attributes
- Breadcrumb navigation for selected elements
- Pluggable UI for rendering metadata (`Comp`)
- Keyboard shortcuts and custom close behavior

## 🚀 Installation

```bash
npm install @acolby/lenz
# or
yarn add @acolby/lenz
```

## 🧠 Usage

In your React app:

```tsx
import { Lenz } from "@acolby/lenz";

function AppWrapper() {
  const [showLenz, setShowLenz] = useState(false);

  return (
    <>
      <Lenz
        show={showLenz}
        Comp={({ item }) => (
          <div className="border-2 border-blue-500 rounded-lg p-4 bg-white shadow-lg m-2 max-w-lg overflow-auto">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {"Whatever you want to render using the item of interest"}
            </h3>
          </div>
        )}
        onKeypress={(e) => {
          if (
            e.key === "Escape" ||
            e.key === "Delete" ||
            e.key === "Backspace"
          ) {
            setShowLenz(false);
          }
          if (e.ctrlKey && e.key === "l") {
            setShowLenz((prev) => !prev);
          }
        }}
        onCloseClicked={() => setShowLenz(false)}
      />

      <YourApp toggleLenzOverlay={() => setShowLenz((prev) => !prev)} />
    </>
  );
}
```

## 🏷️ Marking Elements

Use `data-lenz` to annotate elements:

```html
<div
  data-lenz="ProductCard"
  data-lenz-owner="Aaron"
  data-lenz-type="UI"
/>
```

These attributes are detected by Lenz and shown in the overlay when active.

## 🧭 Breadcrumbs

When an item is selected, Lenz displays a breadcrumb trail in the top-left corner of the page, giving context about where you are in the DOM/data-lenz hierarchy.

## 🛠 Customization

You can supply a custom `Comp` to render info about the selected item. This can be anything from a debug inspector to a design system label.

## ⌨️ Default Shortcuts

- `Ctrl + L`: Toggle Lenz overlay
- `Escape`, `Delete`, `Backspace`: Close overlay

## 🧪 Development Status

Lenz is under active development and contributions are welcome! This tool is ideal for developers, designers, and PMs who want better visibility into the structure of a React app.

## 📄 License

MIT
