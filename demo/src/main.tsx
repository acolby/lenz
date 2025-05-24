import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

import { Lenz } from "../../src";

const LenzWrapper = () => {
  const [showLenz, setShowLenz] = useState(false);

  return (
    <>
      <Lenz
        show={showLenz}
        Comp={({ item }) => {
          return (
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-white shadow-lg overflow-auto w-full">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                "Customizable Lenz Component"
              </h3>
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {JSON.stringify(item, null, 2)}
              </pre>
            </div>
          );
        }}
        onKeypress={(e) => {
          if (
            e.key === "Escape" ||
            e.key === "Delete" ||
            e.key === "Backspace"
          ) {
            setShowLenz(false);
          }
          if (e.ctrlKey && e.key === "l") {
            setShowLenz(!showLenz);
          }
        }}
        onCloseClicked={() => setShowLenz(false)}
      />
      <App toggleLenzOverlay={() => setShowLenz((prev) => !prev)} />
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenzWrapper />
  </StrictMode>
);
