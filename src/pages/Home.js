import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "../components/carouselItems";
import "../App.css";
import homeLogo from "../assets/Home-Left.png";
import videoBackground from "../assets/Comp 1.mp4";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import mobileBg from "../assets/Comp 1_3.mp4";
const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
  const [inputError, setInputError] = useState();
  const cardDetails = {
    0: {
      imgUrl: "https://picsum.photos/id/237/200/300",
      title: "James O'Connell",
      text:"Bidnovation gave an instant offer on my home! The process was seamless and stress-free."
    },

    1: {
      imgUrl: "https://picsum.photos/id/238/200/300",
      title: "Maria Gonzales",
      text:"I've never experienced such impeccable service. Bidnovation truly cares for their customers!"
    },

    2: {
      imgUrl: "https://picsum.photos/id/239/200/300",
      title: "Harpreet Singh",
      text:"Sold my property to Bidnovation and it was easier than selling on the open market! Kudos!"
    },

    3: {
      imgUrl: "https://picsum.photos/id/240/200/300",
      title: "Linda Ferrell",
      text:"With Bidnovation, I got cash fast for my home. No lengthy procedures or delays."
    },

    4: {
      imgUrl: "https://picsum.photos/id/241/200/300",
      title: "Tasha Kim ",
      text:"Bidnovation's big heart shines through. They went above and beyond to ensure we were happy."
    },

    5: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Kwame Nkrumah",
      text:"It's rare to find a company that combines promptness with genuine care. Bidnovation nails it!"
    },

    6: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Mikhail Ivanov",
      text:"Received a quick offer from Bidnovation. Their incredible service left me speechless"
    },
    7: {
      imgUrl: "https://picsum.photos/id/241/200/300",
      title: "Rebecca Walters",
      text:"Bidnovation's team was understanding and supportive throughout. Truly a standout experience!"
    },

    8: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Chen Wei",
      text:"The team at Bidnovation has a big heart. Selling my house was surprisingly pleasant!"
    },

    9: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Carla Rodriguez",
      text:"Selling to Bidnovation was a breeze! Instant offers and unmatched service, highly recommend."
    },
    10: {
      imgUrl: "https://picsum.photos/id/241/200/300",
      title: "Derek Hamilton",
      text:"I was initially skeptical, but Bidnovation's swift offer turned me into a believer. The team was professional and compassionate."
    },

    11: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Nina Patel",
      text:"Bidnovation stands out! Their instant offer was a lifesaver, and their warm service made all the difference."
    },

    12: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Alejandro Reyes",
      text:"SSelling my home used to be a daunting thought. Bidnovation changed that with their quick, caring approach."
    },
    13: {
      imgUrl: "https://picsum.photos/id/241/200/300",
      title: "Samantha Clark",
      text:"I'm in awe of Bidnovation's efficiency. Their offer came fast, and their kindness was palpable throughout."
    },

    14: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Hassan El-Amin",
      text:"From offer to closure, Bidnovation was phenomenal. A mix of incredible service with a genuinely big heart."
    },

    15: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Evelyn O'Sullivan",
      text:"Bidnovation turned a typically tedious process into a breeze. Their prompt offers and genuine care are commendable."
    },
    16: {
      imgUrl: "https://picsum.photos/id/42/200/300",
      title: "Rajeev Kumar",
      text:"Never imagined selling a property could be this easy. Thanks to Bidnovation's team for their wonderful service."
    },

    17: {
      imgUrl: "https://picsum.photos/id/243/200/300",
      title: "Giselle Thompson",
      text:"Bidnovation shines in both speed and humanity. They offered quickly and treated me like family."
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

  const handleInputChange = (value) => {
    // Check if the input contains more than one word
    if (value && value.label.split(" ").length <= 1) {
      setInputError("error");
    } else {
      setInputError("");
    }

    setPlaces(value);
  };
  return (
    <div className="w-full text-[#4A4A4A] bg-[#F7F7F7F7]">
      <div
        ref={section1Ref}
        className="w-full lg:h-[600px] md:h-[1000px] h-[1600px] flex flex-col items-center justify-center  font-lato  bg-no-repeat bg-contain gap-4 "
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
          className="absolute -top-12 left-0 w-full h-screen z-0 object-cover md:flex hidden "
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-0 mt-2">
          <svg
            width="146"
            height="34"
            viewBox="0 0 146 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_2658)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M135.108 23.7554L135.007 22.9069C134.985 22.7652 134.506 19.4216 136.777 17.0698C137.437 16.3836 138.234 15.9906 138.963 15.9906C139.585 15.9906 140.096 16.2617 140.355 16.7787C141.609 19.2811 135.108 23.7554 135.108 23.7554ZM125.226 18.4862L125.139 17.0745L125.126 16.8971C125.124 16.8529 124.809 12.3868 125.089 9.20799C125.397 5.75085 126.408 3.51745 127.662 3.51745C127.919 3.51745 128.165 3.64939 128.358 3.89023C128.984 4.67161 129.167 6.75586 128.775 8.6337C128.144 11.6324 127.144 14.0103 126.412 15.7516C126.205 16.244 126.022 16.6796 125.878 17.0582L125.226 18.4862ZM118.37 27.902C116.768 27.902 116.012 26.3643 116.012 24.9188C116.012 17.4607 120.121 15.9906 121.917 16.5635C121.917 16.5635 121.976 17.9801 122.121 19.8033C122.247 21.3865 122.361 23.2606 122.387 23.4224C122.387 23.4224 120.895 27.902 118.37 27.902ZM105.311 16.8534C105.311 16.8534 104.855 27.902 100.695 27.902C98.7021 27.902 98.5475 25.6753 98.5475 24.9921C98.5475 17.1124 104.511 15.7095 105.311 16.8534ZM66.8262 28.1661C64.4399 28.1661 63.5902 25.7919 63.5902 23.5699C63.5902 19.5219 65.9428 16.3817 67.9656 16.3817C69.936 16.3817 70.6517 19.0961 70.6517 20.92C70.6517 24.9833 68.9709 28.1661 66.8262 28.1661ZM28.8524 18.7689C27.4844 20.9023 24.3686 23.0128 23.4632 23.3491C23.4632 23.3491 22.8131 19.1706 26.2151 16.7305C28.7077 14.9427 29.8412 17.2271 28.8524 18.7689ZM132.901 28.5675C133.873 30.1033 135.603 30.8514 138.05 30.8514C140.74 30.8514 143.523 28.8227 145.116 26.9333C146.062 25.8126 146.165 25.1687 145.766 24.8169C145.404 24.4972 144.604 24.9156 143.872 25.5808C142.883 26.4776 140.79 27.767 138.959 27.767C136.738 27.767 135.726 26.3185 135.726 26.3185C140.249 23.5501 143.58 20.4076 143.58 17.7104C143.58 14.6877 141.346 13.336 139.132 13.336C135.172 13.336 130.896 16.9677 130.896 22.8355C130.896 24.7748 131.547 26.4225 131.547 26.4225C131.547 26.4225 130.761 27.6486 128.264 27.4415C125.61 27.2216 125.778 22.4062 125.778 22.4062C125.778 22.4062 126.59 20.8874 126.896 20.3217C128.693 17.01 131.152 12.4755 131.549 7.03812C131.771 3.99145 130.911 2.35537 130.15 1.51884C129.474 0.773983 128.57 0.330002 127.732 0.330002C124.662 0.330002 122.532 3.49139 122.016 6.61415C121.511 9.67641 121.714 14.2316 121.714 14.2316C121.714 14.2316 118.956 13.547 116.187 15.4321C113.654 17.1566 112.531 20.6079 112.177 22.3499C112.016 23.1294 111.961 23.9476 112.014 24.7801C112.038 25.1685 112.157 25.9164 112.157 25.9164C112.157 25.9164 111.246 27.8424 109.628 27.8424C107.02 27.8424 108.741 15.7118 108.841 15.0295C108.922 14.4802 109.256 13.3076 107.417 13.2255C106.306 13.1759 105.842 13.5924 105.757 14.136L105.682 14.6772C105.682 14.6772 101.912 12.1025 97.6441 16.7396C95.3703 19.2059 94.5448 22.775 94.5075 25.6385L94.5055 25.8189C94.5055 25.8189 93.5703 28.5328 91.3941 28.1265C89.9451 27.8561 89.7628 25.2686 89.7628 24.2684C89.7628 22.3499 90.203 20.2119 90.5574 18.4939C90.7811 17.4051 90.9751 16.4664 90.9751 15.9529C90.9751 14.1183 90.4628 13.336 89.2634 13.336C87.6312 13.336 86.1661 14.6342 84.5431 16.6384C82.4718 19.1962 80.9308 23.1925 80.9308 23.1925C80.9308 23.1925 80.9986 22.4781 81.1055 21.7893C81.1749 21.3439 81.3633 19.2811 81.7109 17.4079C81.9037 16.371 81.974 15.5222 81.9863 15.4307C82.0471 14.923 81.9328 14.4846 81.6565 14.1628C81.3847 13.8465 80.9689 13.6646 80.5163 13.6646C79.791 13.6646 78.8579 14.1511 78.4147 15.5166C78.2123 16.1332 78.0962 16.5879 77.9519 17.3202L77.8161 17.9997L77.3118 17.538C75.3143 15.7044 72.5472 13.5191 68.5792 13.5191C62.9913 13.5191 59.9755 18.7117 59.9755 23.5987C59.9755 24.201 60.0128 24.7752 60.0851 25.3072L60.1133 25.5171C60.1133 25.5171 58.9469 28.3522 56.8994 27.8356C56.003 27.6095 55.4509 26.6498 55.4509 24.3648C55.4509 22.4637 55.8314 19.8803 56.0589 18.3301C56.1359 17.804 56.1977 17.3886 56.2147 17.195L56.2652 16.6216C56.4216 14.896 56.4657 14.1164 55.8961 13.7406C55.4773 13.4679 55.0359 13.336 54.5487 13.336C54.0802 13.336 53.7111 13.5538 53.3822 13.7888C52.8764 14.1521 51.2216 16.3633 48.0961 21.4838C48.0456 21.5666 48.0165 21.6108 48.0136 21.6148L47.6727 22.2738L46.8527 24.0862L47.2997 21.4528L47.3279 21.2804C47.4008 20.8374 47.5301 20.0567 47.5836 19.8082L47.7147 19.2367C47.9257 18.3194 48.365 16.4115 48.4232 16.0743C48.6113 14.9567 48.5373 14.21 48.1964 13.7928C47.9442 13.4854 47.5228 13.336 46.9071 13.336C45.7733 13.336 44.8608 14.2011 43.2877 16.7652C43.0423 17.1661 42.1232 18.6961 41.3971 19.9073C40.4564 21.477 39.6029 22.6382 39.6029 22.6382L39.8013 20.5395C39.9532 19.5971 40.5219 15.2688 40.5295 15.0656C40.5275 14.153 40.0778 13.7281 39.1136 13.7281C38.7213 13.7281 37.7644 13.8149 37.3635 14.6184C36.9962 15.3528 35.9768 18.6791 35.481 23.7661C35.481 23.7661 31.5356 27.5995 27.3175 27.5995C25.7632 27.5995 24.533 26.9889 24.0871 25.7961C24.0871 25.7961 26.3437 24.6126 27.4153 23.8638C30.1593 21.9464 32.1555 19.9924 32.1555 17.4833C32.1555 14.4134 29.3529 13.0309 27.0374 13.336C23.0612 13.8598 19.7003 18.0639 19.7003 22.9472C19.7003 27.5408 22.2366 30.8514 26.6504 30.8514C31.7627 30.8514 35.2915 26.5968 35.2915 26.5968L35.1853 28.5388C35.1195 29.5511 35.5329 30.8514 37.2163 30.8514C37.6633 30.8514 38.4794 30.7078 38.9132 29.7463C41.532 23.9727 44.2745 19.3937 44.3015 19.3486L44.3953 19.1924L44.8711 18.2712L45.5796 17.0784L45.0118 19.6385C44.9087 20.2226 44.0056 25.417 43.8763 27.7074C43.8096 28.8637 43.8087 30.0016 44.2566 30.4891C44.4834 30.7369 44.8478 30.8514 45.4024 30.8514C46.642 30.8514 47.4111 30.4188 47.6885 29.565C49.7066 23.4128 51.8814 19.2618 51.9731 19.0875L52.0583 18.9265L53.1995 16.6805C53.1995 16.6805 52.2992 21.8042 52.2992 25.2983C52.2992 26.9684 52.625 30.0088 54.9836 30.5863C58.6142 31.4757 60.8448 27.6851 60.8448 27.6851L61.0811 28.3492C62.1173 30.1037 63.8394 31.0317 66.0618 31.0317C70.6667 31.0317 73.6425 27.4231 73.6425 21.8375C73.6425 18.372 72.0591 16.3866 72.0591 16.3866C72.0591 16.3866 73.8166 17.0088 75.1072 17.941C76.5054 18.9507 77.4984 20.0201 77.4984 20.0201L77.4637 20.2484C77.4223 20.5144 77.385 20.7822 77.3474 21.0531C77.2022 22.1246 77.074 23.2481 76.9653 24.3936C76.8651 25.4612 76.8134 26.4267 76.8134 27.2623C76.8134 27.77 76.8407 28.2382 76.8986 28.695C76.9492 29.1208 77.0532 29.5092 77.206 29.8464C77.2548 29.9494 77.713 30.8514 78.8709 30.8514C79.6438 30.8514 80.14 30.5696 80.506 29.7116C84.0845 21.3195 86.9511 18.63 87.203 18.3627C87.8672 17.6578 87.5675 18.9698 87.5675 18.9698L87.5413 19.1424C87.5366 19.1703 87.0943 22.0127 86.995 22.8772C86.8948 23.7298 86.8442 24.5439 86.8442 25.2983C86.8442 27.636 87.3628 30.3001 90.0769 30.7211C93.7869 31.2967 95.0723 28.375 95.0723 28.375C95.0723 28.375 96.4146 30.8514 99.584 30.8514C104.231 30.8514 105.67 27.2758 105.67 27.2758C106.16 29.427 107.031 30.5863 109.126 30.5863C111.394 30.5863 112.97 28.0218 112.97 28.0218C112.97 28.0218 114.282 30.8514 117.488 30.8514C121.199 30.8514 123.097 27.9992 123.175 27.8799L123.605 27.2025C123.605 27.2025 124.814 30.2794 127.93 30.4563C130.877 30.6233 132.901 28.5675 132.901 28.5675ZM5.56957 29.6667C2.29286 29.5448 2.1121 26.9882 5.12147 26.328C7.87134 25.7249 10.1648 26.6903 10.1648 26.6903C10.1648 26.6903 9.47089 29.8122 5.56957 29.6667ZM20.1205 3.82228C22.0138 3.97842 21.8715 6.62159 21.3563 8.27884C19.8464 13.137 16.235 13.282 16.235 13.282C16.235 13.282 17.3775 3.5961 20.1205 3.82228ZM15.9151 15.6036C15.9151 15.6036 21.9856 15.6441 24.0531 8.45825C25.2562 4.27627 23.5525 0.712086 19.9999 0.636693C16.4127 0.560602 13.6337 3.74805 12.3315 13.2746C12.3315 13.2746 8.86418 12.8155 7.33242 10.0713C6.60782 8.77285 5.51454 9.37716 5.85547 10.6111C7.00804 14.7838 12.1129 15.4556 12.1129 15.4556C12.1129 15.4556 11.9015 17.3027 11.5859 19.5638C11.2796 21.7574 10.7539 24.5174 10.7539 24.5174C10.7539 24.5174 7.53309 23.4954 4.10627 24.2138C-1.15992 25.3179 -1.73933 31.8706 4.70447 32.5177C12.261 33.2763 13.6879 28.0327 13.6879 28.0327C13.6879 28.0327 15.1724 28.7564 17.2791 30.6468C19.6138 32.7418 20.6807 34.0411 21.1648 33.5755C21.6954 33.065 20.5265 31.2823 18.3626 29.0091C15.9138 26.4367 14.219 25.7728 14.219 25.7728C14.219 25.7728 14.6241 24.0711 15.0657 21.31C15.5333 18.3873 15.9151 15.6036 15.9151 15.6036Z"
                fill="#4A4A4A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_2658">
                <rect
                  width="146"
                  height="33.34"
                  fill="white"
                  transform="translate(0 0.330002)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex flex-col items-center md:gap-0 gap-4 z-20 container mx-auto relative top- h-[1300px] md:h-[700px] mt-12">
          <div className="md:text-[55px] text-[30px] md:w-[70%] w-[85%] font-merriweather text-center">
            America’s most loved 
          <br></br>  Real estate company
          </div>
          <div className="text-[18px] mb-12 mt-4 md:px-0 px-6 text-center font-lato">
            Instant Offer. Incredible Service. Big Heart
          </div>
          <div class="flex items-center justify-center md:w-[40%] w-[75%] h-28 md:p-8 p-4 bg-[#F9F9F6] rounded-xl z-20">
            <GooglePlacesAutocomplete
              selectProps={{
                value: places,
                onChange: handleInputChange,
                styles: {
                  input: (provided) => ({
                    ...provided,
                    width: inputWidth,
                  }),
                  "@media (max-width: 640px)": {
                    input: {
                      width: "200px",
                    },
                  },
                },
              }}
              apiKey="AIzaSyDMXt_1dXYpRMuQJ16_TcsYgK6xqX1QVZc"
            />
          </div>
          <video
          autoPlay
          muted
          loop
            src={mobileBg}
            alt="asd"
            className="z-0 object-cover md:hidden flex mt-12"
          />
          {/* {inputError === "" && mapImage ? (
            <img src={mapImage} className="w-[300px] h-[200px] z-10 mt-12" />
          ) : (
            <div className="w-[300px] h-[200px] z-10 mt-12"></div>
          )} */}
           <button
          onClick={scrollToFirstSection}
          className="w-[200px] h-12 bg-red-500 text-white rounded-md mt-4"
        >
          Get Offer
        </button>
        </div>
      </div>
      <img
        src="sponsors.png"
        alt=" "
        className=" md:mt-24  object-contain lg:flex hidden"
      />
      <div
        ref={section2Ref}
        className="w-full lg:h-[900px] md:h-[1200px]  flex flex-col items-center justify-center lg:gap-8 md:gap-12 bg-[#F7F7F7F7] text-[#4A4A4A] "
      >
        <h1 className="md:text-[44px] text-2xl w-[70%] font-lato  text-center leading-[3rem] ">
          The (Almost) 5 Star Real Estate Company
        </h1>

        <div className="text-[18px] w-[30%] text-center font-lato text-[#4A4A4A]">
          Mauito has earned 4.9 stars by our partners, and has successfully
          bought & sold $350 million dollar worth of Real Estate
        </div>
        <div className="w-[70%] flex h-auto items-center justify-center">
          <img
            src="https://www.lemonade.com/_next/static/media/pink_5_stars_large.e82b2257.png"
            alt="asd"
            className="w-full h-2/3 object-contain"
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
                    text={cardDetails[detailKey].text}
                  ></CarouselItem>
                );
              })}
              {Object.keys(cardDetails).map((detailKey) => {
                return (
                  <CarouselItem
                    imgUrl={cardDetails[detailKey].imgUrl}
                    imgTitle={cardDetails[detailKey].title}
                    text={cardDetails[detailKey].text}
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
