import React from "react";
import HotelCard from "./helper/HotelCard";

const HOTELS_INFO = [
  {
    name: "Hotel Nextus",
    city: "Rajshahi",
    price: "$120",
    reviewNum: "21",
    image: "/images/h1.png",
  },
  {
    name: "Ocean Breeze Resort",
    city: "Cox's Bazar",
    price: "$200",
    reviewNum: "45",
    image: "/images/h2.png",
  },
  {
    name: "Mountain View Lodge",
    city: "Bandarban",
    price: "$150",
    reviewNum: "37",
    image: "/images/h3.png",
  },
  {
    name: "Royal Palace Hotel",
    city: "Dhaka",
    price: "$180",
    reviewNum: "58",
    image: "/images/h4.png",
  },
  {
    name: "Sunset Inn",
    city: "Kuakata",
    price: "$110",
    reviewNum: "30",
    image: "/images/h5.png",
  },
  {
    name: "Green Valley Resort",
    city: "Sylhet",
    price: "$130",
    reviewNum: "25",
    image: "/images/h6.png",
  },
  {
    name: "The Grand Regency",
    city: "Chittagong",
    price: "$170",
    reviewNum: "40",
    image: "/images/h7.png",
  },
  {
    name: "Blue Lagoon Hotel",
    city: "Saint Martin",
    price: "$220",
    reviewNum: "50",
    image: "/images/h8.png",
  },
];

const Hotels = () => {
  return (
    <div className="pt-[5rem] bg-gray-200 pb-[4rem]">
      <h1 className="heading">Best Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center w-[80%] mx-auto mt-[4rem]">
        {HOTELS_INFO.map((hotel, i) => (
          <div
            data-aos={`${
              i === 0 || i === 3 || i === 6
                ? "fade-left"
                : i === 1 || i === 4 || i === 7
                ? "zoom-in"
                : "fade-right"
            }`}
            data-aos-delay={`${
              i === 1 ? "300" : i === 4 ? "600" : i === 7 ? "900" : ""
            }`}
            key={hotel.name}
          >
            <HotelCard
              name={hotel.name}
              city={hotel.city}
              price={hotel.price}
              reviewNum={hotel.reviewNum}
              image={hotel.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
