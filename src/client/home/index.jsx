import React from 'react';
import styles from './Home.scss';

const Home = props => (
  <h1 className={styles.Home}>Hello {props.name || 'World'} (Jenkins)</h1>
);

export default Home;
