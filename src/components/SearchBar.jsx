import Form from "react-bootstrap/Form";

function SearchBar({ query, onQueryChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Control
        type="text"
        size="sm"
        className="search-input"
        placeholder="Search and press enter"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </Form>
  );
}

export default SearchBar;
