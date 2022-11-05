import axios from "axios";
import { useEffect, useState } from "react";
import File from "react-file-base64";
import { useSelector } from "react-redux";
import urlbackend from "../../lib/utils/BackendUrl";
const CreateNotice = ({ selected }) => {
  const [LoginLoader, setLoginLoader] = useState(false);
  const [accountcreated, setaccountcreated] = useState(false);
  const [accountnotcreated, setaccountnotcreated] = useState(false);
  const et = ["ኢ", "ት", "E", "T"];

  //data
  const [OwnerName, setOwnerName] = useState("");
  const [VehicleType, setVehicleType] = useState("");
  const [PlateCode, setPlateCode] = useState("");
  const [PlateNumber, setPlateNumber] = useState("");
  const [PlateAddress, setPlateAddress] = useState(et);
  // setPlateAddress("ኢ", "ት", "E", "T");
  const sn = [];
  const data = {
    OwnerName,
    VehicleType,
    PlateCode,
    PlateNumber,
    PlateAddress,
  };

  const createPlateHandler = (e) => {
    e.preventDefault()
    console.log("test clicked");
    setLoginLoader(true);
    axios
      .post(`${urlbackend}` + "/createplate", data)
      .then((res) => {
        setLoginLoader(false);

        setaccountcreated(true);
        setTimeout(() => {
          setaccountcreated(false);
        }, 3000);
        console.log("account created");
      })
      .catch((err) => {
        setaccountnotcreated(true);
        setTimeout(() => {
          setLoginLoader(false);
          setaccountnotcreated(false);
        }, 3000);
      });
  };
  const PlateAddressAHandler = (e) => {
    console.log(e.target.value);
  };

  return (

    <div
      className={
        selected == 1
          ? "relative left-[20%] h-full w-[80%] flex flex-col"
          : "hidden"
      }
    >
      <div className="w-full py-5 flex items-center justify-center text-[#828181b0] font-bold text-xl shadow-sm center">
        Create Plate
      </div>
      <div className="flex">
        <form action="" id="createplate" onSubmit={(e) => createPlateHandler(e)}></form>
        <div className=" w-full flex flex-col items-center justify-center mt-10">
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              type="text"
              placeholder="Owner Name"
              className="bg-transparent w-full outline-none border-none text-sm"
              required
              form="createplate"
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>{" "}
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              required
              form="createplate"
              type="text"
              placeholder="Vehicle Type"
              className="bg-transparent w-full outline-none border-none text-sm"

              onChange={(e) => setVehicleType(e.target.value)}
            />
          </div>{" "}
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              required
              form="createplate"
              type="text"
              placeholder="Plate code"
              className="bg-transparent w-full outline-none border-none text-sm"

              onChange={(e) => setPlateCode(e.target.value)}
            />
          </div>{" "}
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <input
              required
              form="createplate"
              type="text"
              placeholder="Plate number"
              className="bg-transparent w-full outline-none border-none text-sm"

              onChange={(e) => setPlateNumber(e.target.value)}
            />
          </div>{" "}
          <div className="bg-[#E4EEF2] w-[52rem] h-12 rounded flex items-center pl-3 my-2 ">
            <select
              className="w-full mr-1 bg-transparent"
              title="Plate Address"
              onChange={(e) => PlateAddressAHandler(e)}
            >
              {["E T ", "S P"].map((e) => {
                return <option key={e} value={e}>{e}</option>;
              })}
            </select>
          </div>
          <div className="bg-[#3B82F6] relative w-[52rem] cursor-pointer h-12 rounded flex items-center pl-3 my-2 justify-center text-white">
            <button
              form="createplate" type="submit" className="w-full h-full " >

              Create
            </button>
            <div
              className={
                LoginLoader
                  ? "absolute center w-10 h-10 rounded-full border-dotted border-[5px] animate-spin duration "
                  : "hidden"
              }
            ></div>
          </div>
        </div>
        <div
          className={
            accountcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-green-400"
              : "hidden"
          }
        >
          <p>Notice Posted successfully</p>
        </div>
        {/* account not created model */}

        <div
          className={
            accountnotcreated
              ? "absolute top-20 pr-10 right-0 z-100 text-red-500"
              : "hidden"
          }
        >
          <p>Notice not Posted server error </p>
        </div>
      </div>
    </div >
  );
};
export default CreateNotice;
