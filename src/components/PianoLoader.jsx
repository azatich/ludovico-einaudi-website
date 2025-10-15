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
    </div>
  );
};

export default PianoLoader;
