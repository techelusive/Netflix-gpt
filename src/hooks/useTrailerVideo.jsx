import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();

    // fetch trailer data and updating the store with the trailer video data
    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        //console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0]
        //console.log(trailer);
        dispatch(addTrailerVideo(trailer));
        /**
         * if multiple type has same name
         * const filterData = json.results.filter((video) => ....);
         * const trailer = filterData.length ? filterData[0] : json.results[0]
         * console.log(trailer);
         */
    };
    useEffect(() => {
        getMovieTrailer();
    }, []);
};

export default useTrailerVideo;