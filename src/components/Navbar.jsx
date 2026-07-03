import SearchBar from "./SearchBar";

function Navbar({ query, onQueryChange, onSubmit }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-netflix-black px-4 py-3">
      <a className="navbar-brand text-danger fw-bold fs-3" href="#">
        NETFLIX
      </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">TV Shows</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Recently Added</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My List</a>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center gap-3">
        <SearchBar
          query={query}
          onQueryChange={onQueryChange}
          onSubmit={onSubmit}
        />
        <span className="badge border border-secondary text-white-50">
          KIDS
        </span>
        <a href="#" className="text-white fs-5 text-decoration-none">🔔</a>
        <a href="#" className="text-white fs-5 text-decoration-none">👤</a>
      </div>
    </nav>
  );
}

export default Navbar;
