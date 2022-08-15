import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const ProductSingle = ({ product }) => {
  // console.log(product.acf.featured_image);
  return (
    <Col md={3}>
      <Link className='product-link' to={`/product/${product.id}`}>
        <div className='product-container'>
          <img className='img-fluid product-image' src={product.acf.featured_image.sizes.large} alt={product.acf.featured_image.alt} />
          <h3 className='heading'>{product.title.rendered}</h3>
          <h4 className='price'>${product.acf.price}</h4>
        </div>
      </Link>
    </Col>
  );
};

export default ProductSingle;
