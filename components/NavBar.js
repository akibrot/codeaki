import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import backendurl from "../lib/utils/BackendUrl";
import { refresh } from "../lib/Redux/refSlice";
import { updateKey } from "../lib/Redux/searchSlice";

function NavBar() {
  const user = useSelector((state) => state.user);
  const refreshState = useSelector((state) => state.refresh);
  const dispatch = useDispatch();
  // dispatch(refresh());
  // console.log("ref ... " + refresh.refreshState);
  const [allplaces, setplaces] = useState([]);
  useEffect(() => {
    axios
      .get(`${backendurl}` + "/getplace")
      .then((res) => {
        setplaces(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handelSearch = (e) => {
    console.log(e.target.value);
    dispatch(updateKey(e.target.value));
  };
  return (
    <div className="z-10 text-white  bg-black  fixed shadow-sm h-16 w-screen  px-10 sm:px-[15rem] flex items-center justify-between">
      <div className="logo flex flex-col">
        <p>Gedeo Notice</p>
      </div>
      <div className="Links  sm:gap-10 hidden sm:flex ">
        <div className="relative cursor-pointer">
          <p className="flex items-center gap-1 justify-center">
            Fillter
            <select
              name=""
              id=""
              className="bg-white text-black"
              onChange={(e) => handelSearch(e)}
            >
              <option width="100px" value={"All Notice"}>
                {"All Notices"}
              </option>

              {allplaces.map((e) => (
                <option width="100px">{e.PlaceName}</option>
              ))}
            </select>
          </p>
        </div>
        <div>
          <Link href={"/about"}>About</Link>
        </div>

        {user.noticeAccount == true || user.adminAccount == true ? (
          ""
        ) : (
          <div>
            <Link href={"/login"}>Login</Link>
          </div>
        )}
        <div>
          <Link href={"/request"}>Request</Link>
        </div>

        {user.adminAccount ? (
          <div>
            <Link href={"/admin"}>Admin</Link>
          </div>
        ) : (
          ""
        )}
        {user.noticeAccount ? (
          <div>
            <Link href={"/profile"}>Profile</Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="sm:hidden ">
        <GrMenu />
      </div>
    </div>
  );
}

export default NavBar;
