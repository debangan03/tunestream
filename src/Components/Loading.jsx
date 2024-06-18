import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950">
      <div className="flex flex-col items-center">
        {/* <svg
          className="h-16 w-16 text-white"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 00-9 5.09 1 1 0 001.75.97A8 8 0 1112 20a1 1 0 000-2 6 6 0 100-12 1 1 0 000 2 4 4 0 110 8 1 1 0 000 2 6 6 0 01-6-6 1 1 0 00-2 0 8 8 0 008 8 10 10 0 100-20z"
          ></path>
        </svg> */}
        <span class="loader"></span>
        <p className="text-zinc-200 mt-4 text-xl font-semibold animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
