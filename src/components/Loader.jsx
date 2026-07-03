import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="d-flex justify-content-center py-5">
      <Spinner animation="border" variant="light" />
    </div>
  );
}

export default Loader;
