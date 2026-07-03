import { useState } from "react";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "./App.css";
import { API_KEY } from "./apiKey";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import CategoryRow from "./components/CategoryRow";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import MovieModal from "./components/MovieModal";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setHasSearched(true);
    setLoading(true);

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
    );
    const data = await response.json();

    /* Gestione errore */

    if (data.Response === "False") {
      setMovies([]);
      setError(data.Error);
    } else {
      setMovies(data.Search);
      setError(null);
    }

    setLoading(false);
  }

  return (
    <div className="bg-netflix-black text-white min-vh-100">
      <Navbar query={query} onQueryChange={setQuery} onSubmit={handleSubmit} />
      <Container fluid className="px-4 py-4">
        <PageHeader />
        {hasSearched ? (
          loading ? (
            <Loader />
          ) : error ? (
            <Alert variant="danger">{error}</Alert>
          ) : (
            <MovieList movies={movies} onMovieClick={setSelectedMovie} />
          )
        ) : (
          <>
            <CategoryRow
              title="Harry Potter"
              searchTerm="harry potter"
              onMovieClick={setSelectedMovie}
            />
            <CategoryRow
              title="Lord of the Rings"
              searchTerm="lord of the rings"
              onMovieClick={setSelectedMovie}
            />
            <CategoryRow
              title="Batman"
              searchTerm="batman"
              onMovieClick={setSelectedMovie}
            />
          </>
        )}
      </Container>
      <Footer />
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default App;
