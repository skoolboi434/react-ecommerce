import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Carousel, Accordion, Button } from 'react-bootstrap';
import CustomButton from './reusables/CustomButton';

const ProductPage = ({ btnText, btnType }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`/wp-json/wp/v2/products/${id}/`); // <-- passed to API URL
      const data = await response.json();
      setProduct(data);

      console.log(data);
    };

    getProduct();
  }, [id]); // <-- used as dependency

  // const addProduct = () => {
  //   alert('Item Added To Cart');
  // };

  return (
    <div className='product-page-container mt-5'>
      <Container>
        <Link to='/'>Back</Link>
        <Row>
          <Col md={6}>
            <div className='gallery-container'>
              <Carousel>
                {product?.acf.image_gallery &&
                  product?.acf.image_gallery.map(data => {
                    // console.log(data);
                    return (
                      <Carousel.Item key={data.id}>
                        <img className='img-fluid gallery-image' src={data.sizes.large} alt={data.alt} />
                      </Carousel.Item>
                    );
                  })}
              </Carousel>
            </div>
          </Col>
          <Col md={6}>
            <div className='product-info'>
              <h3 className='heading'>{product?.title.rendered}</h3>

              <ul className='quick-features'>
                {product?.acf.quick_features &&
                  product?.acf.quick_features.map((data, index) => {
                    return (
                      <li key={index} className='feature'>
                        {data.feature}
                      </li>
                    );
                  })}
              </ul>
              <a href='#features' className='more-features'>
                More Features
              </a>
              <h4 className='price'>${product?.acf.price}</h4>
              <div className='cart-btn-container'>
                <div className='count-container'>
                  <Button className='countBtn' onClick={() => setCount(count - 1)}>
                    -
                  </Button>
                  <span className='count'>{count}</span>
                  <Button className='countBtn' onClick={() => setCount(count + 1)}>
                    +
                  </Button>
                </div>
                <CustomButton type='cartBtn' title='Add To Cart' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='product-page-content pb-3'>
        <Container className='mt-5'>
          <div className='descr-content mb-5'>
            <h3 className='heading'>Description</h3>
            <p dangerouslySetInnerHTML={{ __html: product?.content.rendered }} />
          </div>
          <a id='features'></a>
          <Accordion defaultActiveKey={['0']} alwaysOpen={true}>
            <Accordion.Item>
              <Accordion.Header>Features</Accordion.Header>
              <Accordion.Body>
                <ul className='features'>
                  {product?.acf.all_features &&
                    product?.acf.all_features.map(data => {
                      // console.log(data);
                      return (
                        <li key={data.id} className='feature'>
                          {data.feature}
                        </li>
                      );
                    })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default ProductPage;
