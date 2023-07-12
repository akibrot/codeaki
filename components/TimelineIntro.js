import React from "react";

function TimelineIntro() {
  return (
    <div className="w-screen flex flex-col items-center pt-0  justify-center course">
      <div className="w-1/2 flex items-center mt-20  flex-col justify-center pb-12">
        {/* <h1 className="text-[#c0b2b2] text-4xl md:text-5xl font-sans font-bold tracking-wide ">
          Our project Stories
        </h1> */}
        <p className="text-center pt-9 text-gray-300 font-light">
          we have seccessfully designed and deployed multiple mobile
          applications, desktop softwares ,Ui-Ux design, web applications
          including websites and nodejs apis with latest technologies . we
          already displayed our major projects bellow for more informations
          regarding off the technologies and projects check out our github page{" "}
          <span className="underline text-blue-800 cursor-pointer">here</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default TimelineIntro;
