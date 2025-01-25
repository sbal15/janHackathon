import { FunctionComponent, useCallback } from 'react';
import styles from './Main.module.css';


const Main:FunctionComponent = () => {
  	
  	const onRectangleClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.iphone161}>
      			<div className={styles.iphone161Child} />
      			<div className={styles.welcomeToTwinninContainer}>
        				<span className={styles.welcomeToTwinninContainer1}>
          					<p className={styles.welcomeTo}>{`Welcome to `}</p>
          					<p className={styles.twinnin}>Twinnin!</p>
        				</span>
      			</div>
      			<div className={styles.iphone161Item} onClick={onRectangleClick} />
      			<div className={styles.login}>Login</div>
      			<div className={styles.signUp} onClick={onRectangleClick}>Sign Up</div>
      			<div className={styles.statusBar}>
        				<div className={styles.rightSide}>
          					<img className={styles.batteryIcon} alt="" src="Battery.svg" />
          					<img className={styles.wifiIcon} alt="" src="Wifi.svg" />
          					<img className={styles.mobileSignalIcon} alt="" src="Mobile Signal.svg" />
        				</div>
        				<div className={styles.div}>9:41</div>
      			</div>
      			<div className={styles.statusBar}>
        				<div className={styles.rightSide}>
          					<img className={styles.batteryIcon} alt="" src="Battery.svg" />
          					<img className={styles.wifiIcon} alt="" src="Wifi.svg" />
          					<img className={styles.mobileSignalIcon} alt="" src="Mobile Signal.svg" />
        				</div>
        				<div className={styles.div}>9:41</div>
      			</div>
    		</div>);
};

export default Main;
