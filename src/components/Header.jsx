import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const Header = () => {

    const dispatch = useDispatch();

    const handleGptSearchClick = () => {
        // toggle gpt search
        dispatch(toggleGptSearch());
    };

    return ( 
        <div className="absolute px-12 py-4 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
            <img 
            className="w-44"
            src={NETFLIX_LOGO}
            alt="NETFLIX logo"
            />
            
            <button className="bg-purple-400 px-1 py-0 rounded-md mb-2 ml-[825px] cursor-pointer" onClick={handleGptSearchClick}>
                GPT Search
            </button>
            <div className="mr-4 ">
                <img className="w-10"
                src={USER_ICON}
                alt="user icon"
                />
            </div>
        </div>
    );
};

export default Header;