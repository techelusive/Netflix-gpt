import { MOVIE_THUMBNAIL_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {

    return (
        <div className="w-48 pr-4 rounded-lg">
            <img 
            src={MOVIE_THUMBNAIL_URL + posterPath} 
            alt="MovieCards thumbnail"
            />
        </div>
    );
};

export default MovieCards;
