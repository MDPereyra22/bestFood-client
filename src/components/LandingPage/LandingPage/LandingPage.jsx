import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Welcome to BestFood</h1>
        <p>Your source for delicious and healthy recipes</p>
      </header>
      <div className={styles.mainContent}>
        <img
          src="https://cdn.shopify.com/s/files/1/0426/4978/0392/files/rsz_shutterstock_1658658250_96d866f2-3039-419f-88ec-ab26ddafea11.png?v=1674679613"
          alt="Comida deliciosa"
          className={styles.backgroundImage}
        />
        <div className={styles.introText}>
          <p>
          Explore a wide variety of recipes. Create your own recipes and more.
          </p>
          <Link to="/home">
            <button className={styles.enterButton}>Start Now!</button>
          </Link>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 Api Food. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;


