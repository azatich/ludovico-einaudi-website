import { formatMusicTime } from "../utils/utils";

const ProgessBarMusic = ({duration, audioRef, currentTime, setCurrentTime, isMinimizedBar}) => {
  

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = parseFloat(e.target.value);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className={`flex justify-between items-center gap-2 w-full ${isMinimizedBar && 'hidden'}`}>
      {/* Current Time */}
      <span className="text-xs sm:text-sm w-10 text-right">
        {formatMusicTime(currentTime)}
      </span>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={currentTime}
        onChange={handleSeek}
        className="flex-1 w-full accent-white cursor-pointer h-1 sm:h-1.5"
      />

      {/* Duration */}
      <span className="text-xs sm:text-sm w-10 text-left">
        {formatMusicTime(duration)}
      </span>
    </div>
  );
};

export default ProgessBarMusic;
