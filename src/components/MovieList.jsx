import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "./MovieCard";

function MovieList({ movies, onMovieClick }) {
  return (
    <Row xs={2} md={3} lg={5} className="g-3 mt-2">
      {movies.map((movie) => (
        <Col key={movie.imdbID}>
          <MovieCard movie={movie} onClick={() => onMovieClick(movie)} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
