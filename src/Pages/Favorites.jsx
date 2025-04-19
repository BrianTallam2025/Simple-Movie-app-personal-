import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../Components/MovieCard";


function Favorites(){
    const {favorites} = useMovieContext();

    if(favorites){
        return( 
            <>
            <div className="favorites">
                <h2 className="favorites">My Favorite Movies</h2>
                <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
            </>
        );
    }
    return( 
        <>
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will show up here</p>

        </div>
        </>

    );
}

export default Favorites;