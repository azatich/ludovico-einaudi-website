import { useRef, useState } from "react";
import { Play, Pause, Minimize2, Maximize2 } from "lucide-react";
import ProgessBarMusic from "./ProgessBarMusic";
import VolumeBarMusic from "./VolumeBarMusic";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimizedBar, setIsMinimizedBar] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] z-50 transition-all duration-500 ease-in-out`}
      style={{
        maxWidth: isMinimizedBar ? "80px" : "60%", // adjust as needed
      }}
    >

      <button
        onClick={() => {
          setIsMinimizedBar(!isMinimizedBar);
        }}
        className="absolute top-1 left-1 text-white z-10"
      >
        {isMinimizedBar ? <Maximize2 /> : <Minimize2 />}
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
          isMinimizedBar={isMinimizedBar}
        />

        {/* Volume Section */}
        <VolumeBarMusic
          audioRef={audioRef}
          isMinimizedBar={isMinimizedBar}
        />
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
