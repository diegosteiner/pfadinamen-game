import { RouterProvider, createHashHistory, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import "./index.css";
// import { registerSW } from "virtual:pwa-register";

const hashHistory = createHashHistory();
const router = createRouter({ routeTree, history: hashHistory });

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location)) {
//   registerSW();
// }
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
