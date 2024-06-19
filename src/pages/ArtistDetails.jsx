import React, { useEffect, useState } from "react";
import MusicCard from "../Components/Music/MusicCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import MusicVisualizer from "../Components/MusicVisualizer";
const URL = import.meta.env.VITE_PUBLIC_URL;
import Loading from '../Components/Loading';

const ArtistDetails = ({
  handleSongSelect,
  currentArtist,
  handleArtistSelect,
  currentsong,
}) => {
  const { id } = useParams();
  const [artist, setartist] = useState();
  const [songs, setsongs] = useState();

  const fetchartistdetailsbyid = async () => {
    const { data } = await axios.post(
      `${URL}/getartistdetails`,
      {
        name: id,
      }
    );
    setartist(data.artist);
    setsongs(data.songs);
  };
  useEffect(() => {
    fetchartistdetailsbyid();
  }, []);
 
  return (
    <>
   {(artist && songs) ? <div className="min-h-screen flex flex-col pb-44 px-2 pt-2 items-center">
      <div className="w-full  stickey  p-3 flex flex-col rounded-xl shadow-zinc-800 shadow-md bg-zinc-900  top-0">
        <div className="relative">
          <img
            src={artist?.imageurl}
            alt={artist?.name}
            className="rounded-full object-top w-40 mx-auto h-40 object-cover mt-10"
          />
          {currentArtist === artist.name && (
            <div className="absolute bottom-2 lg:left-[49%] left-[45%]  ">
              <MusicVisualizer />
            </div>
          )}
        </div>
        <h1 className="text-2xl  text-white text-center mt-px">{artist.name}</h1>
      </div>
      <div className="w-full   mt-4 ">
        <h2 className="text-2xl text-white mb-4 a  ">Top Songs</h2>
        <div className="space-y-2 lg:max-h-full lg:space-x-4 max-h-[290px] overflow-y-auto lg:flex lg:flex-wrap lg:justify-center  no-scrollbar">
          {songs?.map((song, index) => (
            <MusicCard
              key={index}
              song={song}
              handleArtistSelect={handleArtistSelect}
              currentArtist={currentArtist}
              handleSongSelect={handleSongSelect}
              current={currentsong}
            />
          ))}
        </div>
      </div>
    </div>:<Loading/>}</>
  );
};

export default ArtistDetails;
