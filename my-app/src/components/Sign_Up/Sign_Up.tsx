import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './SignUpPage.module.css';


const SignUpPage:FunctionComponent = () => {
    const navigate = useNavigate(); // Get navigate function
  	const onBack = useCallback(() => {
        navigate("/"); // Navigate to the login page
    }, [navigate]);
    const onLogin = useCallback(() => {
        navigate("/"); // TODO: FIX TO GO TO HOME OF MAIN WEBSITE SAME FOR SIGN UP BUTTON
    }, [navigate]);
  	return (
    		<div className={styles.signUpPage}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
		        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      			<img className={styles.signUpPageChild} alt="" src="Rectangle 6.svg" />
      			<img className={styles.signUpPageItem} alt="" src="46.svg" onClick={onBack} />
      			<div className={styles.signUp}>Sign up</div>
      			<div className={styles.signUpPageInner} />
      			<div className={styles.signUp1} onClick={onBack}>Sign up</div> 
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.emailParent}>
          					<div className={styles.email}>Email</div>
          					<img className={styles.icon} alt="" src="6.svg" />
        				</div>
      			</div>
      			<div className={styles.rectangleGroup}>
        				<div className={styles.groupItem} />
        				<div className={styles.nameWrapper}>
          					<div className={styles.name}>Name</div>
        				</div>
        				<div className={styles.rectangleContainer}>
          					<div className={styles.groupChild} />
          					<div className={styles.passwordParent}>
            						<div className={styles.email}>Password</div>
            						<img className={styles.icon} alt="" src="34.svg" />
          					</div>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupChild} />
            						<div className={styles.checkPasswordParent}>
              							<div className={styles.email}>Check Password</div>
              							<img className={styles.icon} alt="" src="34.svg" />
            						</div>
          					</div>
        				</div>
      			</div>
      			<img className={styles.ellipseIcon} alt="" src="Ellipse 4.svg" />
      			<div className={styles.ellipseDiv} />
      			<div className={styles.lastName} onClick={onLogin}>
        				<div className={styles.lastNameChild} />
        				<div className={styles.gmail}>Gmail</div>
      			</div>
      			<img className={styles.btnsigninwithgoogleIcon} alt="" src="btnSigninwithGoogle.svg" />
      			<div className={styles.or}>or</div>
      			<img className={styles.vectorIcon} alt="" src="Vector 79.svg" />
      			<img className={styles.signUpPageChild1} alt="" src="Vector 80.svg" />
      			<div className={styles.welcome}>Welcome!</div>
      			<div className={styles.signUpPageInner1}>
        				<div className={styles.alreadyHaveAnAccountParent}>
          					<div className={styles.alreadyHaveAn}>Already have an account ?</div>
            						<div className={styles.login} onClick={onLogin}>Login</div>
            						</div>
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
          					
          					export default SignUpPage;
          					