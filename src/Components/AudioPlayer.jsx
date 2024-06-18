import React, { useRef, useState, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  RewindIcon,
  FastForwardIcon,
  RefreshIcon,
} from "@heroicons/react/solid";

const AudioPlayer = ({ src, handleSongSelect }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
    setIsPlaying(true);
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      if (isRepeat) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        handleSongSelect("");
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isRepeat]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = e.target.value / 100;
    audio.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-zinc-900/80 p-4 rounded-lg shadow-lg w-full  mx-auto text-zinc-200">
      <div className="flex items-center space-x-4 w-full">
        <div className="flex-1">
          <input
            type="range"
            value={progress}
            onChange={handleProgressChange}
            className="w-full h-2 bg-transparent appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(254 240 138) ${progress}%, #4a4a4a ${progress}%)`,
            }}
          />
        </div>
        <div className="text-zinc-200 text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <button onClick={toggleMute}>
          {isMuted ? (
            <VolumeOffIcon className="w-6 h-6 text-zinc-200" />
          ) : (
            <VolumeUpIcon className="w-6 h-6 text-zinc-200" />
          )}
        </button>
        <button onClick={() => (audioRef.current.currentTime -= 10)}>
          <RewindIcon className="w-6 h-6 text-zinc-200" />
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-zinc-200 text-zinc-800 p-px rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-zinc-200"
        >
          {isPlaying ? (
            <PauseIcon className="w-10 h-10" />
          ) : (
            <PlayIcon className="w-10 h-10" />
          )}
        </button>
        <button onClick={() => (audioRef.current.currentTime += 10)}>
          <FastForwardIcon className="w-6 h-6 text-zinc-200" />
        </button>

        <button onClick={toggleRepeat}>
          {isRepeat ? (
            <RefreshIcon className="w-6 h-6 text-zinc-200" />
          ) : (
            <RefreshIcon className="w-6 h-6 text-zinc-200 opacity-30" />
          )}
        </button>
      </div>
      {src && <audio ref={audioRef} src={src}></audio>}
    </div>
  );
};

export default AudioPlayer;
