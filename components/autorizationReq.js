import Link from "next/link";
import React from "react";
import { FaInfo } from "react-icons/fa";

function AutorizationReq() {
  return (
    <div className="w-screen h-screen flex flex-col  items-center justify-center ">
      <FaInfo
        size={100}
        color="red"
        className="bg-red-800/30 p-6 rounded-full m-2"
      />

      <p className="text-red-500 font-bold  ">
        Authtentication Required ! Please Login First
      </p>

      <div>
        <div className="px-5 py-2 mt-2 text-white font-bold hover:bg-blue-400 cursor-pointer duration-200 rounded bg-red-300">
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default AutorizationReq;
