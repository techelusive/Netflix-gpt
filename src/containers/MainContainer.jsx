import { useSelector } from "react-redux";// to get data from the store
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

/** to avoid below error 
 * ! it is called re-return / early return */
    if (!movies) return;

/** this gives error why ? bcz first time even before the store is executed my nowplayingmovies is [null]
    // ! and i'm trying to access the first index of null */
    const mainMovie = movies[0]
    //console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
        </div>
    );
};

export default MainContainer;