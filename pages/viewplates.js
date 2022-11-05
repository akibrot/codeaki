import React, { useEffect, useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCarousel,
  CImage,
  CCarouselCaption,
  CCarouselItem,
} from "@coreui/react";
import urlbackend from "../lib/utils/BackendUrl";
import axios from "axios";
function Viewplates() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(urlbackend + "/getallplates")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => { });
  }, []);
  return (
    <CCarousel
      pause={false}
      indicators
      className="CCarousel  h-full w-full bg-black"
      interval={3000}
    >
      {data.map((data) => {
        return (
          <CCarouselItem className="text-white  ">
            <div className="relative text-5xl text-white w-screen h-screen flex items-center justify-center">
              <div className="bg-gray-200 border-[10px] border-blue-600 border-solid w-[95%] h-2/3 rounded-xl shadow-xl flex items-center">

                <div className="flex items-center justify-center rounded-full w-36 h-36 border-[9px] border-blue-600 border-solid ml-12 "><p className="text-blue-600 text-[6rem] font-bold">{data.PlateCode}</p></div>
                <div className="h-full w-32  flex items-center flex-col justify-center gap-12 text-[9rem] text-blue-600 font-bold">
                  <p>ኢ</p>
                  <p>ት</p>
                </div>
                <div className="flex justify-between items-center w-[70%]">
                  <div><p className="text-blue-600 font-bold text-[15rem]">{data.PlateNumber}</p></div>
                  <div className="h-full w-32  flex items-center flex-col justify-center gap-12 text-[9rem] text-blue-600 font-bold">
                    <p>E</p>
                    <p>T</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-10 left-8 flex text-3xl font-bold ">
              <p>Full Name <b className="underline">{data.OwnerName}</b></p>
            </div>
          </CCarouselItem>
        );
      })}
    </CCarousel>
  );
}

export default Viewplates;
