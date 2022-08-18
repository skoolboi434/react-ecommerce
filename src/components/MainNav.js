import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const MainNav = () => {
  return (
    <nav className='main-nav'>
      <Container>
        <Form className='d-flex'>
          <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Container>
    </nav>
  );
};

export default MainNav;
