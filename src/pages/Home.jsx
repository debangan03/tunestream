import React, { useEffect, useState } from "react";
import Card from "../Components/Music/Card";
import ArtistCard from "../Components/Artists/ArtistCard";
import MusicCard from "../Components/Music/MusicCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
const URL = import.meta.env.VITE_PUBLIC_URL;

function Home({ handleSongSelect, currentsong,handleArtistSelect,currentArtist }) {
  const navigate = useNavigate()
  const [songs, setsongs] = useState();
  const [artists, setArtists] = useState();
  const [playlists, setPlaylists] = useState();
  
  const getallsongs = async () => {
    const { data } = await axios.get(`${URL}/newsongs`);
    setsongs(data);
  };
  const fetchallplaylists=async()=>{
    try {
      const {data} = await axios.get(`${URL}/getallplaylist`);
      //console.log(data);
      setPlaylists(data);
    } catch (err) {
      console.error("Error fetching playlists:", err);
    }
  }
  const fetchArtists = async () => {
    try {
      const res = await axios.get(`${URL}/getartists`);
      setArtists(res.data);
    } catch (err) {
      console.error("Error fetching artists:", err);
    }
  };
  useEffect(() => {
    fetchallplaylists();
    getallsongs();
    fetchArtists();
  }, []);
  //console.log(currentsong);
  return (
    <>
    {(songs && artists && playlists)?<div
      className={`min-h-screen   flex flex-col 
        pb-[170px] pt-4 px-2 `}
    >
      <h1 className="text-zinc-200  font-semibold font-sans text-2xl">
        Discover
      </h1>

      <div className="mt-10 h-fit no-scrollbar items-center   flex space-x-4 overflow-x-scroll">
        {playlists && playlists.map((item,i)=>{return(<div key={i} onClick={()=>{navigate(`/playlist/${item._id}`)}} className="flex-shrink-0 w-32 h-36 bg-zinc-800/50 rounded-lg shadow-md ">
          <Card item={item}/>
        </div>)})}
      </div>

      <h2 className="text-zinc-200 mt-10 font-semibold font-sans text-2xl">
        Popular Artists
      </h2>
      <div className=" lg:h-56 h-36 lg:space-x-10  no-scrollbar flex lg:flex-wrap  overflow-x-scroll items-center">
        {artists &&
          artists.map((item, i) => {
            return (
              <div key={item._id} className="flex-shrink-0 lg:w-40 lg:h36 w-28 h-24  ">
                <ArtistCard item={item} currentArtist={currentArtist} currentsong={currentsong} />
              </div>
            );
          })}
      </div>

      <h2 className="text-zinc-200  mt-10 font-semibold font-sans text-2xl">
        New Releases
      </h2>
      <div className="mt-6 lg:grid lg:grid-cols-3 grid-cols-1 items-center space-y-4 lg:space-y-0 lg:gap-4">
        {songs &&
          songs.map((item) => {
            return (
              <MusicCard
                key={item.icon}
                handleArtistSelect={handleArtistSelect}
                handleSongSelect={handleSongSelect}
                song={item}
                current={currentsong}
              />
            );
          })}
      </div>
    </div>:<Loading/>}
    </>
  );
}

export default Home;
