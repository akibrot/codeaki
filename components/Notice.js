import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import urlbackend from "../lib/utils/BackendUrl";
import ImageComponent from "./ImageComponent";

function Notice({ data }) {
  const [openImages, setopenImages] = useState(true);
  const [pimage, setProfile] = useState("");
  // console.log("image profile" + data.PictureOrg);
  const email = { Email: data.Email };
  useEffect(() => {
    axios
      .post(urlbackend + "/getimage", email)
      .then((res) => {
        setProfile(res.data);
        // console.log("profile image" + res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="w-[50rem]   bg-white rounded-xl shadow-xl flex flex-col">
      <div className="h-[5rem] flex items-center  justify-between relative px-[5.7rem]">
        <div className="absolute left-0 px-0 flex items-center justify-center bg-black/10 w-16 h-16 shadow-xl rounded-full ml-4 mt-2">
          <Image
            src={pimage}
            alt="img"
            className="rounded-full h-full w-full"
            layout="fill"
          />
        </div>
        <p className="font-bold">{data.OrganizationName} </p>
        <p className="font-bold">22/01/2014 </p>
      </div>
      <div className="px-5 sm:pl-[5.7rem] font-bold text-xl">
        <p>{data.Subject}</p>
      </div>
      <div className="px-5 sm:px-[5.7rem] py-3">
        <p>{data.Description}</p>
      </div>
      <div className="flex px-5 sm:px-[5.7rem] flex-wrap  gap-3 py-4 mb-2">
        {data.Picture.map((e) => (
          <ImageComponent key={e} pic={e} />
        ))}
      </div>
    </div>
  );
}

export default Notice;
