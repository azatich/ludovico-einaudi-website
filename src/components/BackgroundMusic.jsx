import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume,
  Volume1,
  Volume2,
  VolumeOff,
  Minimize2,
  Maximize2,
} from "lucide-react";
import ProgessBarMusic from "./ProgessBarMusic";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const handleChangeVolumeWithIcon = (value) => {
    const audio = audioRef.current;
    audio.volume = value;
    setVolume(value);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] z-50">
      {/* Toggle Minimize / Maximize Button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="absolute top-[-10px] right-[-10px] sm:hidden z-50 text-white bg-black/40 backdrop-blur-md p-1 rounded-full hover:bg-white/20 transition"
      >
        {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
      </button>

      {/* Player Container */}
      <div
        className={`bg-black/50 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-white shadow-lg transition-all duration-500`}
      >
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          className="sm:p-2 hover:scale-110 transition active:scale-95"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        {/* Progress Bar (always visible) */}
        <ProgessBarMusic
          duration={duration}
          audioRef={audioRef}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />

        {/* Volume Section */}
        {/* Always visible on sm+ screens, hidden on mobile only when minimized */}
        <div
          className={`flex items-center gap-2 ${
            isMinimized ? "hidden sm:flex" : "flex"
          }`}
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
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      >
        <source
          src="./audios/LudovicoEinaudiExperience.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
