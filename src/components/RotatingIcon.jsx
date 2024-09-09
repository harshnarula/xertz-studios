import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

function RotatingIcon({ id, toggleRotation, rotated, setRotated }) {
  

  return (
    <div
      id={id} // Unique ID for each instance
      onClick={toggleRotation}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        transform: `rotate(${rotated ? 360 : 270}deg)`,
      }}
    >
      <IoMdArrowDropdown size={24} />
    </div>
  );
}

export default RotatingIcon;
