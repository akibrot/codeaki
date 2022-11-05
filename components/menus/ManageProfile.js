import Image from "next/image";
import { useEffect, useState } from "react";
import pic from "../../public/pic.png";
import File from "react-file-base64";
import { useSelector } from "react-redux";
import axios from "axios";
import urlbackend from "../../lib/utils/BackendUrl";

const ManageProfile = ({ selected }) => {
  const state = useSelector((state) => state.user);
  const [accountcreated, setaccountcreated] = useState(false);
  const [accountnotcreated, setaccountnotcreated] = useState(false);
  const [pccountcreated, petaccountcreated] = useState(false);
  const [pccountnotcreated, petaccountnotcreated] = useState(false);
  const [LoginLoader, setLoginLoader] = useState(false);
  // const [ProfilePic, setProfilePic] = useState(state.userinfo.Picture);
  const [Password, setPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");

  const ChangeProfilePic = (e) => {
    const data = {
      Picture: ProfilePic,
      // _id: state.userinfo._id,
    };
    e.preventDefault();
    setLoginLoader(true);
    axios
      .post(`${urlbackend}` + "/updateprofileimage", data)
      .then((res) => {
        setaccountcreated(true);
        setTimeout(() => {
          setaccountcreated(false);

          setLoginLoader(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("error");
        setaccountnotcreated(true);
        setTimeout(() => {
          setLoginLoader(false);
          setaccountnotcreated(false);
        }, 3000);
      });
  };
  const ChangePassword = (e) => {
    const data = {
      // Email: state.userinfo.Email,
      Password: Password,
      NewPassword: NewPassword,
    };
    e.preventDefault();
    setLoginLoader(true);
    axios
      .post(`${urlbackend}` + "/updatepassword", data)
      .then((res) => {
        petaccountcreated(true);
        setTimeout(() => {
          petaccountcreated(false);

          setLoginLoader(false);
        }, 3000);
      })
      .catch((err) => {
        console.log("error");
        petaccountnotcreated(true);
        setTimeout(() => {
          setLoginLoader(false);
          petaccountnotcreated(false);
        }, 3000);
      });
  };

  return (
    <div
      className={
        selected == 2
          ? "relative left-[20%] h-full w-[80%] flex flex-col"
          : "hidden"
      }
    >
      <div className="w-full py-5 flex items-center justify-center text-[#828181b0] font-bold text-xl shadow-sm center">
        Manage Profile
      </div>
      <div className="flex">
        <div className=" w-full flex flex-col items-center justify-center mt-10">
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              type="text"
              placeholder="Organization Name"
              readOnly
              className="bg-transparent w-full outline-none border-none text-sm"
              // value={state.userinfo.OrganizationName}
            />
          </div>
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              type="text"
              placeholder="Email"
              readOnly
              className="bg-transparent w-full outline-none border-none text-sm"
              // value={state.userinfo.Email}
            />
            <input
              type="text"
              placeholder="Phone"
              readOnly
              className="bg-transparent w-full outline-none border-none text-sm"
              // value={state.userinfo.Phone}
            />
          </div>

          <div className="w-[52rem]  rounded flex items-center  my-2 ">
            <div className="flex-[5] flex flex-col text-[#585656b0] text-xl">
              <p>Profile Image</p>
              <div
                title="click center of the image to choose image"
                className=" bg-red-900/5  my-2 w-full h-[13rem] items-center justify-center flex relative"
              >
                <Image
                  src={"/ProfilePic"}
                  alt="profile image"
                  // height={210}
                  // width={409}
                  layout="fill"
                  width={"100%"}
                  className="rounded absolute"
                />
                <div className="absolute cursor-pointer opacity-0">
                  <File
                    onDone={(e) => setProfilePic(e.base64)}
                    className="cursor-pointer z-50"
                  />
                </div>
              </div>
              <div className="bg-[#3B82F6] relative w-full cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center text-white mt-3">
                <button
                  type="file "
                  className="w-full h-full"
                  onClick={(e) => ChangeProfilePic(e)}
                >
                  Change Image
                </button>
              </div>
            </div>

            <div className="flex-[5] flex h-fit  flex-col mx-2  text-[#585656b0] text-xl">
              <p>Change Password</p>
              <div className="bg-[#E4EEF2] relative w-full cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center ">
                <input
                  type="text"
                  placeholder="Old password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-transparent w-full outline-none border-none text-sm"
                />
              </div>
              <div className="bg-[#E4EEF2] relative w-full cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center">
                <input
                  type="text"
                  placeholder=" New password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  form="cpasswoerd"
                  className="bg-transparent w-full outline-none border-none text-sm"
                />
              </div>
              <div className="bg-[#3B82F6] relative w-full cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center text-white mt-[6.7rem]">
                <button
                  type="submit "
                  className="w-full h-full"
                  form="cpasswoerd"
                  title="submit new password"
                  onClick={(e) => ChangePassword(e)}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            accountcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-green-400"
              : "hidden"
          }
        >
          <p>Profile image updated successfully</p>
        </div>
        {/* account not created model */}

        <div
          className={
            accountnotcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-red-500"
              : "hidden"
          }
        >
          <p>Internal server error </p>
        </div>
        <div
          className={
            pccountcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-green-400"
              : "hidden"
          }
        >
          <p>Password updated successfully</p>
        </div>
        {/* account not created model */}

        <div
          className={
            pccountnotcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-red-500"
              : "hidden"
          }
        >
          <p>You entered wrong old password </p>
        </div>
      </div>
    </div>
  );
};
export default ManageProfile;
