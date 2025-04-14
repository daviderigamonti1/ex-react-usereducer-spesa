import React from 'react';
import { useState } from 'react';

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = product => {
    const isProductAlreadyAdded = addedProducts.some(p => p.name === product.name);
    if (isProductAlreadyAdded) {
      return;
    }
    setAddedProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }])
  }
  return (
    <>
      <h1>Lista dei prodotti</h1>
      <ul>
        {products.map((product, i) => (
          <li key={i}>
            <p>{product.name} ({product.price.toFixed(2)}€)</p>
            <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (<>
        <h2>Prodotti nel carrello</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              <p>{p.quantity} x {p.name} ({p.price.toFixed(2)}€)</p>
            </li>
          ))}
        </ul>
      </>)}


    </>
  )
}

export default App;
