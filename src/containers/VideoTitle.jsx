import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";

const VideoTitle = ({title, overview}) => {

    const [isOverviewHidden, setIsOverviewHidden] = useState(false);
    //const [isTitleHidden, setIsTitleHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOverviewHidden(true); // Hide overview after 2 seconds
            //setIsTitleHidden(true);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div className="w-full aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-transparent">

{/* transition-transform duration-1000 ${isTitleHidden ? 'opacity-0 translate-y-10 */}
            <h1 className={`py-6 text-6xl font-bold w-1/2 ' : ''}`}>
            {title}
            </h1>
            {/* <h1 className="text-6xl font-bold">{title}</h1> */}
            {/* Apply classes based on the state */}
            <p className={`py-6 text-lg w-1/2 transition-all duration-1000 ${isOverviewHidden ? 'opacity-0 translate-y-10' : ''}`}>
                {overview}
            </p>
            {/* <p className="py-6 text-lg w-1/2">{overview}</p> */}
            <div className="flex mr-56">
                
                <button className="bg-white text-black p-2 px-6 text-xl rounded-sm flex items-center hover:opacity-80 cursor-pointer">
                    <FaPlay className="mr-2 text-black" /> Play
                </button>
                
                <button className="mx-2 bg-gray-500 text-white p-2 px-8 text-xl opacity-70 rounded-sm flex items-center cursor-pointer">
                < AiOutlineInfoCircle className="mr-2 text-white" /> More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;

