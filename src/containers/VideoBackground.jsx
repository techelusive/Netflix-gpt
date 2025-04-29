import { useSelector } from "react-redux"
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useTrailerVideo(movieId); // calling the custom hook
    
    if (!trailerVideo) return;

    return (
        <div>
           <iframe 
           className="w-full aspect-video" 
           src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}  //use autoplay and mute embed video for autoplaying the video
           title="YouTube video player"   
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
           >
           </iframe>
        </div>
    );
};

export default VideoBackground;