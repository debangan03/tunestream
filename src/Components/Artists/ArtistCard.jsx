import React from "react";
import { Link } from "react-router-dom";
import MusicVisualizer from "../MusicVisualizer";

function ArtistCard({ item, currentsong,currentArtist }) {
  return (
    <Link to={`/artistdetails/${item.name}`} className="flex flex-col items-center">
      <div className="h-fit  relative w-fit">
        <div className="relative">
          <img
            className="w-20 lg:w-36 h-20 lg:h-32 object-cover object-top rounded-full"
            src={item.imageurl}
            alt="icon"
          />
          {(currentArtist===item.name) && <div className="absolute bottom-2  left-[35%]  ">
            <MusicVisualizer />
          </div>}
        </div>
      </div>
      <p className="text-zinc-300 mt-2 capitalize text-center text-sm">
        {item.name}
      </p>
    </Link>
  );
}

export default ArtistCard;
