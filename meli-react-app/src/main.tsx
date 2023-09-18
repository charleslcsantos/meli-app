import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AVAILABLE_ROUTES } from "./constants/AppConstants.ts";
import ItemDetail from "./pages/item-detail/ItemDetail.tsx";

const SearchResult = React.lazy(
  () => import("./pages/search-result/SearchResult")
);

const router = createBrowserRouter([
  {
    path: AVAILABLE_ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: AVAILABLE_ROUTES.ITEMS,
        element: (
          <React.Suspense fallback={<>Buscando produto...</>}>
            <SearchResult />
          </React.Suspense>
        ),
      },
      {
        path: AVAILABLE_ROUTES.ITEM_DETAIL,
        element: (
          <React.Suspense fallback={<>Carregando produto...</>}>
            <ItemDetail />
          </React.Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
