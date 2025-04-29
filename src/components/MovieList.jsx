import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {

    console.log(movies);
    return (
        <div className="p-6">
            <h1 className="text-3xl py-4 text-red-700">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                {movies?.map((movie) => (
                    <MovieCards key={movie.id} posterPath={movie.poster_path} />
                ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;