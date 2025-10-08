import { Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const upcomingTours = [
  {
    city: "Milan, Italy",
    month: "October",
    day: 9,
    place: "Teatro degli Arcimboldi",
    time: "8:00 pm",
    cityImage: "/images/tours/milan.jpeg",
  },
  {
    city: "Paris, France",
    month: "October",
    day: 11,
    place: "Philharmonie de Paris",
    time: "8:00 pm",
    cityImage: "/images/tours/paris.jpeg",
  },
  {
    city: "London, UK",
    month: "November",
    day: 1,
    place: "Royal Albert Hall",
    time: "8:00 pm",
    cityImage: "/images/tours/london.jpeg",
  },
];

const Tours = () => {
  const [isUpcoming, setIsUpcoming] = useState(true);

  const groupedTours = upcomingTours.reduce((groups, tour) => {
    if (!groups[tour.month]) {
      groups[tour.month] = [];
    }
    groups[tour.month].push(tour);
    return groups;
  }, {});

  return (
    <div className="flex flex-col gap-4 px-12 py-8 w-full md:w-1/2">
      <div className="flex gap-4">
        <button
          onClick={() => setIsUpcoming(true)}
          className={`${
            isUpcoming ? "bg-black text-white" : ""
          } cursor-pointer border px-6 py-2 uppercase`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setIsUpcoming(false)}
          className={`${
            isUpcoming ? "" : "bg-black text-white"
          } border px-6 py-2 uppercase`}
        >
          Past
        </button>
      </div>
      {isUpcoming &&
        Object.keys(groupedTours)
          .slice(0, 1)
          .map((month) => (
            <div key={month} className="flex flex-col gap-4">
              <h2 className="flex gap-2 uppercase font-bold text-xl border-b border-white/30 pb-2">
                <Minus /> {month} 2025
              </h2>

              {groupedTours[month].map((tour) => (
                <div
                  key={tour.city}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6"
                >
                  <img
                    src={tour.cityImage}
                    alt={tour.city}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="uppercase font-bold text-3xl">
                      {tour.city}
                    </h3>
                    <p className="uppercase">{tour.place}</p>
                    <p>
                      {tour.month} {tour.day}, 2025
                    </p>
                    <p>{tour.time}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/tours"
                className="flex gap-2 uppercase mt-4 hover:text-black/70 hover:underline transition duration-200"
              >
                <img
                  className="w-[15px] aspect-auto"
                  src="./icons/right-arrow-black.svg"
                  alt="arrow-right"
                />
                See all tours here
              </Link>
            </div>
          ))}
    </div>
  );
};

export default Tours;
