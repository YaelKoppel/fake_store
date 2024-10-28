import React, { useEffect, useState } from 'react';
import {getProducts} from '../service/service';
function Jewlery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("jewelery")
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Jewelry</h2>
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

export default Jewlery;
