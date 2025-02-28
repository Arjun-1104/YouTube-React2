import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Feed = () => {
  const open = useSelector((store) => store.app.open);

  return (
    <div className={`${open ? "ml-56" : "ml-20"} px-8 `}>
      <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  );
};

export default Feed;
