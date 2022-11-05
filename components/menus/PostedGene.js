import Link from "next/link";
import React from "react";

function PostedGene({ data }) {
    return (
        <div className="w-[14rem] h-[10rem]  rounded shadow-lg flex flex-col items-center">
            <p className="font-bold">subject</p>
            <p>{data.Subject}</p>
            <div className="flex gap-2">
                <Link href={`/noticedetail/${data._id}`}>
                    <button className="text-white bg-blue-300 px-3 py-1 rounded" >View</button>
                </Link>
                <button className="text-white bg-red-400 px-3 py-1 rounded duration-200 hover:bg-red-600" >Delete</button>

            </div>
        </div>)
}

export default PostedGene;
