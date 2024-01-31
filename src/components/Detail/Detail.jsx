import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const myRecipe = useSelector((state) => state.detail);

  return (
    <div className={styles.container}>
      {myRecipe ? (
        <div className={styles.card}>
          <Link to="/home">
            <button className={styles.backButton}>Back to Home</button>
          </Link>
          <div className={styles.circleImage}>
            <img src={myRecipe.image} alt={myRecipe.title} />
          </div>
          <h1>{myRecipe.title}</h1>
          <h2>ID:</h2>
          <p>{myRecipe.id}</p>
          <h2>Summary:</h2>
          <p>{myRecipe.summary}</p>
          <h2>Health Score:</h2>
          <p> {myRecipe.healthScore}</p>
          <h2>Steps:</h2>
          <ul>
            {myRecipe.steps &&
              myRecipe.steps.map((step, index) => (
                <li key={index}>
                  <span>{index + 1}. </span>
                  {step.step}
                </li>
              ))}
          </ul>
          <h2>Diets:</h2>
          <div>
          <ul>
            {myRecipe.diets &&
              myRecipe.diets.map((diet, index) => (
                <li key={index}>{diet}</li>
              ))}
          </ul>
          </div>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
