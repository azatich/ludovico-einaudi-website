import p1 from "/images/works/p1.jpg";
import p2 from "/images/works/p2.jpg";
import p3 from "/images/works/p3.jpg";
import { useState } from "react";

const TheSummerPortraitAlbum = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { id: 1, image: p1 },
    { id: 2, image: p2 },
    { id: 3, image: p3 },
  ];

  return (
    <div className="px-12 md:px-20 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 md:justify-around md:gap-12">
        <div className="w-full flex flex-col sm:flex-row gap-8 lg:flex-col lg:items-center">
          <div className="w-full lg:w-full">
            <div className="text-white">
              <h1 className="text-2xl">The Summer Portraits</h1>
              <span>2025</span>
            </div>
            <img className="mt-4 lg:mt-6" src="/images/works/1.jpg" alt="" />
          </div>
          <div className="text-white w-full lg:w-full">
            <h1 className="text-2xl text-center">Decca Records</h1>
            <p className="lg:mt-4">
              1. Rose Bay / 2. Punta Bianca / 3. Sequence / 4. Pathos / 5. To Be
              Sun / 6. Jay / 7. In Memory Of A Dream / 8. In Limine / 9. Summer
              Song / 10. Oil On Wood / 11. Episode One / 12. Maria Callas / 13.
              Santiago
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt={image.id}
                className="w-full h-full flex-shrink-0 object-cover"
              />
            ))}
          </div>
          <div className="absolute top-1/2 right-6 flex flex-col gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full bg-transparent border border-white outline-none ${
                  index === current && "bg-white"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start flex-col mt-8">
        <span className="text-white text-xl uppercase md:text-2xl">
          Listen on
        </span>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/watch?v=2PHobK7oB0Y&list=PL9rRqI6iklCXsEx_T_y6dgTA_AM33KFm-"
            target="_blank"
          >
            <img
              className="w-8 hover:brightness-50"
              src="/icons/youtube.svg"
              alt="youtube"
              loading="lazy"
            />
          </a>
          <a>
            <img
              className="w-8 hover:brightness-50"
              src="/icons/spotify.svg"
              alt="youtube"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheSummerPortraitAlbum;
