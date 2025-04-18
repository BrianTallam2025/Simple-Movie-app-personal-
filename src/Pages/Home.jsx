import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home(){
    const [searchQuery , setSearchQuery] =useState("")
      const movies = [
        {
         id:1,
         title: "The Matrix",
         release_date: "2024"
        },
        {
         id:2,
         title: "State",
         release_date: "2021"
        },
        {
         id:3,
         title: "John Wick",
         release_date: "2023"
        },
        {
         id:4,
         title: "Despicable Me",
         release_date: "2022"
         },
      ];

      const handleSearch = (e) => {
        e.preventDefault()
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
                 
             </form>
          <div className="movies-grid">
            {movies.map(
                (movie) =>(
                <MovieCard movie={movie} key={movie.id}/>
             ))}
          </div>
       </div>
    
    
      </>
    )
}

export default Home;