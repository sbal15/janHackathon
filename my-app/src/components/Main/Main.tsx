import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './Main.module.css';

const Main: FunctionComponent = () => {
  const navigate = useNavigate(); // Get navigate function

  const onLoginClick = useCallback(() => {
    navigate('/login'); // Navigate to the login page
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate('/signup'); // Navigate to the login page
  }, [navigate]);

  return (
    <div className={styles.iphone161}>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div className={styles.iphone161Child} />
      <div className={styles.welcomeToTwinninContainer}>
        <span className={styles.welcomeToTwinninContainer1}>
          <p className={styles.welcomeTo}>{`Welcome to `}</p>
          <p className={styles.twinnin}>Twinnin!</p>
        </span>
      </div>
      <div className={styles.iphone161Item} onClick={onLoginClick}>
        <p className={styles.login}>Login</p>
      </div>
      <div className={styles.signUp} onClick={onRectangleClick}>
        Sign Up
      </div>
      <div className={styles.statusBar}>
        <div className={styles.rightSide}>
          <img className={styles.batteryIcon} alt="" src="./Battery.png" />
          <img className={styles.wifiIcon} alt="" src="./Main/Wifi.svg" />
          <img className={styles.mobileSignalIcon} alt="" src="./Mobile Signal.svg" />
        </div>
        <div className={styles.div}>9:41</div>
      </div>
    </div>
  );
};

export default Main;
