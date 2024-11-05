import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./output.css";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Footer from "./components/Footer.tsx";
import PhrasePage from "./components/PhrasePage.tsx";

const router = createBrowserRouter([
  {
    path: "/pqpeuodeiolol",
    element: (
      <>
        <App />
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/pqpeuodeiolol/:id",
    element: (
      <>
        <PhrasePage />
        <Footer />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
