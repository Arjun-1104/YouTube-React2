import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiCheckCircleFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { API_KEY } from "../constants/Youtube";
import { useDispatch, useSelector } from "react-redux";
import { setChannelPic } from "../stores/appSlice";
import { timeAgo,formatviews } from "./Helper";
import girl from "../assets/girl.jpeg";


const VideoCart = ({item}) => {
  const {channelPic,category} = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const youtubeChannelName = async () => {
    try{
    const res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item?.snippet?.channelId}&key=${API_KEY}`)
    const data = await res.json()
    dispatch(setChannelPic(data?.items[0]?.snippet?.thumbnails?.high?.url))
    }
    catch(error){
      console.log(error)
    }
  }

  // console.log(channelPic)

  useEffect(()=>{
    youtubeChannelName()
  },[category])

  return (
    <div>
      <div className="relative w-full h-54 ">
        <img
          src={item?.snippet?.thumbnails?.high?.url}
          alt=""
          className="absolute w-full h-full rounded-xl object-cover"
        />
      </div>

      <div className="flex w-full px-1 py-2 ">
        <div className="w-[10%] py-1">
          <img
            className="cursor-pointer rounded-full h-[35px]"
            src={ girl || channelPic}
          ></img>
        </div>
        <div className="w-[80%] px-1">
          <h2 className="font-medium mb-1">
            {item?.snippet?.title.length > 70 ? `${item?.snippet?.title.slice(0, 70)}...` : item?.snippet?.title}
          </h2>

          <div className="flex items-center text-sm text-gray-700 gap-1">
            <p>{item?.snippet?.channelTitle}</p> <PiCheckCircleFill />
          </div>
          <p className=" flex items-center text-sm text-gray-700">
            {formatviews((item?.statistics?.viewCount) || 0)} views
            <LuDot size={"20px"} /> {timeAgo(item?.snippet?.publishedAt)}
          </p>
        </div>
        <div className="w-[10%] flex justify-center py-1">
          <BsThreeDotsVertical size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
