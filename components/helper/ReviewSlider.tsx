import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from "./ClientReview";

const REVIEWS = [
  {
    name: "Jonnas",
    image: "/images/user1.jpg",
    review:
      "Bali was an incredible experience! The beaches and the culture were unforgettable.",
  },
  {
    name: "Effy",
    image: "/images/user2.jpg",
    review:
      "Kyoto's temples and peaceful ambiance made it the perfect getaway.",
  },
  {
    name: "Mike",
    image: "/images/user3.jpg",
    review:
      "Barcelona is a city full of life, art, and amazing food. Highly recommend it!",
  },
  {
    name: "Cassey",
    image: "/images/user4.jpg",
    review: "Queenstown's natural beauty and adventure sports were thrilling!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {REVIEWS?.map((review, index) => (
        <ClientReview
          key={index}
          image={review.image}
          name={review.name}
          review={review.review}
        />
      ))}
    </Carousel>
  );
};

export default ReviewSlider;
