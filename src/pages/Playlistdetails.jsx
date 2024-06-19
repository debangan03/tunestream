import React, { useEffect, useState } from "react";
import MusicCard from "../Components/Music/MusicCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import MusicVisualizer from "../Components/MusicVisualizer";
import Loading from "../Components/Loading";
const URL = import.meta.env.VITE_PUBLIC_URL;

const Playlistdetails = ({
  handleSongSelect,
  currentArtist,
  handleArtistSelect,
  currentsong,
  currentPlaylist,
  handlePlaylistSelect,
}) => {
  const { id } = useParams();
  const [artist, setartist] = useState();
  const [songs, setsongs] = useState();
  const[includedsong,setincludeedsong] = useState();

  const fetchartistdetailsbyid = async () => {
    const { data } = await axios.get(`${URL}/getplaylist/${id}`);
    //console.log(data);
    setartist(data);
    setsongs(data.songs);
  };
  const fetchsonsinplaylist = async () => {
    const { data } = await axios.get(`${URL}/getallplaylistid/${id}`);
    //console.log(data);
    setincludeedsong(data.songs);
  };
  useEffect(() => {
    fetchartistdetailsbyid();
  }, [id]);

  return (
    <>
    {(artist && songs)?<div className="min-h-screen flex flex-col pb-44 px-2 pt-2 items-center">
      <div className="w-full  stickey  p-3 flex flex-col rounded-xl shadow-zinc-800 shadow-md bg-stone-800  top-0">
        <div className="relative">
          <img
            src={artist?.imageurl}
            alt={artist?.name}
            className="rounded-full object-top w-40 mx-auto h-40 object-cover mt-10"
          />
          
        </div>
        <h1 className="text-2xl  text-white  text-center mt-px">{artist.name}</h1>
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

export default Playlistdetails;
