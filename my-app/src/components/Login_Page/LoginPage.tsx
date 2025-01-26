import { FunctionComponent, useCallback } from 'react';
import styles from './LoginPage.module.css';


const LoginPage:FunctionComponent = () => {
  	
  	const onButtonContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.loginPage}>
                		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
      			<img className={styles.loginPageChild} alt="" src="Rectangle_6.svg" />
      			<div className={styles.statusBar}>
        				<div className={styles.rightSide}>
          					<img className={styles.batteryIcon} alt="" src="Battery.svg" />
          					<img className={styles.wifiIcon} alt="" src="Wifi.svg" />
          					<img className={styles.mobileSignalIcon} alt="" src="Mobile Signal.svg" />
        				</div>
        				<div className={styles.div}>9:41</div>
      			</div>
      			<div className={styles.loginPageItem} />
      			<div className={styles.groupParent}>
        				<div className={styles.groupWrapper}>
          					<div className={styles.groupContainer}>
            						<div className={styles.groupDiv}>
              							<div className={styles.rectangleParent}>
                								<div className={styles.groupChild} />
                								<div className={styles.emailParent}>
                  									<div className={styles.email}>Email</div>
                  									<img className={styles.icon} alt="" src="6.svg" />
                								</div>
              							</div>
              							<div className={styles.rectangleGroup}>
                								<div className={styles.groupChild} />
                								<div className={styles.passwordParent}>
                  									<div className={styles.email}>Password</div>
                  									<img className={styles.icon} alt="" src="34.svg" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.button} onClick={onButtonContainerClick}>
              							<div className={styles.login}>Login</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.orParent}>
          					<div className={styles.or}>
            						<div className={styles.or1}>or</div>
            						<img className={styles.orChild} alt="" src="Vector 79.svg" />
            						<img className={styles.orItem} alt="" src="Vector 80.svg" />
          					</div>
          					<div className={styles.lastNameWrapper} onClick={onButtonContainerClick}>
            						<div className={styles.lastName}>
              							<div className={styles.lastNameChild} />
              							<div className={styles.gmail}>Gmail</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.loginParent} onClick={onButtonContainerClick}>
        				<div className={styles.login1}>Login</div>
        				<img className={styles.icon2} alt="" src="46.svg" />
      			</div>
      			<div className={styles.welcomeBack}>Welcome Back!</div>
      			<img className={styles.btnsigninwithgoogleIcon} alt="" src="btnSigninwithGoogle.svg" />
    		</div>);
};

export default LoginPage;
