import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css';
import App from './App.jsx';
import Start from './Start.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '/',
        Component: Start
      }
    ]
  },
]);

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

