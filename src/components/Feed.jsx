import ButtonList from "./ButtonList";
import Offline from "./Offline";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const Feed = () => {
  const {open,offlinePage} = useSelector((store) => store.app);

  return (
    <div className={`${open ? "ml-56" : "ml-20"} px-8 `}>
      {(offlinePage)?<Offline/>:<><ButtonList/><VideoContainer/></>}
    </div>
  );
};

export default Feed;
