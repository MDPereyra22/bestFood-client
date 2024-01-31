import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../actions";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import styles from "./Home.module.css";
import NavBar from "../NavBar/Navbar";
import Paginado from "../Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const recipesPerPage = 9;
  const totalPages = Math.ceil(allRecipes.length / recipesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterActive = () => {
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToShow = allRecipes.slice(startIndex, endIndex);

  return (
    <div>
     <NavBar handleFilterActive={handleFilterActive} />
     

      <div className={styles.divRutas}>
        <Link  className={styles.enterButton} to="/recipe"> Create recipe </Link>
        <h1 className={styles.text}>Welcome to the best food website</h1>
        <button className={styles.enterButton} onClick={() => dispatch(getRecipes())}>
          Reload recipes
        </button></div>



      <div className={styles.divContenedor}>
        {recipesToShow.map((element) => {
          const diets = element.diets.join(", ");
          return (
            <Link key={element.id} to={`/detail/${element.id}`}>
              <Card title={element.title} image={element.image} diets={diets} />
            </Link>
          );
        })}
      </div>

      <div>
      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
      
    </div>
  );
};

export default Home;
