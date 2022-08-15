import React, { Component } from 'react';
import axios from 'axios';
import ProductSingle from './ProductSingle';

export class ProductsNew extends Component {
  state = {
    products: [],
    isLoaded: false
  };

  componentDidMount() {
    axios
      .get('/wp-json/wp/v2/products')
      .then(res =>
        this.setState({
          products: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const { products, isLoaded } = this.state;

    if (isLoaded) {
      return (
        <div>
          {products.map((product, index) => (
            <ProductSingle product={product} key={product.id} />
          ))}
        </div>
      );
    }
  }
}

export default ProductsNew;
