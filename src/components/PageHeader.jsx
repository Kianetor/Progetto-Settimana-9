function PageHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-3">
        <h1 className="mb-0 fs-3">TV Shows</h1>

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Genres
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Comedy</a></li>
            <li><a className="dropdown-item" href="#">Drama</a></li>
            <li><a className="dropdown-item" href="#">Fantasy</a></li>
          </ul>
        </div>
      </div>

      <div className="d-flex gap-3 fs-5">
        <a href="#" className="text-white text-decoration-none">⊞</a>
        <a href="#" className="text-white text-decoration-none">☰</a>
      </div>
    </div>
  );
}

export default PageHeader;
