import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
const URL = import.meta.env.VITE_PUBLIC_URL;
function MusicCard({ song, handleSongSelect, current, handleArtistSelect }) {
  const str = `${URL}/uploads/${song?.filename}`;

  return (
    <>
      <div className="flex  justify-between items-center rounded-lg p-2 px-4 bg-zinc-800 shadow-md shadow-zinc-900 ">
        <div className="left w-3/4 text-zinc-300 flex justify-start space-x-2 items-center">
          <img
            className="w-2/5 lg:w-3/5  lg:h-[120px] h-[60px] overflow-clip object-cover object-top rounded-lg"
            src={song?.icon}
            alt="icon"
          />
          <div>
            <p className="font-semibold">{song?.title.slice(0,16)}</p>
            <span className="text-[0.7rem]">{song?.artist.slice(0,15)}</span>
          </div>
        </div>
        <div className="right">
          {current === str ? (
            <FaPause
              onClick={() => {
                handleSongSelect("");
                handleArtistSelect();
              }}
              className="text-2xl text-yellow-500 "
            />
          ) : (
            <FaPlay
              onClick={() => {
                handleSongSelect(song?.filename);
                handleArtistSelect(song.artist);
              }}
              className="text-2xl text-yellow-500 "
            />
          )}
        </div>
      </div>
    </>
  );
}

export default MusicCard;
