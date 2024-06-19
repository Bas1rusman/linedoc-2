import React from 'react';

const ImageBox = ({ imageSrc, caption }) => {
  return (
    <div className="max-w-xss rounded overflow-hidden shadow-lg m-4" style={{ margin: '0.5rem' }}>
      <img className="w-24 h-24 object-cover mx-auto" src={imageSrc} alt="Display" />
      <div className="px-2 py-1">
        <div className="font-bold text-lg text-center">{caption}</div>
      </div>
    </div>
  );
}

export default ImageBox;