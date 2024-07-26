export default function SearchBarSearchBar({ onSubmit, toast }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const { searchValue } = form.elements;
    if (!searchValue.value.trim()) {
      return toast.error("Can not be empty");
    }
    onSubmit(searchValue.value);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //   autocomplete="off"
          // autofocus
          name="searchValue"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
