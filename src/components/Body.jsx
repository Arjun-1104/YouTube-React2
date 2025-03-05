import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Offline from "./Offline";
import { useSelector } from "react-redux";

const Body = () => {
  const {offlinePage,theme} = useSelector((store) => store.app);
  return (
    <>
      <div className={`${theme?'bg-black text-white':'bg-white text-black'} pt-16 relative w-[100%] h-[100%]`}>
        <Sidebar></Sidebar>
        <Outlet/>
        {/* <Offline /> */}
      </div>
    </>
  );
};

export default Body;
