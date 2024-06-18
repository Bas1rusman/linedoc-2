import React from 'react';

const Nav = () => {
  const handleLoginClick = () => {
    window.location.href = '/login.html'; // arahkan pengguna ke halaman login
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between py-2 px-10">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="logo" className="h-20" />
          <span className="text-lg text-blue-300 font-bold">LineDoc</span>
          <div className="ml-4">
            <a href="/" className="text-gray-800 hover:text-blue-300">Beranda</a>
            <a href="/riwayat" className="text-gray-800 hover:text-blue-300 ml-4">Riwayat</a>
          </div>
        </div>
        <div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleLoginClick} // tambahkan event handler onClick
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;