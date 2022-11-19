import { useState } from "react";

function Search(props) {
  const [value, setValue] = useState("");

  function handleSubmit() {
    props.setQuerry(value);
  }



  return (
    <div className="search-form">
      <input
        value={value}
        onChange={(event) => {
          setValue(event.currentTarget.value);
        }}
        className="input"
      />

      <button onClick={handleSubmit} className="button">
        Search
      </button>
    </div>
  );
}

export default Search;
