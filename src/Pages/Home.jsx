import MovieCard from "../Components/MovieCard";
import { useState , useEffect} from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
    const [searchQuery , setSearchQuery] =useState("")
    const [movies , setMovies] = useState([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {
         const loadPopularMovies = async () => {
          try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
          }catch(err){
            setError(err.message);
          }
          finally{
            setLoading(false);
          }
         }
          loadPopularMovies();
    },[movies])
      

      const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return;
        if(loading) return

        setLoading(true)
        try {
          const searchResults = searchMovies(searchQuery);
          setMovies(searchResults);
          setError(null)
        }
        catch (err){
        setError("Failed to fetch movies.....");
        console.error(err);
      } finally {
        setLoading(false);
      }
      }

    return(
       <>
       <div className="home"> 
             <form onSubmit={handleSearch} className="search">
                <input type="text" 
                 placeholder="Search for Movies..."
                 className="search-input"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)} />
                 <button type="submit" className="search-button">Search</button>
                 

              {error && <div className="error">{error}</div>}

             </form>
            {loading ?(<div className="loading">Loading...</div>) : (<div className="movies-grid">
            {movies.map(
                (movie) =>(
                <MovieCard movie={movie} key={movie.id}/>
             ))}
          </div>)}
       </div>
    
    
      </>
    )
}

export default Home;