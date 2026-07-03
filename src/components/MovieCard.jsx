import Image from "react-bootstrap/Image";

function MovieCard({ movie }) {
  return (
    <Image src={movie.Poster} alt={movie.Title} rounded fluid
      className="movie-card w-100" style={{ aspectRatio: "2 / 3", objectFit: "cover" }}/>
  );
}

export default MovieCard;

/* aspectRatio rapporto larghezza/altezza object-fit: cover riempie contenitore */