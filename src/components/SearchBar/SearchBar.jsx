import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getNameRecipes(name));
  };

  return (
    <div className={styles.divSearch}>
      <input
        type="text"
        placeholder="Recipe..."
        className={styles.inputSearch}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className={styles.buttonSearch}
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;


