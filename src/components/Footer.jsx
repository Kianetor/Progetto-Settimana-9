import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <footer className="footer bg-netflix-black text-white-50 pt-4 pb-4">
      <div className="footer-inner">
        <div className="d-flex justify-content-start gap-4 mb-4 fs-5">
          <a href="#" className="text-white-50">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white-50">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-white-50">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="#" className="text-white-50">
            <i className="bi bi-youtube"></i>
          </a>
        </div>

        <Row className="justify-content-center fs-xs">
          <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Audio and Subtitles</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Media Center</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact us</a></li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Audio Description</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Investor Relations</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Legal Notices</a></li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Jobs</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Cookie Preferences</a></li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mb-3">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Gift Cards</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms of Use</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Corporate Information</a></li>
            </ul>
          </Col>
        </Row>

        <Button variant="outline-secondary" size="sm" className="fs-xs mb-3">
          Service Code
        </Button>

        <p className="fs-xs mb-0">&copy; 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
