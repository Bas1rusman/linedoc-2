import React from 'react';

const Box = () => {
  const boxes = [
    { imageSrc: "/dokter1.jpg", caption: "Chat dengan Dokter", linkTo: "/chat-dokter.html" },
    { imageSrc: "/hospital.jpg", caption: "RS Terdekat", linkTo: "/rs-terdekat.html" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {boxes.map((box, index) => (
          <a key={index} href={box.linkTo}>
            <div className="border rounded-md overflow-hidden shadow-md hover:shadow-lg cursor-pointer w-40">
              <img src={box.imageSrc} alt={box.caption} className="w-full h-auto max-w-xs" />
              {/* Mengatur max-width agar gambar tidak melebihi ukuran tertentu */}
              <div className="p-4">
                <h3 className="text-xl text-center font-semibold mb-2">{box.caption}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Box;