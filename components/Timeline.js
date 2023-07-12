import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import testimg from "../public/react.svg";
import eth from "../public/etheritage.png";

function Timeline({ direction, data }) {
  // love building my own timeline component ):3
  //   const [windowsize, setwindowsize] = useState();
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  useEffect(() => {
    animation_handler();
  }, []);
  const animation_handler = () => {
    let width = document.documentElement.scrollWidth;
    if (width < 541) {
      return "";
    } else {
      if (direction == "right") {
        return "fade-right";
      } else if (direction == "left") {
        return "fade-left";
      }
    }
    console.log(direction, width);
  };
  return (
    <div className=" md:w-screen mt-20  flex items-center justify-center  ">
      <div className="h-[40vh] flex  items-center justify-center">
        <div className=" w-[2px] h-full bg-[#F3F1E7] sm:flex items-center justify-center relative">
          <div className="hidden  border-2 border-solid border-red-400 w-6 h-6 rounded-[50%] absolute  sm:flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-red-500 rounded-[50%]"> </div>
          </div>
          <div
            className={
              direction == "left"
                ? " bg-[#F3F1E7]  w-[80px] left-4 h-[2px] absolute flex items-center justify-center"
                : " bg-[#F3F1E7] w-[80px]  right-4 h-[2px] absolute flex items-center justify-center"
            }
          ></div>
          {/* date container */}
          <div
            id="time"
            className={
              direction == "left"
                ? "hidden p-4 px-6 bg-[#F3F1E7]  w-[5rem] right-12 h-7 rounded-full absolute items-center sm:flex  justify-center"
                : "p-4 px-6 bg-[#F3F1E7] w-[4rem] left-12 h-7 rounded-full absolute flex items-center justify-center"
            }
          >
            <p className="flex items-center  justify-center w-full  h-full ">
              {data.date}
            </p>
          </div>
          {/* right data conainer */}
          <div
            data-aos={direction == "right" ? "fade-right" : "fade-left"}
            className={
              direction == "left"
                ? " hidden w-[150px] md:w-[30rem] rounded-md left-5 md:left-[100px] h-[150px] md:h-[200px]  absolute flex-col sm:flex items-center justify-center"
                : " w-[150px] md:w-[30rem] rounded-md right-5 md:right-[100px] h-[150px] md:h-[100px] flex-col absolute flex items-center justify-center "
            }
          >
            <div className="flex-[1] rounded-md w-full">
              <Image
                // loader={() => data.image}
                src={data.image}
                alt=""
                srcset=""
                width={450}
                height={250}
              />
            </div>
            <div className="flex-[1] text-gray-900/95 w-full px-1 pt-1 flex items-end font-light">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
