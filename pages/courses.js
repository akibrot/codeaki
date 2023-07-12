import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { colorOn, textColorOn } from "../lib/Redux/userSlice";
import { Router, useRouter } from "next/router";
import CourseListGenerator from "../components/CourseListGenerator";
import Head from "next/head";

function Courses() {
  // const route = useRouter()
  const dispatch = useDispatch();

  dispatch(colorOn());



  return <div className="course h-screen w-screen overflow-y-scroll ">
    <Head>
      <title>
        Learn the newest development technologies for free!

      </title></Head>
    <div className=" w-[20vw] fixed h-[80vh] overflow-y-scroll top-[20vh]  ">
      {
        teachModel.map((e) => {
          return (
            <CourseListGenerator key={e.General} data={e} />
          )
        })
      }
    </div>
    <div className=" pb-5 left-[23vw] ml-1 top-[10vh]  course relative   flex-wrap  items-center  flex  w-[80vw]  ">

      {
        [1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1].map((e) => {
          return <div key={e} className="card w-[20rem] rounded-md h-[10rem] m-2 bg-gray-700/10"></div>

        })
      }
    </div>
  </div>;
}

export default Courses;

export const teachModel = [
  {
    General: "Framworks",
    category: [
      {
        course: "Reactjs"
      },
      {
        course: "Nextjs"
      },
      {
        course: "Flutter"
      },
    ]

  },
  {
    General: "Programming Languages",
    category: [
      {
        course: "c++"
      },
      {
        course: "Java"
      },
      {
        course: "c#"
      }, {
        course: "python"
      }, {
        course: "command-line"
      },
    ]

  }, {
    General: "Apps",
    category: [
      {
        course: "Telegram"
      }, {
        course: "TubeMate"
      },
      {
        course: "WPS"
      },
      {
        course: "Playstore"
      }, {
        course: "Diffrent games"
      },
    ]

  }, {
    General: "Tech tips",
    category: [
      {
        course: "Telegram"
      }, {
        course: "TubeMate"
      },
      {
        course: "WPS"
      },
      {
        course: "Playstore"
      }, {
        course: "Diffrent games"
      },
    ]

  },

  {
    General: "Microsoft Office",
    category: [
      {
        course: "Excel"
      },
      {
        course: "Word"
      },
      {
        course: "Power-point"
      },
    ]

  }
  , {
    General: "ui-ux",
    category: [
      {
        course: "ui-ux design"
      },

    ]

  },
]