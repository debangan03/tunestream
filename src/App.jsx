import React, { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Podcasts from "./pages/Podcasts";
import Myaccount from "./pages/Myaccount";
import UploadMusic from "./pages/UploadMusic";
import AudioPlayer from "./Components/AudioPlayer";
import Header from "./Components/Header";
import ArtistDetails from "./pages/ArtistDetails";
import Playlistdetails from "./pages/Playlistdetails";
import Notfound from "./pages/Notfound";
const URL = import.meta.env.VITE_PUBLIC_URL;

function App() {
  //console.log(URL);
  const [currentsong, setcurrentsong] = useState("");
  const [currentArtist, setcurrentArtist] = useState("");
  const [currentPlaylist, setcurrentPlaylist] = useState("");

  let x = 0;
  const handleSongSelect = (filename) => {
    if (filename !== "")
      setcurrentsong(`${URL}/uploads/${filename}`);
    else setcurrentsong("");
  };
  const handleArtistSelect = (name) => {
    if (name !== "") setcurrentArtist(name);
  };
  const handlePlaylistSelect = (name) => {
    if (name!== "") setcurrentPlaylist(name);
  };
  //console.log(currentArtist);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleArtistSelect={handleArtistSelect}
              handleSongSelect={handleSongSelect}
              currentsong={currentsong}
              currentArtist={currentArtist}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              handleArtistSelect={handleArtistSelect}
              handleSongSelect={handleSongSelect}
              currentsong={currentsong}
              currentArtist={currentArtist}
            />
          }
        />
        <Route
          path="/podcast"
          element={
            <Podcasts
              handleSongSelect={handleSongSelect}
              currentsong={currentsong}
            />
          }
        />
        <Route path="/profile" element={<Myaccount />} />
        <Route
          path="/playlist/:id"
          element={
            <Playlistdetails
              currentArtist={currentArtist}
              handleArtistSelect={handleArtistSelect}
              handleSongSelect={handleSongSelect}
              currentsong={currentsong}
              currentPlaylist={currentPlaylist}
              handlePlaylistSelect={handlePlaylistSelect}
            />
          }
        />
        <Route path="/uploadfile" element={<UploadMusic />} />
        <Route
          path="/artistdetails/:id"
          element={
            <ArtistDetails
              currentArtist={currentArtist}
              handleArtistSelect={handleArtistSelect}
              handleSongSelect={handleSongSelect}
              currentsong={currentsong}
            />
          }
        />
        <Route path="*" element={<Notfound/>} />
      </Routes>

      <div className="fixed bottom-0 w-full">
        {currentsong && (
          <AudioPlayer
            key={currentsong}
            src={currentsong ? currentsong : ""}
            handleSongSelect={handleSongSelect}
          />
        )}
        <NavigationBar />
      </div>
    </Router>
  );
}

export default App;
