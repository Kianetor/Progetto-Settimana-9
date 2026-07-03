function SearchBar({ query, onQueryChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control form-control-sm bg-black text-white border-secondary"
        placeholder="Cerca un film o una serie..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </form>
  )
}

export default SearchBar