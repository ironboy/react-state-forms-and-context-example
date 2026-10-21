import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { GlobalProvider } from './utils/GlobalContext.jsx';
import './index.css';
import App from './App.jsx';
import Start from './Start.jsx';
import ProductPage from './ProductPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    HydrateFallback: () => null,
    loader: App.loader,
    children: [
      {
        path: '/',
        Component: Start
      },
      {
        path: '/produkter',
        Component: ProductPage
      }
    ]
  },
]);

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);

