import TimelineIntro from "../components/TimelineIntro";
import Timeline from "../components/Timeline";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { colorOn } from "../lib/Redux/userSlice";
import electronjsapp from "../public/react.svg";
import eth from "../public/etheritage.png";
import api from "../public/nodejsapi.png";
import mobile from "../public/mobile.PNG";
import mobile1 from "../public/menged.png";
import mobile11 from "../public/zometeanspoer.png";
import { FaArrowUp } from "react-icons/fa";
export default function Portofolio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(colorOn());
  });
  return (
    <div className="bg-white scroll-smooth " id="portofolioTop">
      <TimelineIntro />
      <div className="pb-[1rem] bg-white ">
        {/* <Timeline/>
         */}
        {Timelines.map((timeline) => {
          return (
            <Timeline
              key={timeline.id}
              direction={timeline.direction}
              data={timeline}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-end p-12 bg-white">
        <a href="#portofolioTop">
          <FaArrowUp
            size={50}
            cursor={"pointer"}
            color="lightblue"
            className="duration-300 hover:scale-110"
            title="Go to the top "
          />
        </a>
      </div>
    </div>
  );
}
const Timelines = [
  {
    id: 1,
    direction: "left",
    image: eth,
    description:
      "This project called ethiopian heritages in everywhere language based encyclopidic based reactjs web app with deep links algorithm",
    date: "2022",
  },
  {
    id: 2,
    direction: "right",
    image: api,
    description:
      "This is nodejs api designed for ethiopian heritage web based encyclopidic knowlage system and it is already up and running on heroku server",
    date: "2022",
  },
  {
    id: 3,
    direction: "left",
    image: mobile,
    description:
      "Mobile app developed for gedeo zone curlture and tourism affairs , which lets peoples know more about Gedeo heritages through an offline mobile application. ",
    date: "2023",
  },

  {
    id: 4,
    direction: "right",
    image: mobile11,
    description:
      "Desktop software developed for Gedeo zone transport department , developed in NEXTRON Technologies.",
    date: "2023",
  },
];
