import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { MdKeyboardArrowRight } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { GoDownload } from "react-icons/go";

import { FaFire } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import { PiFilmSlateBold } from "react-icons/pi";
import { HiOutlineSignal } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineNewspaper } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
// import { RiGraduationCapFill } from "react-icons/ri";
import { GiHanger } from "react-icons/gi";
import { RiSignalTowerFill } from "react-icons/ri";

import { CiSettings } from "react-icons/ci";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillChatLeftHeartFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

import youtube from "../assets/youtube.png";
import y_studio from "../assets/Youtube Studio.png";
import y_music from "../assets/youtube-music.png";
import y_kids from "../assets/Youtube kids.png";

import { useSelector, useDispatch } from "react-redux";
import { hadleActiveSidebar } from "../stores/appSlice";

const Sidebar = () => {
  const { open, activeSidebar,theme } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const sidebarItems = {
    first: [
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
      { icon: <MdSubscriptions size={"24px"} />, title: "Subscriptions" },
    ],
    you: [
      { icon: <RxCounterClockwiseClock size={"24px"} />, title: "History" },
      { icon: <MdOutlinePlaylistPlay size={"24px"} />, title: "Playlists" },
      { icon: <BsPlayBtn size={"24px"} />, title: "Your videos" },
      { icon: <RiGraduationCapFill size={"24px"} />, title: "Your Courses" },
      { icon: <IoMdTime size={"24px"} />, title: "Watch Later" },
      { icon: <BiLike size={"24px"} />, title: "Liked videos" },
      { icon: <GoDownload size={"24px"} />, title: "Downloads" },
    ],
    subscriptions: [
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
      { icon: <MdHome size={"24px"} />, title: "Home" },
    ],
    explore: [
      { icon: <FaFire size={"24px"} />, title: "Trending" },
      { icon: <RiShoppingBag4Line size={"24px"} />, title: "Shopping" },
      { icon: <LuMusic4 size={"24px"} />, title: "Music" },
      { icon: <PiFilmSlateBold size={"24px"} />, title: "Films" },
      { icon: <HiOutlineSignal size={"24px"} />, title: "Live" },
      { icon: <GrGamepad size={"24px"} />, title: "Gaming" },
      { icon: <MdOutlineNewspaper size={"24px"} />, title: "News" },
      { icon: <GoTrophy size={"24px"} />, title: "Sport" },
      { icon: <RiGraduationCapFill size={"24px"} />, title: "Courses" },
      { icon: <GiHanger size={"24px"} />, title: "Fashion & beauty" },
      { icon: <RiSignalTowerFill size={"24px"} />, title: "Podcasts" },
    ],
    youtubeProduct: [
      {
        icon: (
          <a
            href="https://music.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} width={"24px"} />
          </a>
        ),
        title: "Youtube Premium",
      },
      { icon: <img src={y_studio} width={"24px"} />, title: "Youtube Studio" },
      { icon: <img src={y_music} width={"24px"} />, title: "Youtube Music" },
      { icon: <img src={y_kids} width={"24px"} />, title: "Youtube Kids" },
    ],
    last: [
      { icon: <CiSettings size={"24px"} />, title: "Settings" },
      {
        icon: <MdOutlineOutlinedFlag size={"24px"} />,
        title: "Report history",
      },
      { icon: <AiOutlineQuestionCircle size={"24px"} />, title: "Help" },
      {
        icon: <BsFillChatLeftHeartFill size={"24px"} />,
        title: "Send feedback",
      },
    ],
  };

  const closeSidebarItems = [
    { icon: <MdHome size={"24px"} />, title: "Home" },
    { icon: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
    { icon: <MdSubscriptions size={"24px"} />, title: "Subscriptions" },
    { icon: <FaRegCircleUser size={"24px"} />, title: "You" },
    { icon: <GoDownload size={"24px"} />, title: "Downloads" },
  ];

  const renderCloseSidebarItems = (arr) => {
    return arr.map((item, index) => (
      <span
        key={index}
        className={`${theme?'hover:bg-white/25 text-white':'text-black'} rounded-xl cursor-pointer block justify-items-center p-4 ${
          activeSidebar === item.title ? `${theme? 'bg-white/20':'bg-neutral-100'}` : `${theme? 'bg-black':'bg-white hover:bg-neutral-100'}`
        }`}
        onClick={() => handleSetHover(item.title)}
      >
        {item.icon}
        <h2 title={item.title} className="mt-1" style={{ fontSize: "10px" }}>
          {item.title}
        </h2>
      </span>
    ));
  };

  const renderSidebarItems = (arr) => {
    return arr.map((item, index) => (
      <div
        key={index}
        className={`${theme?'hover:bg-white/25 text-white':'text-black'} flex py-2 ps-5 rounded-xl my-0.5  cursor-pointer ${ 
          activeSidebar === item.title ? `${theme? 'bg-white/20':'bg-neutral-100'}` : `${theme? 'bg-black':'bg-white hover:bg-neutral-100'}`
        }`}
        onClick={() => handleSetHover(item.title)}
      >
        {item.icon}
        {open && (
          <h2 title={item.title} className="ml-5">
            {item.title}
          </h2>
        )}
      </div>
    ));
  };

  const handleSetHover = (buttonName) => {
    dispatch(hadleActiveSidebar(buttonName));
  };

  return (
    <>
      {open && (
        <div
          className={`${
            open && "w-[15%]"
          } ${theme?'bg-black darkSidebarScrollbar':'bg-white lightSideScrollbar'} h-[91%] p-2 overflow-y-scroll fixed`}
        >
          <div className="border-b pb-3 mb-3">
            {renderSidebarItems(sidebarItems.first)}
          </div>
          <div className="border-b pb-3 mb-3">
            <div className={`${theme?'text-white hover:bg-white/25':'hover:bg-neutral-100 text-black'} flex items-center ps-5 gap-2 cursor-pointer py-2 rounded-xl`}> {/**hover:bg-neutral-100 text-black*/}
              <h2 title="You" className="font-medium text-md">
                You
              </h2> 
              <MdKeyboardArrowRight size={"20px"} /> 
            </div>
            {renderSidebarItems(sidebarItems.you)}
          </div>
          <div className={`${theme?'text-white':'text-black'} border-b pb-3 mb-3`}>
            <h2 title="Explore" className="font-medium text-md ps-5 py-0.5">
              Explore
            </h2>
            {renderSidebarItems(sidebarItems.explore)}
          </div>
          <div className={`${theme?'text-white':'text-black'} border-b pb-3 mb-3`}>
            <h2
              title="More from YouTube"
              className="font-medium text-md ps-5 py-0.5"
            >
              More from YouTube
            </h2>
            {renderSidebarItems(sidebarItems.youtubeProduct)}
          </div>
          <div className="pb-3 mb-3">
            {renderSidebarItems(sidebarItems.last)}
          </div>
        </div>
      )}

      {!open && (
        <div className={` ${"w-[5%]"} h-[90vh] p-2 fixed`}>
          <div>{renderCloseSidebarItems(closeSidebarItems)}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
