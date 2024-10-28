import React, { useEffect, useState } from 'react';
import { getBooks } from '../service/service';
function Books() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBooks()
    .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {products.map(product => (
          <li>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
