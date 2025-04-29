import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";


const useTopRated = () => {

    const dispatch = useDispatch();

    const topRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        topRatedMovies();
    }, []);
};

export default useTopRated;