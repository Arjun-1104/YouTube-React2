import React, { useRef, useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/Header.module.css";
import { BiDoughnutChart } from "react-icons/bi";

import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineSignal } from "react-icons/hi2";
import { BsPencilSquare } from "react-icons/bs";

import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { handleOpenSidebar } from "../stores/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_SUGGESTION_API } from "../constants/Youtube";
import { showSearchSuggestion } from "../stores/appSlice";
import { setInputText, setShowSearchData,setTheme} from "../stores/appSlice";
import { LiaPenSquareSolid } from "react-icons/lia";

import dark_mode_youtube from "../assets/dark-mode-youtube.jpg" ;
import {light_mode_youtube} from "./Helper"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  
  const [createClick, setCreateClick] = useState(false);
  const [openMic, setOpenMic] = useState(false);
  const { searchSuggestion, inputText, showSearchData,theme } = useSelector(
    (store) => store.app
  );

  const dispatch = useDispatch();

  const micRef = useRef(null);
  const toggleMicWindow = () => {
    setOpenMic(!openMic);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (micRef.current && !micRef.current.contains(event.target)) {
        setOpenMic(false);
      }
    };

    if (openMic) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMic]);

  const showSuggestion = async () => {
    try {
      const res = await fetch(SEARCH_SUGGESTION_API + inputText);
      const data = await res.json();
      dispatch(showSearchSuggestion(data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return () => clearTimeout(timer);
  }, [inputText]);

  // 
  return (
    <div className={`${theme?'bg-black text-white':'bg-white text-black'} flex items-center justify-between px-5 fixed w-full py-2 z-10`} /*}*/> 
      {/* left section */}
      <div className="flex w-[10%] justify-between items-center">
        <div
          className={`${theme?'hover:bg-white/20':'hover:bg-gray-200'}  p-2 rounded-full cursor-pointer`} /**/
          onClick={() => dispatch(handleOpenSidebar())} //${theme?'':''}
        >
          <RxHamburgerMenu size={"24px"}/>
        </div>
        <Link to="/">
          <img
            to="/"
            className="cursor-pointer"
            width="95px"
            title="YouTube Home"
            src={`${theme ? dark_mode_youtube : light_mode_youtube}`}
            alt=""
          />
        </Link>
      </div>

      {/* middle section */}
      <div className="flex w-[40%] justify-between">
        <div className="flex w-[90%] items-center rounded-full">
          <div
            className={`${theme?'border-white/30':'border-gray-400'} flex w-[90%] items-center rounded-full rounded-r-none border ${styles.container}`}
          >
            <CiSearch size={"18px"} className={`ml-4 ${styles.searchSmall}`} />
            <input
              type="text"
              className={` w-[100%] py-2 px-4 outline-none rounded-full rounded-r-none border-r-0 font-medium`}
              placeholder="Search"
              value={inputText}
              onChange={(e) => dispatch(setInputText(e.target.value))}
            />
            {inputText && (
              <div
                className={`${theme?'text-white hover:bg-white/20':'text-black hover:bg-gray-200'} p-2 rounded-full cursor-pointer`}
                onClick={() => dispatch(setInputText(""))}
              >
                <RiCloseLargeFill size={"24px"} />
              </div>
            )}

            {/* search suggestion section */}
            {inputText !== showSearchData && (
              <div className={`${theme?'bg-neutral-800':'bg-white'} z-2 absolute top-14 shadow-xl border-0 w-[31%] rounded-xl py-4`}>{/** */}
                <ul>
                  {searchSuggestion.map((text, idx) => {
                    return (
                      <div
                        className={`${theme?'hover:bg-white/20':'hover:bg-gray-100'} flex items-center py-1 cursor-pointer `}/* */
                        key={idx}
                        onClick={() => dispatch(setShowSearchData(text))}
                      >
                        <CiSearch size={"18px"} className={`ml-4 mr-4`} />
                        <h2 className="font-medium">{text}</h2>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          <div
            title="Search"
            className={`${theme?'bg-white/15 border-white/20':'bg-gray-100 border-gray-400 hover:bg-gray-200'} p-2 w-[12%] rounded-r-full border border-l-0 flex justify-center cursor-pointer`}
          >
            <CiSearch
              size={"24px"}
              onClick={() => dispatch(setShowSearchData(inputText))}
            />
          </div>
        </div>
        <div
          title="Search with your voice"
          className={`${theme?'bg-white/15 hover:bg-white/25':'bg-gray-100 hover:bg-gray-200'} p-2 rounded-full cursor-pointer `}
        >
          <IoMdMic size={"24px"} onClick={toggleMicWindow}/>
        </div>
      </div>

      {/* Mic Window (Modal) */}
      {openMic && (
        <div
          ref={micRef}
          className="absolute top-[50px] right-0 bg-white shadow-lg p-4 rounded-lg w-[250px] text-center"
        >
          <h2 className="text-lg font-semibold">Voice Search</h2>
          <p className="text-gray-600">Speak now...</p>
          <div className="mt-2">
            <IoMdMic size={"40px"} className="text-blue-500 animate-pulse" />
          </div>
          <button
            className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded"
            onClick={() => setOpenMic(false)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* right section */}
      <div className="flex items-center w-[15%] justify-around">
        <div>
          <div
            className={`${theme?'bg-white/15 hover:bg-white/25':'bg-gray-100 hover:bg-gray-200'} flex items-center rounded-full py-1.5 px-3 gap-2 cursor-pointer`} /**bg-gray-100 hover:bg-gray-200*/
            onClick={() => setCreateClick(!createClick)}
          >
            <div className="rounded-full">
              <AiOutlinePlus size={"24px"}/>
            </div>
            <h2 className="font-medium">Create</h2>
          </div>

          {createClick && (
            <div className={`${theme?'bg-white/15':'bg-white'} fixed w-45 shadow-2xl py-2 rounded-lg`}>
              <div className={`${theme?'hover:bg-white/25':'hover:bg-gray-100'} px-4 flex items-center gap-4 py-2 cursor-pointer`}>
                <AiOutlinePlaySquare size={"24px"} />
                <p className="text-sm font-normal">Upload video</p>
              </div>
              <div className={`${theme?'hover:bg-white/25':'hover:bg-gray-100'} px-4 flex items-center gap-4 py-2 cursor-pointer`}>
                <HiOutlineSignal size={"24px"} />
                <p className="text-sm font-normal">Go live</p>
              </div>
              <div className={`${theme?'hover:bg-white/25':'hover:bg-gray-100'} px-4 flex items-center gap-4 py-2 cursor-pointer`}>
                <BsPencilSquare size={"24px"} />
                <p className="text-sm font-normal">Create post</p>
              </div>
            </div>
          )}
        </div>
        {/* <div
          title="notifications"
          className={`${theme?'hover:bg-white/25':'hover:bg-gray-200'} p-2 rounded-full cursor-pointer`}
        >
          <IoMdNotificationsOutline size={"24px"} onClick={()=> dispatch(setTheme(!theme))} />
        </div> */}
        <DarkModeSwitch checked={theme} onChange={()=> dispatch(setTheme(!theme))}/>
        <img
          className="cursor-pointer"
          width={"35px"}
          src="data:image/png;base64,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"
        ></img>
      </div>
    </div>
  );
};

export default Header;
