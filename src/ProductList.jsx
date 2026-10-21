import { useContext } from 'react';
import { GlobalContext } from './utils/GlobalContext';

export default function ProductList() {

  const { state } = useContext(GlobalContext);
  const { products } = state;

  return !products ? null : <>
    {products.map(({ id, name, description, price }) => <div key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p><b>Pris:</b> {price} kr</p>
    </div>)}
  </>;
}