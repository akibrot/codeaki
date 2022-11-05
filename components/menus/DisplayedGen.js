import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function DisplayedGen({ data }) {
    return (
        <div className="bg-[#E4EEF2] w-full  h-12 rounded flex items-center  my-2 justify-between">
            <div className="flex items-center  pl-4 gap-10 w-full">
                <div className="w-[27%]"><p>{data.OwnerName}</p></div>
                <div><p>code <b className="underline">{data.PlateCode}</b></p></div>

                <div><p>PL.No <b className="underline">{data.PlateNumber}</b></p></div>
            </div>
            <div className="flex items-center gap-2 ">
                <FaEdit className="cursor-pointer" />
                <FaTrash className="text-red-600 mr-2 cursor-pointer" />
            </div>
        </div>
    );
}

export default DisplayedGen;
