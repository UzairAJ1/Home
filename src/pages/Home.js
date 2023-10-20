import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "../components/carouselItems";
import "../App.css";
import homeLogo from "../assets/Home-Left.png";
import videoBackground from "../assets/Comp 1.mp4";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import mobileBg from "../assets/Group.png";
const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const cardDetails = {
    0: {
      imgUrl: "https://picsum.photos/id/237/200/300",
      title: "Name",
    },

    1: {
      imgUrl: "https://picsum.photos/id/238/200/300",
      title: "Name",
    },

    2: {
      imgUrl: "https://picsum.photos/id/239/200/300",
      title: "Name",
    },

    3: {
      imgUrl: "https://picsum.photos/id/240/200/300",
      title: "Name",
    },

    4: {
      imgUrl: "https://picsum.photos/id/241/200/300",
      title: "Name ",
    },

    5: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Name",
    },

    6: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Name",
    },
  };
  const divStyle = {
    backgroundImage: "url(Section-min.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", // Set to '100%' for a slight zoom out effect
    backgroundPosition: "center center",
  };
  const scrollToFirstSection = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const [places, setPlaces] = useState("");
  const [mapImage, setMapImage] = useState("");
  console.log("places:", places);
  const getLatLong = async () => {
    const value = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${places?.label}&key=AIzaSyDMXt_1dXYpRMuQJ16_TcsYgK6xqX1QVZc`
    )
      .then((e) => e.json())
      .then(async (res) => {
        console.log("THE RES ====", res);

        if (res?.results[0]?.geometry?.location) {
          let lat = res?.results[0]?.geometry?.location?.lat;
          let long = res?.results[0]?.geometry?.location?.lng;
          setMapImage(
            `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${lat},${long}&key=AIzaSyDMXt_1dXYpRMuQJ16_TcsYgK6xqX1QVZc`
          );
        }
      })
      .catch((e) => {
        console.log("ERROR =====", e);
      });
  };

  useEffect(() => {
    getLatLong();
  }, [places]);

  useEffect(() => {
    // Function to update the state when the screen is resized
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const inputWidth = isSmallScreen ? "200px" : "400px";
  useEffect(() => {
    if (isSmallScreen) {
      console.log("The screen is small.");
    } else {
      console.log("The screen is big.");
    }
  }, [isSmallScreen]);
  console.log("width", inputWidth);
  return (
    <div className="w-full text-[#4A4A4A] bg-[#F7F7F7F7]">
      <div
        ref={section1Ref}
        className="w-full lg:h-[600px] h-[1000px] flex flex-col items-center justify-center  font-sans  bg-no-repeat bg-contain gap-4 "
        // style={divStyle}
      >
        {/* <img
          src="Section-min.png"
          alt="Section-min"
          className="absolute top-20 left-0 w-full h-full z-0 object-cover object-center"
        /> */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen z-0 object-cover md:flex hidden"
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <img src="Vector.png" alt="" className="relative z-0 md:flex hidden" />
        <div className="flex flex-col items-center md:gap-0 gap-4 z-20 container mx-auto relative top-16">
          <div className="md:text-[55px] text-[30px] md:w-[70%] w-[85%] font-merriweather text-center">
            Forget Everything You Know About Selling Your House
          </div>
          <div className="text-[20px] mb-12 md:px-0 px-6 text-center">
            Instant Offer. Incredible Service. Big Heart
          </div>
          <div class="flex items-center justify-center md:w-[40%] w-[75%] h-24 md:p-8 p-4 bg-red-500 rounded-lg z-20">
            <GooglePlacesAutocomplete
              selectProps={{
                value: places,
                onChange: setPlaces,
                styles: {
                  input: (provided) => ({
                    ...provided,
                    width: inputWidth,
                  }),
                  "@media (max-width: 640px)": {
                    input: {
                      width: "200px", // Change width to 200px for mobile screens
                    },
                  },
                },
              }}
              apiKey="AIzaSyDMXt_1dXYpRMuQJ16_TcsYgK6xqX1QVZc"
            />
          </div>
          <img
            src={mobileBg}
            alt="asd"
            className="z-0 object-cover md:hidden flex mt-12"
          />
          {mapImage ? (
            <img src={mapImage} className="w-[300px] h-[200px] z-10 mt-12" />
          ) : (
            <div className="w-[300px] h-[200px] z-10 mt-12"></div>
          )}
        </div>
      </div>
      <img
        src="sponsors.png"
        alt=" "
        className=" md:mt-32  object-contain md:flex hidden"
      />
      <div
        ref={section2Ref}
        className="w-full h-[900px]  flex flex-col items-center justify-center gap-8 bg-[#F7F7F7F7] "
      >
        <div className="md:text-[44px] text-2xl w-[70%] text-center">
          The (Almost) 5 Star Real Estate Company
        </div>

        <div className="text-[15px] w-[30%] text-center">
          Yuna Homes has earned 4.9 stars by our partners, and has successfully
          sold $250 million dollar worth of Real Estate
        </div>
        <div className="w-[70%] flex h-auto items-center justify-center">
          <img
            src="https://www.lemonade.com/_next/static/media/pink_5_stars_large.e82b2257.png"
            alt="asd"
            className="w-2/3 h-2/3 object-contain"
          ></img>
        </div>
        <div className="w-full h-[300px] overflow-hidden">
          <div className="carousel-container">
            <div className="carousel-track">
              {Object.keys(cardDetails).map((detailKey) => {
                return (
                  <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                  ></CarouselItem>
                );
              })}
              {Object.keys(cardDetails).map((detailKey) => {
                return (
                  <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                  ></CarouselItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        ref={section3Ref}
        className="w-full h-[200px]  flex flex-col items-center justify-center gap-8 md:px-0 px-8 bg-white"
      >
        <div className="md:text-[44px] text-2xl text-center">
          Sell Your Home Easy. Fast. & Confident.
        </div>
        <button
          onClick={scrollToFirstSection}
          className="w-[300px] h-12 bg-red-500 text-white rounded-md"
        >
          Get A Instant Offer
        </button>
      </div>
    </div>
  );
};

export default Home;
