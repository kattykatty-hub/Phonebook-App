import React from 'react';
import styles from './LoadingIndicator.module.css';

const LoadingIndicator = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader}></div>
    <p>Loading...</p>
  </div>
);

export default LoadingIndicator;
