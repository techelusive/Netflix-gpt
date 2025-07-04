import MovieList from "../components/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
 
    return (
        movies.nowPlayingMovies && (
            <div className="px-6 bg-black">
                <div className="-mt-56 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                </div>
        </div>
        )
    );
};

export default SecondaryContainer;