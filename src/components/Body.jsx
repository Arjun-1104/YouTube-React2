import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="pt-16 relative w-[100%]">
        <Sidebar></Sidebar>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
