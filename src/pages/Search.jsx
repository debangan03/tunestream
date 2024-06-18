import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../Components/Music/MusicCard";
const URL = import.meta.env.VITE_PUBLIC_URL;

function Search({
  handleSongSelect,
  currentsong,
  handleArtistSelect,
  currentArtist,
}) {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const getAllSongs = async () => {
    const { data } = await axios.get(`${URL}/allsongs`);
    setSongs(data);
    setFilteredSongs(data); // Initialize filtered songs with all songs
  };

  useEffect(() => {
    getAllSongs();
  }, []);

  useEffect(() => {
    if (query) {
      const results = songs?.filter(
        (song) =>
          song?.title?.toLowerCase().includes(query?.toLowerCase()) ||
          song?.artist?.toLowerCase().includes(query?.toLowerCase())
      );
      setFilteredSongs(results);
    } else {
      setFilteredSongs(songs);
    }
  }, [query, songs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col pb-20 pt-4 px-2">
      <h1 className="text-zinc-200 font-semibold font-sans text-2xl">Search</h1>
      <form>
        <input
          type="text"
          placeholder="Search by song or artist..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-zinc-900 bg-zinc-200 p-4 w-full mt-2 rounded"
        />
      </form>
     {query ? <div className="mt-4 space-y-2 text-zinc-200">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div key={song._id}>
              {query && (
                <MusicCard
                  key={song.icon}
                  handleArtistSelect={handleArtistSelect}
                  handleSongSelect={handleSongSelect}
                  song={song}
                  current={currentsong}
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-zinc-400">No songs found</p>
        )}
      </div> :<p className="text-zinc-200 mt-80 text-center ">Please Type your Desired Song Or Artist</p>}
    </div>
  );
}

export default Search;
