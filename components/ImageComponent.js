import Image from "next/image";
import React, { useState } from "react";

function ImageComponent({ pic }) {
  const [openImages, setopenImages] = useState(false);
  // console.log(pic);
  return (
    <div
      className="w-20 h-20  relative cursor-pointer"
      onClick={() => setopenImages(!openImages)}
    >
      <Image src={pic} alt="image" layout="fill" />
      <div
        className={
          openImages
            ? "bg-black/30 w-screen h-full top-0  z-20 left-0 px-0 overflow-auto  fixed m-auto ml-0 flex items-center justify-center"
            : "bg-black/30 w-screen  top-0 z-20 left-0 px-0  hidden m-auto ml-0"
        }
      >
        <div className=" w-1/2 h-full relative flex items-center justify-center overflow-auto">
          <Image src={pic} width={600} height={670} className="h-full" />
        </div>

        <div className="absolute top-0 right-0 bg-black w-10 h-10 flex items-center justify-center text-white cursor-pointer text-xl float-right m-10 rounded">
          <button
            className="bg-transparent border-none"
            onClick={() => setopenImages(!openImages)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
