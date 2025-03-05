import { setCategory } from "../stores/appSlice";
import { useDispatch, useSelector } from "react-redux";

const ButtonList = () => {
  const buttonHeading = [
    "All",
    "Prodcasts",
    "Javascript",
    "Court",
    "Live",
    "Data Structure",
    "T-Series",
    "Music",
    "Arijit Singh",
    "Match",
    "WWE",
    "Mixes",
    "Batter",
    "English Speaking",
    "Movies",
    "Bhajan",
    "Cricket",
  ];

  const {category,theme} = useSelector((store) => store.app);
  const dispatch = useDispatch();

  const handleActive = (item) => {
    dispatch(setCategory(item));
  };

  return (
    <div className={`${theme?'bg-black':'bg-white'} flex overflow-x-scroll w-[100%] whitespace-nowrap no-scrollbar py-3 sticky top-14 z-1`}>
      {buttonHeading.map((item, index) => {
        return (
          <div key={index} title={item}>
            <button
              onClick={() => handleActive(item)}
              className={`${
                item === category
                  ? `${theme?'bg-white text-black':'bg-black text-white'}`
                  : `${theme?'bg-white/20 text-white transition duration-300 hover:bg-white/30': 'bg-gray-100 text-black hover:bg-gray-200'}`/** */
              } py-2 px-3 rounded-lg  font-medium mx-1.5 text-sm cursor-pointer`}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
