import React, { useState, useRef } from 'react';
import { Form, Button, Container, Modal, Row, Col } from 'react-bootstrap';
import SearchCard from './reusables/SearchCard';
import { Link } from 'react-router-dom';

const MainNav = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const inputRef = useRef(null);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = event => {
    setSearchValue(event.target.value);

    // console.log('value is:', event.target.value);
  };
  // function handleClick() {
  //   console.log(inputRef.current.value);
  // }

  const handleClick = async e => {
    setIsLoading(true);
    console.log(inputRef.current.value);

    const getResults = async () => {
      const response = await fetch(`/wp-json/wp/v2/search?search=${inputRef.current.value}&_embed`); // <-- passed to API URL
      const data = await response.json();
      setData(data);

      console.log(data);
    };

    getResults();
  };

  console.log(data);
  return (
    <nav className='main-nav'>
      <Container>
        <Form className='d-flex'>
          <input className='form-control' type='text' ref={inputRef} id='seachValue' onChange={handleChange} value={searchValue} />
          <Button
            variant='outline-success'
            onClick={() => {
              handleClick();
              handleShow();
            }}
          >
            Search
          </Button>
        </Form>
        {err && <h2>{err}</h2>}
        {/* {isLoading && <h2>Loading...</h2>} */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <Container>
              <Row>
                {data &&
                  data.length > 0 &&
                  data.map(data => {
                    console.log(data);
                    return (
                      <Col md={6}>
                        <Link className='product-link' to={`/product/${data.id}`} onClick={handleClose}>
                          <SearchCard id={data.id} title={data.title} />
                        </Link>
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Close Search Results
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </nav>
  );
};

export default MainNav;
