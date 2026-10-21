import { use } from "react";
import { Outlet, useLoaderData } from "react-router";

App.loader = async () => {
  return await (await fetch('/api/products')).json();
};

export default function App() {

  const products = useLoaderData();
  console.log({ products });

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