import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomLinkContainer = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};

export default CustomLinkContainer;
