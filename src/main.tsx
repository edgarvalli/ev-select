import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EVSelect from "./ev-select.tsx";
import "./ev-select.css";

const App = () => {
  return (
    <div className="container">
      <EVSelect
        options={[
          { id: 0, name: "Mango" },
          { id: 1, name: "Fresa" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
          { id: 2, name: "Piña" },
        ]}
        keyExtractor={(item) => String(item.id)}
        keyName="name"
      />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
