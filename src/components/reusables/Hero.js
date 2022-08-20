import React from 'react';
import { Container } from 'react-bootstrap';
import CustomButton from './CustomButton';

const Hero = ({ heading, type, btnType, btnText, borderAngle }) => {
  return (
    <div className={`hero ${type}`}>
      <Container>
        <div className='hero-content'>
          <h3 className='heading'>Hero</h3>
          <CustomButton type={btnType} title={btnText} />
        </div>
      </Container>
      {borderAngle && (
        <div className='angle-border-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path fill='#fff' fillOpacity='1' d='M0,192L1440,128L1440,320L0,320Z'></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Hero;
