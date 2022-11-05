import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCreativeCommons } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { BsFileEarmarkPost } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { MdCreate } from "react-icons/md";
import CreateNotice from "../components/menus/CreatePlate";
import Logout from "../components/menus/Logout";
import ManageProfile from "../components/menus/ManageProfile";
import PostedNotice from "../components/menus/Displayedplates";
import { useDispatch, useSelector } from "react-redux";
import AutorizationReq from "../components/autorizationReq";
import { logout } from "../lib/Redux/userSlice";
import { useRouter } from "next/router";
import Head from "next/head";
import DisplayedPlates from "../components/menus/Displayedplates";

const Profile = ({ user }) => {
  const [selected, setselected] = useState(1);
  const [logoutdisp, setlogoud] = useState(false);
  // const userState = useSelector((state) => state.user);
  console.log("user info" + user);
  const dispatch = useDispatch();
  const router = useRouter();
  const logouthandler = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Dilla Road Transport Plate Display</title>
      </Head>
      {/* backbutton */}
      <div className="absolute right-0 top-0  pr-10 pt-2 z-50">
        {/* <Link href="/">
          <p className="text-blue-500 text-sm cursor-pointer flex items-center gap-1">
            {" "}
            <FaArrowLeft /> Back to Homepage
          </p>
        </Link> */}
      </div>
      {/*Side Menu */}
      <div className="absolute w-[20%] h-full flex flex-col gap-1  pl-2   shadow-xl bg-blue-500 ">
        <div className="flex items-center  flex-col justify-center w-full ">
          <div className="w-52  h-32  rounded  mt-16 flex items-center justify-center  shadow-xl bg-white">
            <img src={"/"} />
          </div>
          <p className="py-4 px-2 text-gray-200 shadow-sm text-center font-bold ">
            {"Dilla Road Transport Plate Display System"}{" "}
          </p>
        </div>
        <div
          className="text-[#ffffff]  hover:bg-blue-600 bg-blue-600 w-full h-12 flex items-center pl-2 rounded cursor-pointer mt-3 "
          onClick={() => setselected(1)}
        >
          <MdCreate />
          <p className="pl-3">Create Plate</p>
        </div>

        <div
          className="text-[#ffffff] hover:bg-blue-600 w-full h-12 flex items-center pl-2 rounded cursor-pointer"
          onClick={() => setselected(2)}
        >
          <BsFileEarmarkPost />
          <p className="pl-3">Displayed Plates</p>
        </div>
        <div
          className="text-[#ffffff] hover:bg-blue-600 w-full h-12 flex items-center pl-2 rounded cursor-pointer"
          onClick={() => setselected(3)}
        >
          <BsFileEarmarkPost />
          <Link href={"/viewplates"} target="_top">
            <p className="pl-3">View Plates</p>
          </Link>
        </div>
        <div
          className="relative text-[#ffffff] hover:bg-blue-600 w-full h-12 flex items-center pl-2 rounded cursor-pointer"
          onClick={() => setlogoud(!logoutdisp)}
        >
          <IoIosLogOut color="red" />
          <p className="pl-3">Logout</p>
          <div
            className={
              logoutdisp
                ? "absolute top-12 left-9 flex justify-between gap-2"
                : "hidden"
            }
          >
            <button
              className=" p-2 bg-slate-50 text-red-500 font-bold rounded duration-200 hover:text-red-700"
              onClick={() => logouthandler()}
            >
              Logout
            </button>
            <button className="text-white p-2 bg-green-400 rounded">
              Cancle
            </button>
          </div>
        </div>
      </div>
      <CreateNotice selected={selected} />
      <DisplayedPlates selected={selected} />
      {/* <PostedNotice selected={selected} /> */}
    </div>
  );
};
export default Profile;

// export function getServerSideProp() {
//   // const user = useSelector((state) => state.user);
//   const user = { aki: "aki" };
//   return {
//     props: {
//       user: user,
//     },
//   };
// }
