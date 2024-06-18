import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-50 mt-8 py-20" style={{ padding: "50px"}}>
      <div className="flex justify-center items-center mt-20">
        <div className="relative flex justify-between items-center w-full max-w-6xl">
          <div className="w-1/4 h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('hospital.jpg')", width: "195px", height: "195px" }}></div>
          <div className="w-1/4 h-60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('Hero1.jpg')", width: "195px", height: "195px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;