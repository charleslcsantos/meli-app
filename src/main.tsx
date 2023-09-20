import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AVAILABLE_ROUTES } from "./constants/AppConstants.ts";
import Loader from "./components/loader/Loader.tsx";

const SearchResult = React.lazy(() => import("./pages/item-list/ItemList.tsx"));

const ItemDetail = React.lazy(
  () => import("./pages/item-detail/ItemDetail.tsx")
);

const router = createBrowserRouter([
  {
    path: AVAILABLE_ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: AVAILABLE_ROUTES.ITEMS,
        element: (
          <React.Suspense fallback={<Loader text="Buscando productos" />}>
            <SearchResult />
          </React.Suspense>
        ),
      },
      {
        path: AVAILABLE_ROUTES.ITEM_DETAIL,
        element: (
          <React.Suspense fallback={<Loader text="Carregando producto" />}>
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
