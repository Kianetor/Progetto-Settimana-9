function MovieCard({ movie }) {
  return (
    <img
      src={movie.Poster}
      alt={movie.Title}
      className="w-100 rounded"
      style={{ aspectRatio: "2 / 3", objectFit: "cover" }}
    />
  );
}

export default MovieCard;
