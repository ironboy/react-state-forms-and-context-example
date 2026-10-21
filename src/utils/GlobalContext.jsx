import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [state, setState] = useState({});
  function setProp(key, value) {
    setState({ ...state, [key]: value });
  }
  return <GlobalContext.Provider value={{ state, setProp }}>
    {children}
  </GlobalContext.Provider>;
}

