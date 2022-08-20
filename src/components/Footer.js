import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function loadLinks() {
      const response = await fetch('/wp-json/acf/v3/options/acf-footer-options');
      if (!response.ok) {
        // oups! something went wrong
        return;
      }

      const links = await response.json();
      setLinks(links);
      // console.log(links);
    }

    loadLinks();
  }, []);
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md={3}>
            <div className='footer-block'>
              <h3 className='heading'>Your Account</h3>
              {/* {console.log(links.acf.features_links)} */}
              {/* {links?.acf.your_account_links &&
                links?.acf.your_account_links.map(data => {
                  // console.log(data);
                  return (
                    <Link to={data.link.url} className='footer-link'>
                      {data.link.title}
                    </Link>
                  );
                })} */}
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-block'>
              <h3 className='heading'>Features</h3>
              {/* {links?.acf.features_links &&
                links?.acf.features_links.map(data => {
                  return (
                    <Link to={data.link.url} className='footer-link'>
                      {data.link.title}
                    </Link>
                  );
                })} */}
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-block'>
              <h3 className='heading'>Support</h3>
              {/* {links?.acf.support_links &&
                links?.acf.support_links.map(data => {
                  return (
                    <Link to={data.link.url} className='footer-link'>
                      {data.link.title}
                    </Link>
                  );
                })} */}
            </div>
          </Col>
          <Col md={3}>
            <div className='footer-block'>
              <h3 className='heading'>Connect With Us</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
