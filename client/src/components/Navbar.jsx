import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="text-black flex items-center justify-between p-4 border-b border-slate-300">
      <Link to="/" className="logo font-bold text-2xl text-black">
        <span className='text-indigo-600'>&lt;</span>
        Quantum
        <span className='text-indigo-600'>Leap/&gt;</span>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className='bg-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-600 text-white'>Login</button>
        </Link>
        <Link to="/signup">
        <button className='bg-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-600 text-white'>Signup</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
