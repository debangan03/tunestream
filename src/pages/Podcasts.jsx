import React, { useState } from "react";
import PodcastCard from "../Components/Podcast/PodcastCard";

function Podcasts({ handleSongSelect, currentsong }) {
  const [pod, setpod] = useState('')
  const playmedia = (pod1)=>{
    setpod(pod1);
    handleSongSelect(pod1)
  }
  const podcasts = [
    {
      title: "Prediction Which AI Can Do",
      description:
        "Crazy Sci-Fi Prediction Which AI Can Do - Expert IITian Explains",
      image: "https://i.ibb.co/YXX0qGB/image.png",
      audiourl: "pod1.mp3",
    },
    // Add more podcasts as needed
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-800 to-zinc-950  flex flex-col pb-20 pt-4 px-2 ">
      <h1 className="text-zinc-200 mb-10 font-semibold font-sans text-2xl">
        Podcasts
      </h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center ">
          {podcasts.map((podcast, index) => (
            <PodcastCard
              key={index}
              podcast={podcast}
              playmedia={playmedia}
              pod={pod}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
