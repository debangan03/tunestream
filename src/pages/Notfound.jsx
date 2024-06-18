import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-zinc-200 text-6xl font-bold">404</h1>
        <p className="text-zinc-400 mt-4">Page Not Found</p>
        <Link to="/" className="text-yellow-500 mt-6">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
