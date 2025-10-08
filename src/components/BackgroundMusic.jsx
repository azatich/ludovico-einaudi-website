import { Pause, Play } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const BackgroundMusic = () => {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format time like mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle play/pause toggle
  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    const setAudioData = () => {
      setDuration(audio.duration)
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioData);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioData);
    };
  }, []);

  // Seek through the audio
  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = e.target.value;
    setCurrentTime(audio.currentTime);
  };

  return (
    <div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-4 text-white w-[90%] max-w-md">
        <button onClick={togglePlay} className="p-2 hover:scale-110 transition">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <span className="text-sm w-10 text-right">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="flex-1 accent-white cursor-pointer"
        />

        <span className="text-sm w-10">{formatTime(duration)}</span>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop>
        <source
          src="./audios/LudovicoEinaudiExperience.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  )
}

export default BackgroundMusic