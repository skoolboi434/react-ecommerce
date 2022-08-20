import React, { useEffect, useState } from 'react';
import ProductSingle from './ProductSingle';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch('/wp-json/wp/v2/products');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const products = await response.json();
      setProducts(products);
      // console.log(products);
    }

    loadProducts();
  }, []);

  return (
    <div className='products container mt-3 mb-5'>
      <Container>
        <Row>
          {products.map((product, index) => (
            <ProductSingle product={product} key={product.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
