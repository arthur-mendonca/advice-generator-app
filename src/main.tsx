import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AdviceProvider } from "./contexts/advicesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AdviceProvider>
      <App />
    </AdviceProvider>
  </React.StrictMode>
);
