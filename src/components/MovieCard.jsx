import Image from "react-bootstrap/Image";

function MovieCard({ movie, onClick }) {
  return (
    <Image src={movie.Poster} alt={movie.Title} rounded fluid onClick={onClick}
      className="movie-card w-100" style={{ aspectRatio: "2 / 3", objectFit: "cover" }}/>
  );
}

export default MovieCard;

/* aspectRatio rapporto larghezza/altezza object-fit: cover riempie contenitore */