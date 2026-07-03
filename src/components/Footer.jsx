function Footer() {
  return (
    <footer className="bg-netflix-black text-white-50 pt-5 pb-4 mt-5">
      <div className="container-fluid px-4">
        <div className="d-flex gap-3 mb-4 fs-5">
          <a href="#" className="text-white-50 text-decoration-none">Facebook</a>
          <a href="#" className="text-white-50 text-decoration-none">Instagram</a>
          <a href="#" className="text-white-50 text-decoration-none">Twitter</a>
          <a href="#" className="text-white-50 text-decoration-none">YouTube</a>
        </div>

        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Audio and Subtitles</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Media Center</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact us</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Audio Description</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Legal Notices</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cookie Preferences</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Gift Cards</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of Use</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        <button type="button" className="btn btn-outline-secondary btn-sm mb-3">
          Service Code
        </button>

        <p className="small mb-0">&copy; 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
