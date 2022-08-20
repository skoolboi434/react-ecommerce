import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchCard = data => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);
  return (
    <div className='product-container'>
      <h3 className='heading'>{data.title}</h3>
    </div>
  );
};

export default SearchCard;
