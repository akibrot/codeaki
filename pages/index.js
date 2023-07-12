import React, { useEffect } from "react";
import HomePage from "../components/Pages/HomePage";
import Tech from "../components/Pages/Tech";
import Services from "../components/Pages/Services";
import Contactus from "../components/Pages/Contactus";
import { useDispatch, useSelector } from "react-redux";
import { colorOff, textColorOff } from "../lib/Redux/userSlice";
import Head from "next/head";
import Mobile from "../components/Mobile/Mobile";
// import colorOff from '../lib/Redux/userSlice'
function HomepageMain() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(colorOff())

    // console.log(userState)
  }, [])
  return <> <div className="hidden sm:block w-screen h-screen snap-y snap-mandatory   overflow-y-scroll overflow-x-hidden  scroll-smooth  ">
    <Head>
      <title>code-aki design | develop | teach </title>
    </Head>
    <HomePage />
    <Tech />
    <Services />
    <Contactus />
  </div>
    <Mobile />
  </>
}

export default HomepageMain;
