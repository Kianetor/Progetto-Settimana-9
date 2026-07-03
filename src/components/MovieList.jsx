import MovieCard from './MovieCard'

function MovieList({ movies }) {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mt-2">
      {movies.map((movie) => (
        <div className="col" key={movie.imdbID}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default MovieList
