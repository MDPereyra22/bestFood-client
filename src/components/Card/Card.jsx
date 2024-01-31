import React from "react";
import styles from "./Card.module.css"

const Card = ({title, image, diets})=>{

    return (
        <div className={styles.divCarta}>
            
            <img className={styles.imagen} src={image} alt="receta" />
            <h1 className={styles.carta}>{title}</h1>
            <h5 className={styles.carta}>Dietas: {diets}</h5>
        </div>
    );
}

export default Card;