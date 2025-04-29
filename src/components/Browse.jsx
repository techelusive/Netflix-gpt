import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../containers/MainContainer";
import SecondaryContainer from "../containers/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    // calling the custom hook
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRated();
    
    return (
        <div>
            <Header />
            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                <MainContainer />
                <SecondaryContainer />
                </>
            )}
            {/* <MainContainer />
            <SecondaryContainer /> */}
        </div>
    )
};

export default Browse;