import { Player } from "@lottiefiles/react-lottie-player";

const PianoLoader = () => {
  return (
    <div className="h-[calc(100vh-90px)] flex flex-col items-center justify-center bg-black">
      <Player
        autoplay
        loop
        src="/icons/loader.json"
        className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] xl:w-[500px] xl:h-[500px]"
      />
      <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white font-semibold text-center">
        The page is currently under development...
      </span>
    </div>
  );
};

export default PianoLoader;
