import React from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Welcome back!!</h1>
      <Button text={"continue"} />
    </React.Fragment>
  );
}

export default App;
