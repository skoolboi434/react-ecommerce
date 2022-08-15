import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButton({ type, title }) {
  return <Button className={`${type}`}>{title}</Button>;
}

export default CustomButton;
