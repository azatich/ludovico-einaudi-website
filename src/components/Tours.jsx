import { Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";

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

const pastTours = [
  {
    city: "Berlin, Germany",
    month: "September",
    day: 30,
    place: "Teatro degli Arcimboldi",
    time: "8:00 pm",
    cityImage: "/images/tours/berlin.jpg",
  },
  {
    city: "Helsinki, Finland",
    month: "October",
    day: 4,
    place: "Philharmonie Helsinki",
    time: "8:00 pm",
    cityImage: "/images/tours/helsinki.jpeg",
  },
];

const Tours = () => {
  const [isUpcoming, setIsUpcoming] = useState(true);

  const groupedUpcomingTours = upcomingTours.reduce((groups, tour) => {
    if (!groups[tour.month]) {
      groups[tour.month] = [];
    }
    groups[tour.month].push(tour);
    return groups;
  }, {});

  const groupedPastTours = pastTours.reduce((groups, tour) => {
    if (!groups[tour.month]) {
      groups[tour.month] = [];
    }
    groups[tour.month].push(tour);
    return groups;
  }, {});
  

  return (
    <div className="flex flex-col gap-4 px-12 py-8 w-full md:w-1/2">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <h3 className="text-center text-2xl uppercase font-semibold">Tours</h3>
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
      </div>
      {isUpcoming ? (
        <>
          {Object.keys(groupedUpcomingTours).slice(0, 1).map((month) => (
            <div key={month} className="flex flex-col gap-4">
              <h2 className="flex gap-2 uppercase font-bold text-xl border-b border-white/30 pb-2">
                <Minus /> {month} 2025
              </h2>

              {groupedUpcomingTours[month].map((tour) => (
                <TourCard key={tour.city} tour={tour} />
              ))}
            </div>
          ))}

          <Link
            to="/tours"
            className="flex gap-2 uppercase mt-4 hover:text-black/70 hover:underline transition duration-200"
          >
            See all tours here
          </Link>
        </>
      ) : (
        Object.keys(groupedPastTours).slice(0, 1).map((month) => (
          <div key={month} className="flex flex-col gap-4">
            <h2 className="flex gap-2 uppercase font-bold text-xl border-b border-white/30 pb-2">
              <Minus /> {month} 2025
            </h2>

            {groupedPastTours[month].map((tour) => (
              <TourCard key={tour.city} tour={tour} isPassed={true} />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Tours;
