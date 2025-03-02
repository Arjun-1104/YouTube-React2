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
import { setCategory,setInputText,setShowSearchData } from "../stores/appSlice";
import { LiaPenSquareSolid } from "react-icons/lia";


const Header = () => {

  const [createClick, setCreateClick] = useState(false);
  const [openMic, setOpenMic] = useState(false);
  const {searchSuggestion,inputText,showSearchData} = useSelector((store) => store.app);

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
      console.log(data[1]);
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

  return (
    <div className="flex items-center justify-between px-5 fixed w-full bg-white py-2 z-10">

      {/* left section */}
      <div className="flex w-[10%] justify-between items-center">
        <div
          className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={() => dispatch(handleOpenSidebar())}
        >
          <RxHamburgerMenu size={"24px"} />
        </div>
        <Link to="/">
        <img
          to="/"
          className="cursor-pointer"
          width="95px"
          title="YouTube Home"
          src="data:image/png;base64,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"
          alt=""
        />
        </Link>
      </div>

      {/* middle section */}
      <div className="flex w-[40%] justify-between">
        <div className="flex w-[90%] items-center rounded-full">
          <div
            className={`flex w-[90%] items-center rounded-full rounded-r-none border border-gray-400 ${styles.container}`}
          >
            <CiSearch size={"18px"} className={`ml-4 ${styles.searchSmall}`} />
            <input
              type="text"
              className={`w-[100%] py-2 px-4 outline-none rounded-full rounded-r-none border-r-0`}
              placeholder="Search"
              value={inputText}
              onChange={(e) => dispatch(setInputText(e.target.value))}
            />
            {inputText && (
              <div
                className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
                onClick={() => dispatch(setInputText(''))}
              >
                <RiCloseLargeFill size={"24px"} />
              </div>
            )}
            {inputText !== showSearchData && (
              <div className="z-2 absolute top-14 bg-white shadow-xl border-0 w-[31%] rounded-xl py-4">
                <ul>
                  {searchSuggestion.map((text, idx) => {
                    return (
                      <div
                        className="flex items-center py-1 hover:bg-gray-100 cursor-pointer"
                        key={idx}
                        onClick={() => dispatch(setShowSearchData(text))}
                      >
                        <CiSearch
                          size={"18px"}
                          className={`ml-4 mr-4`}
                        />
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
            className="p-2 bg-gray-100 w-[12%] rounded-r-full border border-l-0 border-gray-400 hover:bg-gray-200 flex justify-center cursor-pointer"
          >
            <CiSearch size={"24px"} onClick={() => dispatch(handleShowData(inputText))}/>
          </div>
        </div>
        <div
          title="Search with your voice"
          className="p-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <IoMdMic size={"24px"} onClick={toggleMicWindow} />
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
      <div className=" flex items-center w-[15%] justify-around">
        <div>
          <div className="flex items-center bg-gray-100 rounded-full py-1.5 px-3 gap-2 cursor-pointer hover:bg-gray-200" onClick={()=> setCreateClick(!createClick)}>
            <div className="rounded-full">
              <AiOutlinePlus size={"24px"} />
            </div>
            <h2 className="font-medium">Create</h2>
          </div>

          {createClick && <div className="fixed w-45 bg-white shadow-2xl py-2 rounded-lg">
            <div className="px-4 flex items-center gap-4 py-2 hover:bg-gray-100 cursor-pointer">
              <AiOutlinePlaySquare size={"24px"}/>
              <p className="text-sm font-normal">Upload video</p>
            </div>
            <div className="px-4 flex items-center gap-4 py-2 hover:bg-gray-100 cursor-pointer">
              <HiOutlineSignal size={"24px"}/>
              <p className="text-sm font-normal">Go live</p>
            </div>
            <div className="px-4 flex items-center gap-4 py-2 hover:bg-gray-100 cursor-pointer">
              <BsPencilSquare size={"24px"}/>
              <p className="text-sm font-normal">Create post</p>
            </div>
          </div>}
        </div>
        <div
          title="notifications"
          className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
        >
          <IoMdNotificationsOutline size={"24px"} />
        </div>
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
