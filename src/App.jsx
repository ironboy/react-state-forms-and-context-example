import { useContext, useEffect } from 'react';
import { Outlet, useLoaderData } from "react-router";
import { GlobalContext } from './utils/GlobalContext';

App.loader = async () => {
  return await (await fetch('/api/products')).json();
};

export default function App() {

  const products = useLoaderData();
  const { setProp } = useContext(GlobalContext);

  useEffect(() => {
    // Set products in the global context
    setProp('products', products);
  }, []);

  return <>
    <header>
      <h1>Min sajt</h1>
    </header>
    <main>
      <Outlet />
    </main>
    <footer></footer>
  </>;
}