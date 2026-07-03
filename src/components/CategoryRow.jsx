import { useState, useEffect } from "react";
import { API_KEY } from "../apiKey";
import MovieCard from "./MovieCard";

function CategoryRow({ title, searchTerm }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 5));
      }
    }

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="mb-4">
      <h2 className="mb-3">{title}</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {movies.map((movie) => (
          <div className="col" key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryRow;
