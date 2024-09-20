import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const DestinationSlider = () => {
  const destinations = [
    { id: 1, name: "New York", hotels: 7, image: "/images/d1.png" },
    { id: 2, name: "Paris", hotels: 5, image: "/images/d2.png" },
    { id: 3, name: "Tokyo", hotels: 10, image: "/images/d3.png" },
    { id: 4, name: "India", hotels: 6, image: "/images/d4.png" },
    { id: 5, name: "England", hotels: 8, image: "/images/d5.png" },
    { id: 6, name: "Australia", hotels: 9, image: "/images/d6.png" },
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      {destinations.map((destination) => (
        <div key={destination.id} className="bg-container">
          <div
            className="destination-image rounded-full mx-auto"
            style={{
              backgroundImage: `url(${destination.image})`,
              width: "200px",
              height: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <h1 className="destination_h1">{destination.name}</h1>
          <p className="destination_p">{destination.hotels} Hotels</p>
        </div>
      ))}
    </Carousel>
  );
};

export default DestinationSlider;

// import Image from "next/image";
// import React from "react";
// import Carousel from "react-multi-carousel";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const DestinationSlider = () => {
//   return (
//     <Carousel
//       additionalTransfrom={0}
//       arrows={true}
//       autoPlay={true}
//       autoPlaySpeed={5000}
//       centerMode={false}
//       infinite
//       responsive={responsive}
//       itemClass="item"
//     >
//       <div>
//         <Image
//           src={"/images/d1.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">New York</h1>
//         <p className="destination_p">7 Hotels</p>
//       </div>
//       <div>
//         <Image
//           src={"/images/d2.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">Japan</h1>
//         <p className="destination_p">17 Hotels</p>
//       </div>
//       <div>
//         <Image
//           src={"/images/d3.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">Bangladesh</h1>
//         <p className="destination_p">3 Hotels</p>
//       </div>
//       <div>
//         <Image
//           src={"/images/d4.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">India</h1>
//         <p className="destination_p">27 Hotels</p>
//       </div>
//       <div>
//         <Image
//           src={"/images/d5.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">England</h1>
//         <p className="destination_p">37 Hotels</p>
//       </div>
//       <div>
//         <Image
//           src={"/images/d4.png"}
//           alt="destination"
//           width={200}
//           height={200}
//           className="rounded-full mx-auto"
//         />
//         <h1 className="destination_h1">Australia</h1>
//         <p className="destination_p">23 Hotels</p>
//       </div>
//     </Carousel>
//   );
// };

// export default DestinationSlider;
