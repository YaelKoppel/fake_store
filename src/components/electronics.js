import React, { useEffect, useState } from 'react';
import { getProducts } from '../service';
function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("electronics")
    .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Electronics</h2>
      <ul>
        {products.map(product => (
          <li>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Electronics;
