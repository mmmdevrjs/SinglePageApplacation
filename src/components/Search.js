import React from "react";
import { useState } from "react";

function Search({ cb = Function.prototype }, props) {
  const [value, setValue] = useState("");
  const { key } = props;

  // enterni bosganda ishlashligi uchun handleKey function yozamiz

  const handleKey = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row" key={key}>
      <div className="input-field">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          value={value}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="btn"
        style={{ position: "absolute", right: 0, top: 0 }}
      >
        search
      </button>
    </div>
  );
}

export default Search;
