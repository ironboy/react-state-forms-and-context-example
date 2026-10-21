import { Outlet } from "react-router";

export default function App() {
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