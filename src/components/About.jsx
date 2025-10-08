import React from "react";

const About = () => {
  return (
    <div className="text-white bg-black w-full md:w-1/2 p-12 md:py-44 md:px-10 xl:px-16 xl:py-44">
      <h1 className="uppercase text-2xl text-start font-semibold">
        About ludovico
      </h1>
      <p className="mt-4">
        Ludovico Maria Enrico Einaudi OMRI (Italian: [ludoˈviːko eiˈnaudi] ⓘ;
        born 23 November 1955) is an Italian pianist and composer. Trained at
        the Conservatorio Verdi in Milan, Einaudi began his career as a
        classical composer, later incorporating other styles and genres such as
        pop, rock, folk, and world music.
      </p>
      <button className="flex gap-2 uppercase mt-4 hover:text-white/80 hover:underline transition duration-200">
        <img className="w-[15px] aspect-auto" src="./icons/right-arrow.svg" alt="arrow-right" />
        read more
      </button>
    </div>
  );
};

export default About;
