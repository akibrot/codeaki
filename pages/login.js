import Link from "next/link";
import { useState } from "react";
import { FaArrowDown, FaArrowLeft, FaEye } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import urlbackend from "../lib/utils/BackendUrl";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../lib/Redux/userSlice";
import Head from "next/head";
function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [visibile, setvisibile] = useState("Password");
  const [LoginLoader, setLoginLoader] = useState(false);
  const [FalseCridentials, setFalseCridentials] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const setVisibileHandler = () => {
    if (visibile == "Password") {
      setvisibile("text");
    } else setvisibile("Password");
  };
  const data = {
    Email,
    Password,
  };
  const Login = (e) => {
    e.preventDefault();
    setLoginLoader(true);
    axios
      .post(`${urlbackend}` + "/login", data)
      .then((res) => {
        console.log(res.data);
        setLoginLoader(false);
        const user = res.data;
        dispatch(login(user));
        console.log(user);
        if (user.adminAccount == true) router.push("/admin");
        else router.push("/profile");
      })
      .catch((err) => {
        setLoginLoader(false);
        setFalseCridentials(true);

        setTimeout(() => {
          setLoginLoader(false);
          setFalseCridentials(false);
        }, 3000);
      });
  };
  return (
    <div className="w-screen h-screen relative flex  flex-col items-center justify-center">
      <Head>
        <title>Gedeo Notice |- Login page</title>
      </Head>
      <div className="px-20 py-10 shadow-xl  items-center flex flex-col">
        <p className="text-3xl text-[#828181]  font-bold">Login</p>
        <p className="text-sm text-[#828181] mt-3 mb-2">
          Enter Your Email And Password
        </p>

        <form action="" onSubmit={(e) => Login(e)} className="w-full  ">
          <div className="bg-[#E4EEF2] w-[420px] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full outline-none border-none text-sm"
            />
          </div>
          <div className="bg-[#E4EEF2] w-[420px] h-12 rounded flex items-center pl-3 my-2">
            <input
              type={visibile}
              required
              autoComplete="false"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent w-[93%] text-sm outline-none border-none"
            />
            <FaEye
              onClick={() => setVisibileHandler()}
              className="cursor-pointer"
            />
          </div>
          <p className="text-[#828181] text-sm my-4 ">
            Forgot Your Password ?{" "}
            <button className="text-red-700 hover:text-red-500">
              reset here
            </button>
          </p>
          <div className="bg-[#3B82F6] relative w-[420px] cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center text-white">
            <button type="submit " className="w-full h-full">
              Login
            </button>
            <div
              className={
                LoginLoader
                  ? "absolute center w-10 h-10 rounded-full border-dotted border-[5px] animate-spin duration "
                  : "hidden"
              }
            ></div>
          </div>
        </form>
      </div>
      {/* back to homepage */}
      <div className="absolute right-0 top-0  pr-10 pt-2">
        <Link href="/">
          <p className="text-blue-500 text-sm cursor-pointer flex items-center gap-1">
            {" "}
            <FaArrowLeft /> Back to Homepage
          </p>
        </Link>
      </div>
      {/* Login not successfull */}
      <div
        className={
          FalseCridentials
            ? "absolute right-0 top-0  pr-10 pt-10 duration-500 "
            : "hidden"
        }
      >
        <Link href="/">
          <p className="text-red-600 text-sm cursor-pointer flex items-center gap-1  ">
            {" "}
            <BiErrorCircle /> Login error check your cridentials
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
