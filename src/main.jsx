import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext";
import { CustomerProvider } from "./context/CustomerContext";

// Add basepath: '/'
const router = createRouter({
  routeTree,
  basepath: "/", // <-- Important for deployment!
});

const rootElement = document.getElementById("root");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <CustomerProvider>
      <ProductsProvider>
      <RouterProvider router={router} />
      </ProductsProvider>
      </CustomerProvider>
    </StrictMode>
  );
}
