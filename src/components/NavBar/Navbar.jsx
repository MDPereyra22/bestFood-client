import React from "react";
import { useDispatch } from "react-redux";
import { sortRecipes, sortHealthScore, filteredRecipesByDiets, filterCreated } from "../../actions";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";




const NavBar = ({handleFilterActive}) => {
  const dispatch = useDispatch();

  const handleSortAlphabetically = (event) => {
    dispatch(sortRecipes(event.target.value));

    handleFilterActive();
  };

  const handleSortByHealthScore = (event) => {
    dispatch(sortHealthScore(event.target.value));

    handleFilterActive();
  };

  const handleFilterByDiets = (event) => {
    dispatch(filteredRecipesByDiets(event.target.value))

    handleFilterActive();
  }

  const handleFilterCreated = (event) => {
    dispatch(filterCreated(event.target.value))

    handleFilterActive();
  }

  return (
    <div className={styles.navBarContainer}>
      <div className={styles.searchLine}><SearchBar /></div>
      
      <div className={styles.selectLine}>
      <select onChange={e => handleSortAlphabetically(e)}>
        <option value='ascendente'>A-Z</option>
        <option value='descendente'>Z-A</option>
      </select>
      <select onChange={(e) => handleSortByHealthScore(e)}>
        <option value="ascendente">Ascending health score</option>
        <option value="descendente">Descending health score</option>
      </select>
      <select onChange={e => handleFilterByDiets(e)}>
        <option value="all">All</option>
        <option value="gluten free">Gluten free</option>
        <option value="dairy free">Dairy Free</option>
        <option value="lacto ovo vegetarian">Lacto Ovo-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="paleolithic">Paleolithic</option>
        <option value="primal">Primal</option>
        <option value="whole 30">Whole 30</option>
        <option value="pescatarian">Pescetarian</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="fodmap friendly">Foodmap friendly</option>
      </select>
      <select onChange={e => handleFilterCreated(e)}>
        <option value='all'>All</option>
        <option value='created'>Created</option>
        <option value='api'>Existing</option>
      </select>
      </div>
    </div>
  )

};

export default NavBar;
