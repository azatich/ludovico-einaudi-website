import BackgroundMusic from "./BackgroundMusic";

const HomePageImageSection = () => {

  return (
    <div className="h-[calc(100vh-90px)] relative">
      <img
        src="./images/ludovico-main.jpg"
        alt="ludovico einaudi playing on piano"
        className="w-full h-full object-cover mx-auto"
      />

      {/* Overlay Text */}
      <div className="absolute uppercase flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white tracking-wide text-center">
        <span className=" text-2xl sm:text-3xl md:text-4xl xl:text-7xl text-nowrap">
          Feel the Experience
        </span>
        <span className="text-2xl xl:text-2xl">The Official Website</span>
      </div>

      <BackgroundMusic />
    </div>
  );
};

export default HomePageImageSection;
