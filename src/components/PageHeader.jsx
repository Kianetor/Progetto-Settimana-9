import Dropdown from "react-bootstrap/Dropdown";

function PageHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-3">
        <h1 className="mb-0 fs-3">TV Shows</h1>

        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" size="sm">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Fantasy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="d-flex gap-3 fs-5">
        <a href="#" className="text-white text-decoration-none">⊞</a>
        <a href="#" className="text-white text-decoration-none">☰</a>
      </div>
    </div>
  );
}

export default PageHeader;
