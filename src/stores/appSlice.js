import { createSlice } from "@reduxjs/toolkit";
import girl from "../assets/girl.jpeg";


export const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    activeSidebar: "Home",
    videos: [],
    category: "All",
    channelPic: girl,
    searchSuggestion: [],
    inputText: '',
    showSearchData: '',
    offlinePage: false,
    theme: false,
  },
  reducers: {
    handleOpenSidebar: (state) => {
      state.open = !state.open;
    },
    hadleActiveSidebar: (state, action) => {
      if (state.activeSidebar !== action.payload) {
        state.activeSidebar = action.payload;
      }
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setCategory: (state, action) => {
      if (state.category !== action.payload) {
        state.category = action.payload;
      }
    },
    setChannelPic: (state,action)=> {
        state.channelPic = action.payload;
    },
    showSearchSuggestion: (state,action) => {
      state.searchSuggestion = action.payload;
    },
    setInputText: (state,action) => {
      state.inputText = action.payload;
    },
    setShowSearchData: (state,action) => {
      state.category = action.payload;
      state.inputText = action.payload;
      state.showSearchData = action.payload;
    },
    setOfflinePage: (state,action) => {
      state.offlinePage = action.payload;
    },
    setTheme: (state,action) => {
      {console.log(action.payload)}
      state.theme = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { handleOpenSidebar, hadleActiveSidebar, setVideos, setCategory,setChannelPic, showSearchSuggestion,setInputText,setShowSearchData, setOfflinePage, setTheme } =
  appSlice.actions;

export default appSlice.reducer;
