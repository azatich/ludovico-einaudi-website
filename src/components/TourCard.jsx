import React from "react";

const TourCard = ({ tour, isPassed }) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start gap-6"
    >
      <img
        src={tour.cityImage}
        alt={tour.city}
        className={`w-48 h-48 object-cover rounded-lg ${isPassed && 'grayscale-100'}`}
      />
      <div>
        <h3 className="uppercase font-bold text-3xl">{tour.city}</h3>
        <p className="uppercase">{tour.place}</p>
        <p>
          {tour.month} {tour.day}, 2025
        </p>
        <p>{tour.time}</p>
      </div>
    </div>
  );
};

export default TourCard;
