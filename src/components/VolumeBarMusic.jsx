import React, { useState } from "react";
import {Volume,
  Volume1,
  Volume2,
  VolumeOff,} from 'lucide-react'

const VolumeBarMusic = ({ audioRef, isMinimizedBar }) => {
  const [volume, setVolume] = useState(0.5);

  const handleChangeVolumeWithIcon = (value) => {
    const audio = audioRef.current;
    audio.volume = value;
    setVolume(value);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div
      className={`flex items-center gap-2 ${isMinimizedBar && "hidden"}`}
    >
      {volume === 0 ? (
        <VolumeOff onClick={() => handleChangeVolumeWithIcon(0.5)} />
      ) : volume < 0.3 ? (
        <Volume onClick={() => handleChangeVolumeWithIcon(0)} />
      ) : volume < 0.7 ? (
        <Volume1 onClick={() => handleChangeVolumeWithIcon(0)} />
      ) : (
        <Volume2 onClick={() => handleChangeVolumeWithIcon(0)} />
      )}

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-20 md:w-24 accent-white cursor-pointer h-1 sm:h-1.5"
      />
    </div>
  );
};

export default VolumeBarMusic;
