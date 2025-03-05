import { useEffect, useState } from "react";
import VideoCart from "./VideoCart";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constants/Youtube";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVideos, setOfflinePage } from "../stores/appSlice";

const VideoContainer = () => {
  const {videos,category,offlinePage} = useSelector((store) => store.app);

  const dispatch = useDispatch();

  const fetchYoutubeVideo = async () => {
    try {
      const res = await fetch(`${YOUTUBE_VIDEO_API}`);
      const data = await res.json();
      dispatch(setOfflinePage(false));
      dispatch(setVideos(data?.items));
    } catch (error) {
      console.log(error);
      if(!offlinePage){
        dispatch(setOfflinePage(true));
      }      
    }
  };

  const fetchVideoByCategory = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      dispatch(setVideos(data?.items));
    } catch (error) {
      
      console.log(error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchYoutubeVideo();
    } else {
      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <div className="flex w-[100%] justify-between flex-wrap overflow-y-auto mt-5">
      {videos.map((item, index) => {
        return (
          <Link
            to={{ pathname: "./watch", search: `?v=${item.id}` }}
            state={item}
            key={index}
            className="w-[32%] rounded-lg mb-5"
          >
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
