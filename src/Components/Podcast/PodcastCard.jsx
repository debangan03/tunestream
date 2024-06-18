import React from "react";

const PodcastCard = ({ podcast, playmedia, pod }) => {
  return (
    <div className="max-w-sm rounded-lg  overflow-hidden  shadow-md shadow-zinc-800 m-4">
      <img className="w-full" src={podcast?.image} alt={podcast?.title} />
      <div className="p-2">
        <div className="font-bold text-xl  text-zinc-200">{podcast?.title}</div>
        <p className="text-zinc-300 text-sm">{podcast?.description}</p>
      </div>
      <div className=" p-2 pt-px">
        {podcast?.audiourl !== pod ? (
          <button
            onClick={()=>playmedia(podcast?.audiourl)}
            className="bg-zinc-800 border flex justify-start  text-white font-bold py-2 px-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            &nbsp; Play Now
          </button>
        ) : (
          <button
            onClick={()=>playmedia("")}
            className="bg-zinc-800 border flex justify-start  text-white font-bold py-2 px-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            &nbsp; Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default PodcastCard;
