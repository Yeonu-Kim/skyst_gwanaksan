import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; 
  
  const Button = ({text, onClickColor='var(--highlight-pink)', originalColor='var(--primary-color)', onClickTextColor='var(--white-color)'}) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
      setIsClicked(current => !current); 
    };
    const buttonClasses = `${styles.button} ${isClicked ? styles.clicked : ''}`;
    const buttonStyle = {
      backgroundColor: isClicked ? onClickColor : originalColor,
      color: isClicked ? onClickTextColor : 'black',
    };
    return (
      <button 
      className={buttonClasses} 
      onClick={handleClick} 
      style={buttonStyle}
      on
    >  
        <span className={styles.btnText}>{text}</span>
    </button>
    );
  };

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickColor: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  };
export default Button;