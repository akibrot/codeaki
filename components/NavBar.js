import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function NavBar() {
  const color = useSelector((state) => state.user.color);

  return (
    <div className={color ? "text-gray-300 course hidden fixed top-0 z-10 h-16  w-screen sm:px-32 px-10 sm:flex items-center justify-between" : "hidden text-gray-300   fixed top-0 z-10 h-16  w-screen sm:px-32 px-10 sm:flex items-center justify-between"}>

      <div className="relative " >
        <Link href="/" className="hover:text-gray-400 duration-300">
          <ul className="font-light cursor-pointer  ">
            <li className="text-[1.2rem] hover:text-gray-400" >code-aki</li>
          </ul></Link>
        <a href="#home" className="hover:text-gray-400 duration-300"> <p className="font-extralight absolute  left-0 top-7 w-[12rem] text-[0.8rem] pl-[2px]  -mt-2" >we design, develop and teach !</p></a>

      </div>

      <div>
        <ul className="sm:inline-flex  hidden gap-6 font-light cursor-pointer  ">
          <a href="#tech" className="hover:text-gray-400 duration-300"><li>techs</li></a>
          <a href="#services" className="hover:text-gray-400 duration-300"><li>services</li></a>
          <Link href="/portofolio" className="hover:text-gray-400 duration-300 text-red-300"><li>portofolio</li></Link>
          <a href="#contactus" className="hover:text-gray-400 duration-300"><li>contact us</li></a>
          <Link href="/courses" className="hover:text-gray-400 duration-300"><li>courses</li></Link>




        </ul>
      </div>
      <div className="bg-blue-400 p-2 px-3 hover:text-black duration-300 text-white rounded-md flex items-center justify-center font-light cursor-pointer"><span className="hover:text-black duration-300">support</span></div>
    </div>
  );
}

export default NavBar;

