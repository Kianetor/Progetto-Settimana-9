import BsNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchBar from "./SearchBar";

function Navbar({ query, onQueryChange, onSubmit }) {
  return (
    <BsNavbar expand="lg" variant="dark" className="bg-netflix-black px-4 py-3">
      <BsNavbar.Brand href="#" className="netflix-logo text-danger fs-2">
        NETFLIX
      </BsNavbar.Brand>

      <BsNavbar.Toggle aria-controls="main-navbar" />
      <BsNavbar.Collapse id="main-navbar">
        <Nav className="me-auto">
          <Nav.Link href="#" eventKey="home">Home</Nav.Link>
          <Nav.Link href="#" eventKey="tv-shows">TV Shows</Nav.Link>
          <Nav.Link href="#" eventKey="movies">Movies</Nav.Link>
          <Nav.Link href="#" eventKey="recently-added">Recently Added</Nav.Link>
          <Nav.Link href="#" eventKey="my-list">My List</Nav.Link>
        </Nav>

        <div className="d-flex align-items-center gap-3">
          <SearchBar
            query={query}
            onQueryChange={onQueryChange}
            onSubmit={onSubmit}
          />
          <span className="kids-badge">KIDS</span>
          <Nav.Link href="#" className="fs-5 p-0">🔔</Nav.Link>
          <Nav.Link href="#" className="fs-5 p-0">👤</Nav.Link>
        </div>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}

export default Navbar;
